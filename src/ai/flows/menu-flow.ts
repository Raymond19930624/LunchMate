
'use server';
/**
 * @fileOverview Flow for handling menu data from Google Sheets.
 */
import { getSheetData, appendSheetData, clearSheetData, updateSheetData, batchUpdateSheetData } from '@/services/sheet-service';
import { type AddMenuItemRequest, AddMenuItemRequestSchema } from '@/lib/schema/menu';

// The ID of your Google Sheet
const SPREADSHEET_ID = '1Zj2h0cYlrb2mBaNgl1-PoOK7tlCCwDccAXn5w66hp4c';
const MENU_SHEET_NAME = 'menus';
const MENU_OPTIONS_SHEET_NAME = 'menu_options';

export type MenuOptionChoice = {
  id: string;
  name: string;
  priceDelta: number;
  isDefault: boolean;
}

export type MenuOptionGroup = {
  name: string;
  choices: MenuOptionChoice[];
}

export type MenuItem = {
  id: string;
  vendorId: string;
  name:string;
  description?: string;
  price: number;
  isActive: boolean;
  options?: MenuOptionGroup[];
};

/**
 * Retrieves all menu items for a given vendor from the 'menus' sheet, including their options.
 * @param {string} vendorId The ID of the vendor.
 * @returns {Promise<MenuItem[]>} A list of menu items with their options.
 */
export async function getMenusByVendorId(vendorId: string): Promise<MenuItem[]> {
  try {
    const [menuSheetData, optionsSheetData] = await Promise.all([
        getSheetData(SPREADSHEET_ID, `${MENU_SHEET_NAME}!A:F`),
        getSheetData(SPREADSHEET_ID, `${MENU_OPTIONS_SHEET_NAME}!A:F`)
    ]);
    
    // If there's no data or only a header row, return an empty array.
    if (!menuSheetData || menuSheetData.length < 2) {
      return [];
    }

    const menuHeaders = menuSheetData[0].map(h => String(h).trim());
    const menuRows = menuSheetData.slice(1);

    const menuHeaderMap = menuHeaders.reduce((acc, header, index) => {
        acc[header.trim()] = index;
        return acc;
    }, {} as Record<string, number>);
    
    // Add validation to ensure all required columns exist
    const requiredMenuColumns = ['id', 'vendorId', 'name', 'price', 'isActive'];
    for (const col of requiredMenuColumns) {
        if (menuHeaderMap[col] === undefined) {
            console.error(`Error: The '${MENU_SHEET_NAME}' sheet is missing the required column: '${col}'.`);
            return []; // Return empty array to prevent crash
        }
    }


    const allItems: MenuItem[] = menuRows
      .map(row => {
        // Skip empty rows to prevent errors
        if (!row || row.every(cell => !cell)) {
            return null;
        }
        
        const id = row[menuHeaderMap['id']];
        const rowVendorId = row[menuHeaderMap['vendorId']];
        const name = row[menuHeaderMap['name']];
        const price = parseInt(row[menuHeaderMap['price']] || '0', 10);
        
        // Stricter validation: ensure essential fields exist and match vendorId
        if (!id || !name || isNaN(price) || rowVendorId !== vendorId) {
            return null;
        }

        return {
            id: id,
            vendorId: rowVendorId,
            name: name,
            description: row[menuHeaderMap['description']] || '',
            price: price,
            isActive: row[menuHeaderMap['isActive']] === 'TRUE' || row[menuHeaderMap['isActive']] === true,
            options: [],
        }
      })
      .filter(Boolean) as MenuItem[]; // Filter out null values
      
    if (optionsSheetData && optionsSheetData.length > 1) {
      const optionsHeaders = optionsSheetData[0].map(h => String(h).trim());
      const optionsRows = optionsSheetData.slice(1);
      const optionsHeaderMap = optionsHeaders.reduce((acc, header, index) => {
          acc[header.trim()] = index;
          return acc;
      }, {} as Record<string, number>);

      // Validate required option columns
      const requiredOptionColumns = ['id', 'menuItemId', 'groupName', 'choiceName', 'priceDelta', 'isDefault'];
       for (const col of requiredOptionColumns) {
        if (optionsHeaderMap[col] === undefined) {
            console.error(`Error: The '${MENU_OPTIONS_SHEET_NAME}' sheet is missing the required column: '${col}'.`);
            // Continue without options, but don't crash
            return allItems;
        }
      }

      const allOptions = optionsRows.map(row => ({
        id: row[optionsHeaderMap['id']] || '',
        menuItemId: row[optionsHeaderMap['menuItemId']] || '',
        groupName: row[optionsHeaderMap['groupName']] || '',
        choiceName: row[optionsHeaderMap['choiceName']] || '',
        priceDelta: parseInt(row[optionsHeaderMap['priceDelta']] || '0', 10),
        isDefault: row[optionsHeaderMap['isDefault']] === 'TRUE' || row[optionsHeaderMap['isDefault']] === true,
      }));

      // Group options by menu item ID
      const optionsByMenuItem = allOptions.reduce((acc, option) => {
        if (!acc[option.menuItemId]) {
          acc[option.menuItemId] = [];
        }
        acc[option.menuItemId].push(option);
        return acc;
      }, {} as Record<string, typeof allOptions>);


      // Attach options to menu items
      for (const item of allItems) {
        if (optionsByMenuItem[item.id]) {
          const itemOptions = optionsByMenuItem[item.id];
          const groups = itemOptions.reduce((acc, option) => {
            if (!acc[option.groupName]) {
              acc[option.groupName] = { name: option.groupName, choices: [] };
            }
            acc[option.groupName].choices.push({
              id: option.id,
              name: option.choiceName,
              priceDelta: option.priceDelta,
              isDefault: option.isDefault,
            });
            return acc;
          }, {} as Record<string, MenuOptionGroup>);
          item.options = Object.values(groups);
        }
      }
    }
    
    return allItems;

  } catch (error) {
    console.error("讀取菜單失敗:", error);
    return []; // Ensure an empty array is returned on any error
  }
}

/**
 * Adds a new menu item along with its options to the respective sheets.
 * @param {AddMenuItemRequest} item - The menu item data to add.
 * @returns {Promise<{success: boolean, menuItemId: string}>} A success flag and the new menu item's ID.
 */
export async function addMenuItem(item: AddMenuItemRequest): Promise<{ success: boolean; menuItemId: string }> {
  const validation = AddMenuItemRequestSchema.safeParse(item);
  if (!validation.success) {
      const errorMsg = validation.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ');
      throw new Error(`輸入資料有誤: ${errorMsg}`);
  }
  
  // Check for duplicate menu item name for the same vendor
  const existingMenus = await getMenusByVendorId(item.vendorId);
  if (existingMenus.some(menu => menu.name.trim().toLowerCase() === item.name.trim().toLowerCase())) {
    throw new Error("該店家已有相同名稱的品項。");
  }

  // 1. Add the menu item first to get an ID
  const allMenusRange = `${MENU_SHEET_NAME}!A2:A`;
  const allMenuIdsData = await getSheetData(SPREADSHEET_ID, allMenusRange);
  const lastIdNum = allMenuIdsData.length > 0 
      ? Math.max(0, ...allMenuIdsData.map(row => parseInt((row[0] || 'm0').replace('m', ''), 10)).filter(num => !isNaN(num)))
      : 0;
  const newMenuId = `m${(lastIdNum + 1).toString().padStart(3, '0')}`;
  
  const menuValues = [
    [newMenuId, item.vendorId, item.name, item.price, 'TRUE', item.description || ''],
  ];
  await appendSheetData(SPREADSHEET_ID, `${MENU_SHEET_NAME}!A:F`, menuValues);

  // 2. Add options if any
  if (item.optionGroups && item.optionGroups.length > 0) {
    const allOptionsRange = `${MENU_OPTIONS_SHEET_NAME}!A2:A`;
    const allOptionIdsData = await getSheetData(SPREADSHEET_ID, allOptionsRange);
    let lastOptionIdNum = allOptionIdsData.length > 0 
        ? Math.max(0, ...allOptionIdsData.map(row => parseInt((row[0] || 'o0').replace('o', ''), 10)).filter(num => !isNaN(num)))
        : 0;

    const optionsValues = [];
    for (const group of item.optionGroups) {
      const choices = group.choices.split(',').map(c => c.trim());
      const priceDeltas = (group.priceDeltas || '').split(',').map(p => parseInt(p.trim(), 10));
      const defaultChoice = choices[0]; // The first choice is the default

      for (let i = 0; i < choices.length; i++) {
        const choiceName = choices[i];
        if (!choiceName) continue;
        
        lastOptionIdNum++;
        const newOptionId = `o${lastOptionIdNum.toString().padStart(3, '0')}`;
        const priceDelta = !isNaN(priceDeltas[i]) ? priceDeltas[i] : 0;
        const isDefault = choiceName === defaultChoice;

        optionsValues.push([
          newOptionId,
          newMenuId,
          group.groupName,
          choiceName,
          priceDelta,
          isDefault ? 'TRUE' : 'FALSE'
        ]);
      }
    }
    
    if (optionsValues.length > 0) {
        await appendSheetData(SPREADSHEET_ID, `${MENU_OPTIONS_SHEET_NAME}!A:F`, optionsValues);
    }
  }

  return { success: true, menuItemId: newMenuId };
}

export type UpdateMenuItemRequest = {
    id: string; // Existing menu item ID
    vendorId: string;
    name: string;
    description?: string;
    price: number;
    optionGroups?: AddMenuItemRequest['optionGroups'];
}

/**
 * Updates an existing menu item and its options.
 * @param {UpdateMenuItemRequest} item - The menu item data to update.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function updateMenuItem(item: UpdateMenuItemRequest): Promise<{ success: boolean }> {
    // Check for duplicate menu item name
    const existingMenus = await getMenusByVendorId(item.vendorId);
    if (existingMenus.some(menu => menu.id !== item.id && menu.name.trim().toLowerCase() === item.name.trim().toLowerCase())) {
        throw new Error("該店家已有相同名稱的品項。");
    }

    // 1. Find and update the menu item's basic info (name, price)
    const menuRange = `${MENU_SHEET_NAME}!A2:F`;
    const menuData = await getSheetData(SPREADSHEET_ID, menuRange);
    const rowIndex = menuData.findIndex(row => row[0] === item.id);

    if (rowIndex === -1) {
        throw new Error(`找不到 ID 為 ${item.id} 的菜單品項。`);
    }
    const rowToUpdate = rowIndex + 2; // +2 for 1-based index and header
    const updateMenuRange = `${MENU_SHEET_NAME}!C${rowToUpdate}:F${rowToUpdate}`;
    await updateSheetData(SPREADSHEET_ID, updateMenuRange, [[item.name, item.price, 'TRUE', item.description || '']]);

    // 2. Read all existing options
    const menuOptionsDataWithHeader = await getSheetData(SPREADSHEET_ID, `${MENU_OPTIONS_SHEET_NAME}!A:F`);
    const optionsHeaders = menuOptionsDataWithHeader.length > 0 ? menuOptionsDataWithHeader[0] : [];
    const optionsRows = menuOptionsDataWithHeader.length > 1 ? menuOptionsDataWithHeader.slice(1) : [];

    // 3. Filter out all old options for the current menu item
    const otherItemsOptions = optionsRows.filter(row => row[1] !== item.id);
    
    // 4. Create new option rows from the request
    let lastOptionIdNum = optionsRows.length > 0
        ? Math.max(0, ...optionsRows.map(row => parseInt((row[0] || 'o0').replace('o', ''), 10)).filter(num => !isNaN(num)))
        : 0;

    const newOptionsValues = [];
    if (item.optionGroups) {
        for (const group of item.optionGroups) {
            const choices = group.choices.split(',').map(c => c.trim());
            const priceDeltas = (group.priceDeltas || '').split(',').map(p => parseInt(p.trim(), 10));
            const defaultChoice = choices[0]; // The first choice is the default

            for (let i = 0; i < choices.length; i++) {
                const choiceName = choices[i];
                if (!choiceName) continue;
                
                lastOptionIdNum++;
                const newOptionId = `o${lastOptionIdNum.toString().padStart(3, '0')}`;
                const priceDelta = !isNaN(priceDeltas[i]) ? priceDeltas[i] : 0;
                const isDefault = choiceName === defaultChoice;

                newOptionsValues.push([
                    newOptionId,
                    item.id, // Use existing menu item ID
                    group.groupName,
                    choiceName,
                    priceDelta,
                    isDefault ? 'TRUE' : 'FALSE'
                ]);
            }
        }
    }

    // 5. Combine old options (from other items) and new options for this item
    const finalOptions = [...otherItemsOptions, ...newOptionsValues];
    
    const finalValues = finalOptions.length > 0 ? [optionsHeaders, ...finalOptions] : [optionsHeaders];


    // 6. Batch update the options sheet
    await batchUpdateSheetData(SPREADSHEET_ID, [
        {
            range: `${MENU_OPTIONS_SHEET_NAME}!A1:F`,
            values: finalValues,
        }
    ]);

    return { success: true };
}


export type DeleteMenuItemRequest = {
    id: string;
};

/**
 * Deletes a menu item from the 'menus' sheet by its ID.
 * This is a "hard delete" operation. It reads all data, filters out the
 * item to be deleted and its options, clears the sheets, and writes the
 * filtered data back.
 * @param {DeleteMenuItemRequest} req - The request containing the item ID to delete.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function deleteMenuItem(req: DeleteMenuItemRequest): Promise<{ success: boolean }> {
  // 1. Get all data from the two sheets, including headers.
  const [menusDataWithHeader, menuOptionsDataWithHeader] = await Promise.all([
    getSheetData(SPREADSHEET_ID, `${MENU_SHEET_NAME}!A:F`),
    getSheetData(SPREADSHEET_ID, `${MENU_OPTIONS_SHEET_NAME}!A:F`),
  ]);

  const menuHeaders = menusDataWithHeader.length > 0 ? menusDataWithHeader[0] : [];
  const menuRows = menusDataWithHeader.length > 1 ? menusDataWithHeader.slice(1) : [];

  const optionsHeaders = menuOptionsDataWithHeader.length > 0 ? menuOptionsDataWithHeader[0] : [];
  const optionsRows = menuOptionsDataWithHeader.length > 1 ? menuOptionsDataWithHeader.slice(1) : [];

  // 2. Filter data to keep.
  const menusToKeep = menuRows.filter(row => row[0] !== req.id);
  const menuOptionsToKeep = optionsRows.filter(row => row[1] !== req.id);

  // 3. Prepare batch update data (clear and write).
  // We write back the headers plus the filtered data.
  const batchData = [
    {
      range: `${MENU_SHEET_NAME}!A1:F`,
      values: menuHeaders.length > 0 ? [menuHeaders, ...menusToKeep] : menusToKeep,
    },
    {
      range: `${MENU_OPTIONS_SHEET_NAME}!A1:F`,
      values: optionsHeaders.length > 0 ? [optionsHeaders, ...menuOptionsToKeep] : menuOptionsToKeep,
    },
  ];

  // 4. Execute batch update.
  await batchUpdateSheetData(SPREADSHEET_ID, batchData);
  
  return { success: true };
}

export type BatchDeleteMenuItemsRequest = {
    ids: string[];
};

/**
 * Deletes multiple menu items and their associated options in a single batch operation.
 * @param {BatchDeleteMenuItemsRequest} req - The request containing the array of item IDs to delete.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function batchDeleteMenuItems(req: BatchDeleteMenuItemsRequest): Promise<{ success: boolean }> {
  if (!req.ids || req.ids.length === 0) {
    return { success: true }; // Nothing to delete
  }

  // 1. Get all data from the two sheets, including headers.
  const [menusDataWithHeader, menuOptionsDataWithHeader] = await Promise.all([
    getSheetData(SPREADSHEET_ID, `${MENU_SHEET_NAME}!A:F`),
    getSheetData(SPREADSHEET_ID, `${MENU_OPTIONS_SHEET_NAME}!A:F`),
  ]);

  const menuHeaders = menusDataWithHeader.length > 0 ? menusDataWithHeader[0] : [];
  const menuRows = menusDataWithHeader.length > 1 ? menusDataWithHeader.slice(1) : [];

  const optionsHeaders = menuOptionsDataWithHeader.length > 0 ? menuOptionsDataWithHeader[0] : [];
  const optionsRows = menuOptionsDataWithHeader.length > 1 ? menuOptionsDataWithHeader.slice(1) : [];

  // 2. Filter data to keep.
  const idsToDeleteSet = new Set(req.ids);
  const menusToKeep = menuRows.filter(row => !idsToDeleteSet.has(row[0]));
  const menuOptionsToKeep = optionsRows.filter(row => !idsToDeleteSet.has(row[1]));

  // 3. Prepare batch update data (clear and write).
  // We write back the headers plus the filtered data.
  const batchData = [
    {
      range: `${MENU_SHEET_NAME}!A1:F`,
      values: menuHeaders.length > 0 ? [menuHeaders, ...menusToKeep] : [],
    },
    {
      range: `${MENU_OPTIONS_SHEET_NAME}!A1:F`,
      values: optionsHeaders.length > 0 ? [optionsHeaders, ...menuOptionsToKeep] : [],
    },
  ];

  // 4. Execute batch update.
  await batchUpdateSheetData(SPREADSHEET_ID, batchData);
  
  return { success: true };
}

/**
 * Duplicates a menu item and all its associated options.
 * @param {string} menuItemId - The ID of the menu item to duplicate.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function duplicateMenuItem(menuItemId: string): Promise<{ success: boolean }> {
  // 1. Fetch all existing data
  const [
    menusDataWithHeader,
    menuOptionsDataWithHeader,
  ] = await Promise.all([
    getSheetData(SPREADSHEET_ID, `${MENU_SHEET_NAME}!A:F`),
    getSheetData(SPREADSHEET_ID, `${MENU_OPTIONS_SHEET_NAME}!A:F`),
  ]);

  const menuRows = menusDataWithHeader.length > 1 ? menusDataWithHeader.slice(1) : [];
  const optionsRows = menuOptionsDataWithHeader.length > 1 ? menuOptionsDataWithHeader.slice(1) : [];

  // 2. Find the original item and options
  const originalMenuRow = menuRows.find(row => row[0] === menuItemId);
  if (!originalMenuRow) {
    throw new Error(`找不到 ID 為 ${menuItemId} 的菜單品項。`);
  }

  const originalOptions = optionsRows.filter(row => row[1] === menuItemId);

  // 3. Generate new menu item info
  let newMenuName = `${originalMenuRow[2]} - 副本`;
  let suffix = 2;
  while (menuRows.some(row => row[2] === newMenuName && row[1] === originalMenuRow[1])) {
    newMenuName = `${originalMenuRow[2]} - 副本 ${suffix}`;
    suffix++;
  }
  
  let lastMenuIdNum = menuRows.length > 0 ? Math.max(0, ...menuRows.map(row => parseInt((row[0] || 'm0').replace('m', ''), 10)).filter(num => !isNaN(num))) : 0;
  const newMenuId = `m${(lastMenuIdNum + 1).toString().padStart(3, '0')}`;
  
  const newMenuData = [[
      newMenuId,
      originalMenuRow[1], // vendorId
      newMenuName,
      originalMenuRow[3], // price
      originalMenuRow[4], // isActive
      originalMenuRow[5], // description
  ]];

  // 4. Generate new options
  let lastOptionIdNum = optionsRows.length > 0 ? Math.max(0, ...optionsRows.map(row => parseInt((row[0] || 'o0').replace('o', ''), 10)).filter(num => !isNaN(num))) : 0;
  
  const newOptionsData = [];
  for (const optionRow of originalOptions) {
    lastOptionIdNum++;
    const newOptionId = `o${lastOptionIdNum.toString().padStart(3, '0')}`;
    newOptionsData.push([
      newOptionId,
      newMenuId, // Link to the new menu item
      optionRow[2], // groupName
      optionRow[3], // choiceName
      optionRow[4], // priceDelta
      optionRow[5], // isDefault
    ]);
  }

  // 5. Append all new data to sheets
  await appendSheetData(SPREADSHEET_ID, `${MENU_SHEET_NAME}!A:F`, newMenuData);
  if (newOptionsData.length > 0) {
    await appendSheetData(SPREADSHEET_ID, `${MENU_OPTIONS_SHEET_NAME}!A:F`, newOptionsData);
  }

  return { success: true };
}


// --- Menu Option Flows ---

export type AddMenuOptionRequest = {
  menuItemId: string;
  groupName: string;
  choiceName: string;
  priceDelta: number;
  isDefault: boolean;
}

export async function addMenuOption(req: AddMenuOptionRequest): Promise<{ success: boolean }> {
  // If the new option is default, unset other defaults in the same group.
  if (req.isDefault) {
    await setMenuOptionDefault({ menuItemId: req.menuItemId, groupName: req.groupName, optionId: '' }); // Pass empty optionId to unset all, new one will be set
  }

  const range = `${MENU_OPTIONS_SHEET_NAME}!A:F`;
  const allOptionsRange = `${MENU_OPTIONS_SHEET_NAME}!A2:A`;
  
  const allOptionIdsData = await getSheetData(SPREADSHEET_ID, allOptionsRange);
  const lastIdNum = allOptionIdsData.length > 0 
      ? Math.max(0, ...allOptionIdsData.map(row => parseInt((row[0] || 'o0').replace('o', ''), 10)).filter(num => !isNaN(num)))
      : 0;

  const newId = `o${(lastIdNum + 1).toString().padStart(3, '0')}`;
  
  const values = [[
    newId, 
    req.menuItemId, 
    req.groupName, 
    req.choiceName, 
    req.priceDelta, 
    req.isDefault ? 'TRUE' : 'FALSE'
  ]];

  await appendSheetData(SPREADSHEET_ID, range, values);

  // If the new option was set to default, ensure it is now the only default one
  if(req.isDefault) {
      await setMenuOptionDefault({ optionId: newId, menuItemId: req.menuItemId, groupName: req.groupName });
  }

  return { success: true };
}


export type DeleteMenuOptionRequest = {
  optionId: string;
}

export async function deleteMenuOption(req: DeleteMenuOptionRequest): Promise<{ success: boolean }> {
  const range = `${MENU_OPTIONS_SHEET_NAME}!A2:F`;
  const data = await getSheetData(SPREADSHEET_ID, range);

  if (!data) {
      throw new Error("找不到菜單選項資料。");
  }
  
  const rowIndex = data.findIndex(row => row[0] === req.optionId);
  
  if (rowIndex === -1) {
      console.log(`找不到 ID 為 ${req.optionId} 的菜單選項。`);
      return { success: false }; // Item not found
  }

  const rowToDelete = rowIndex + 2; 
  // This is not a great way to "delete" a row. A better way is to read all, filter, clear, and write back.
  // For now, let's just clear the specific row.
  const clearRange = `${MENU_OPTIONS_SHEET_NAME}!A${rowToDelete}:F${rowToDelete}`;

  await clearSheetData(SPREADSHEET_ID, clearRange);
  return { success: true };
}

export type SetMenuOptionDefaultRequest = {
  optionId: string; // The option to set as default. If empty, all options in group will be unset.
  menuItemId: string;
  groupName: string;
}

/**
 * Sets a specific option as the default for its group, unsetting any previous default.
 * @param req The request containing option, menu item, and group identifiers.
 * @returns A success flag.
 */
export async function setMenuOptionDefault(req: SetMenuOptionDefaultRequest): Promise<{ success: boolean }> {
    const { optionId, menuItemId, groupName } = req;
    const range = `${MENU_OPTIONS_SHEET_NAME}!A2:F`;
    const data = await getSheetData(SPREADSHEET_ID, range);

    if (!data) {
        throw new Error("找不到菜單選項資料。");
    }

    const updates = [];
    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        // Check if the option belongs to the same menu item and group
        if (row[1] === menuItemId && row[2] === groupName) {
            const currentOptionId = row[0];
            const isCurrentlyDefault = row[5] === 'TRUE';
            const shouldBeDefault = currentOptionId === optionId;

            // If this row needs to change its default status
            if (isCurrentlyDefault !== shouldBeDefault) {
                const rowToUpdate = i + 2; // +2 because sheet is 1-indexed and we skipped header
                updates.push({
                    range: `${MENU_OPTIONS_SHEET_NAME}!F${rowToUpdate}`,
                    values: [[shouldBeDefault ? 'TRUE' : 'FALSE']],
                });
            }
        }
    }

    if (updates.length > 0) {
      // Note: This can be slow if there are many updates. Batching would be better.
      for (const update of updates) {
          await updateSheetData(SPREADSHEET_ID, update.range, update.values);
      }
    }
    
    return { success: true };
}
