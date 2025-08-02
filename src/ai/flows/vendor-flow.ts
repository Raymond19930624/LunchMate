
'use server';
/**
 * @fileOverview Flow for handling vendor data from Google Sheets.
 *
 * - getVendors - Retrieves a list of all vendors.
 * - addVendor - Adds a new vendor to the sheet.
 * - updateVendor - Updates an existing vendor's information.
 * - deleteVendor - Deletes a vendor and their associated data.
 * - duplicateVendor - Duplicates a vendor and all their menus/options.
 * - Vendor - The type definition for a vendor.
 */
import { getSheetData, appendSheetData, batchUpdateSheetData, updateSheetData } from '@/services/sheet-service';
import { z } from 'zod';

// The ID of your Google Sheet
const SPREADSHEET_ID = '1Zj2h0cYlrb2mBaNgl1-PoOK7tlCCwDccAXn5w66hp4c';
const VENDORS_SHEET_NAME = 'vendors';
const MENUS_SHEET_NAME = 'menus';
const MENU_OPTIONS_SHEET_NAME = 'menu_options';

export type Vendor = {
  vendorId: string;
  vendorName: string;
  description: string;
  isActive: boolean;
};

/**
 * Retrieves all vendors from the 'vendors' sheet.
 * @returns {Promise<Vendor[]>} A list of vendors.
 */
export async function getVendors(): Promise<Vendor[]> {
    const range = `${VENDORS_SHEET_NAME}!A:D`; 
    const dataWithHeader = await getSheetData(SPREADSHEET_ID, range);

    if (!dataWithHeader || dataWithHeader.length < 2) {
        return [];
    }
    
    const headers = dataWithHeader[0].map(h => String(h).trim());
    const headerMap = headers.reduce((acc, header, index) => {
        acc[header.trim()] = index;
        return acc;
    }, {} as Record<string, number>);

    const requiredVendorColumns = ['id', 'name', 'description', 'isActive'];
    for (const col of requiredVendorColumns) {
        if (headerMap[col] === undefined) {
            console.error(`Error: The '${VENDORS_SHEET_NAME}' sheet is missing the required column: '${col}'.`);
            return []; // Return empty array to prevent crash
        }
    }

    const data = dataWithHeader.slice(1);

    return data.map((row) => ({
        vendorId: row[headerMap['id']] || '',
        vendorName: row[headerMap['name']] || '',
        description: row[headerMap['description']] || '',
        isActive: row[headerMap['isActive']] === 'TRUE' || row[headerMap['isActive']] === true,
    })).filter(v => v.vendorId);
}

// Define the input type directly for the function
export type AddVendorRequest = {
    name: string;
    description: string;
};


/**
 * Adds a new vendor to the 'vendors' sheet.
 * @param {AddVendorRequest} vendor - The vendor data to add.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function addVendor(vendor: AddVendorRequest): Promise<{success: boolean}> {
    const AddVendorSchema = z.object({
        name: z.string().min(1, "店家名稱不能為空"),
        description: z.string(),
    });

    const validation = AddVendorSchema.safeParse(vendor);
    if (!validation.success) {
        const a = validation.error.format()._errors.join(', ');
        throw new Error(`輸入資料有誤: ${a}`);
    }

    // Check for duplicate vendor name
    const allVendors = await getVendors();
    if (allVendors.some(v => v.vendorName.trim().toLowerCase() === vendor.name.trim().toLowerCase())) {
        throw new Error("店家名稱已存在。");
    }

    const range = `${VENDORS_SHEET_NAME}!A:D`;
    const allVendorsRange = `${VENDORS_SHEET_NAME}!A2:A`;

    const allVendorIdsData = await getSheetData(SPREADSHEET_ID, allVendorsRange);
    const lastIdNum = allVendorIdsData.length > 0 
        ? Math.max(0, ...allVendorIdsData.map(row => parseInt((row[0] || 'v0').replace('v', ''), 10)).filter(num => !isNaN(num)))
        : 0;
    
    const newId = `v${(lastIdNum + 1).toString().padStart(3, '0')}`;

    const values = [
        [newId, vendor.name, vendor.description, 'TRUE'],
    ];

    await appendSheetData(SPREADSHEET_ID, range, values);
    return { success: true };
}


export type UpdateVendorRequest = {
    vendorId: string;
    name: string;
    description: string;
};

/**
 * Updates an existing vendor's information in the 'vendors' sheet.
 * @param {UpdateVendorRequest} vendor - The vendor data to update.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function updateVendor(vendor: UpdateVendorRequest): Promise<{ success: boolean }> {
    const UpdateVendorSchema = z.object({
        vendorId: z.string(),
        name: z.string().min(1, "店家名稱不能為空"),
        description: z.string(),
    });
    
    const validation = UpdateVendorSchema.safeParse(vendor);
    if (!validation.success) {
        const a = validation.error.format()._errors.join(', ');
        throw new Error(`輸入資料有誤: ${a}`);
    }

    const allVendors = await getVendors();
    if (allVendors.some(v => v.vendorId !== vendor.vendorId && v.vendorName.trim().toLowerCase() === vendor.name.trim().toLowerCase())) {
        throw new Error("已存在相同名稱的其他店家。");
    }

    const vendorsRange = `${VENDORS_SHEET_NAME}!A2:D`; 
    const vendorsData = await getSheetData(SPREADSHEET_ID, vendorsRange);
    
    const rowIndex = vendorsData.findIndex(row => row[0] === vendor.vendorId);
    if (rowIndex === -1) {
        throw new Error(`找不到 ID 為 ${vendor.vendorId} 的店家。`);
    }

    const rowToUpdate = rowIndex + 2; // +2 for 1-based index and header row
    const updateRange = `${VENDORS_SHEET_NAME}!B${rowToUpdate}:C${rowToUpdate}`;

    await updateSheetData(SPREADSHEET_ID, updateRange, [[vendor.name, vendor.description]]);

    return { success: true };
}


/**
 * Deletes a vendor and all their associated menu items and options.
 * @param vendorId The ID of the vendor to delete.
 * @returns A success flag.
 */
export async function deleteVendor(vendorId: string): Promise<{ success: boolean }> {
  // 1. Get all data from the three sheets, including headers
  const [vendorsDataWithHeader, menusDataWithHeader, menuOptionsDataWithHeader] = await Promise.all([
    getSheetData(SPREADSHEET_ID, `${VENDORS_SHEET_NAME}!A:D`),
    getSheetData(SPREADSHEET_ID, `${MENUS_SHEET_NAME}!A:F`),
    getSheetData(SPREADSHEET_ID, `${MENU_OPTIONS_SHEET_NAME}!A:F`),
  ]);
  
  const vendorHeaders = vendorsDataWithHeader.length > 0 ? vendorsDataWithHeader[0] : [];
  const vendorRows = vendorsDataWithHeader.length > 1 ? vendorsDataWithHeader.slice(1) : [];
  
  const menuHeaders = menusDataWithHeader.length > 0 ? menusDataWithHeader[0] : [];
  const menuRows = menusDataWithHeader.length > 1 ? menusDataWithHeader.slice(1) : [];

  const optionsHeaders = menuOptionsDataWithHeader.length > 0 ? menuOptionsDataWithHeader[0] : [];
  const optionsRows = menuOptionsDataWithHeader.length > 1 ? menuOptionsDataWithHeader.slice(1) : [];


  // 2. Identify menu items and options to be deleted
  const menuItemsToDelete = menuRows
    .filter(row => row[1] === vendorId)
    .map(row => row[0]); // Get menu item IDs

  // 3. Filter data to keep
  const vendorsToKeep = vendorRows.filter(row => row[0] !== vendorId);
  const menusToKeep = menuRows.filter(row => row[1] !== vendorId);
  const menuOptionsToKeep = optionsRows.filter(row => !menuItemsToDelete.includes(row[1]));

  // 4. Prepare batch update data (clear and write)
  const batchData = [
    {
      range: `${VENDORS_SHEET_NAME}!A1:D`,
      values: [vendorHeaders, ...vendorsToKeep],
    },
    {
      range: `${MENUS_SHEET_NAME}!A1:F`,
       values: [menuHeaders, ...menusToKeep],
    },
    {
      range: `${MENU_OPTIONS_SHEET_NAME}!A1:F`,
      values: [optionsHeaders, ...menuOptionsToKeep],
    },
  ];
  
  // 5. Execute batch update
  await batchUpdateSheetData(SPREADSHEET_ID, batchData);

  return { success: true };
}


/**
 * Duplicates a vendor and all their associated menus and options.
 * @param {string} vendorId - The ID of the vendor to duplicate.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function duplicateVendor(vendorId: string): Promise<{ success: boolean }> {
  // 1. Fetch all existing data
  const [
    vendorsDataWithHeader,
    menusDataWithHeader,
    menuOptionsDataWithHeader,
  ] = await Promise.all([
    getSheetData(SPREADSHEET_ID, `${VENDORS_SHEET_NAME}!A:D`),
    getSheetData(SPREADSHEET_ID, `${MENUS_SHEET_NAME}!A:F`),
    getSheetData(SPREADSHEET_ID, `${MENU_OPTIONS_SHEET_NAME}!A:F`),
  ]);

  const vendorRows = vendorsDataWithHeader.length > 1 ? vendorsDataWithHeader.slice(1) : [];
  const menuRows = menusDataWithHeader.length > 1 ? menusDataWithHeader.slice(1) : [];
  const optionsRows = menuOptionsDataWithHeader.length > 1 ? menuOptionsDataWithHeader.slice(1) : [];

  // 2. Find the original vendor and menu items
  const originalVendorRow = vendorRows.find(row => row[0] === vendorId);
  if (!originalVendorRow) {
    throw new Error(`找不到 ID 為 ${vendorId} 的店家。`);
  }

  const originalMenus = menuRows.filter(row => row[1] === vendorId);
  const originalMenuIds = originalMenus.map(row => row[0]);
  const originalOptions = optionsRows.filter(row => originalMenuIds.includes(row[1]));
  
  // 3. Generate new vendor info
  let newVendorName = `${originalVendorRow[1]} - 副本`;
  let suffix = 2;
  while (vendorRows.some(row => row[1] === newVendorName)) {
    newVendorName = `${originalVendorRow[1]} - 副本 ${suffix}`;
    suffix++;
  }

  let lastVendorIdNum = vendorRows.length > 0 ? Math.max(0, ...vendorRows.map(row => parseInt((row[0] || 'v0').replace('v', ''), 10)).filter(num => !isNaN(num))) : 0;
  const newVendorId = `v${(lastVendorIdNum + 1).toString().padStart(3, '0')}`;
  
  const newVendorData = [[
      newVendorId,
      newVendorName,
      originalVendorRow[2], // description
      originalVendorRow[3]  // isActive
  ]];

  // 4. Generate new menus and options
  let lastMenuIdNum = menuRows.length > 0 ? Math.max(0, ...menuRows.map(row => parseInt((row[0] || 'm0').replace('m', ''), 10)).filter(num => !isNaN(num))) : 0;
  let lastOptionIdNum = optionsRows.length > 0 ? Math.max(0, ...optionsRows.map(row => parseInt((row[0] || 'o0').replace('o', ''), 10)).filter(num => !isNaN(num))) : 0;

  const newMenusData = [];
  const newOptionsData = [];
  const oldToNewMenuIdMap: Record<string, string> = {};

  for (const menuRow of originalMenus) {
    lastMenuIdNum++;
    const oldMenuId = menuRow[0];
    const newMenuId = `m${lastMenuIdNum.toString().padStart(3, '0')}`;
    oldToNewMenuIdMap[oldMenuId] = newMenuId;

    newMenusData.push([
      newMenuId,
      newVendorId,
      menuRow[2], // name
      menuRow[3], // price
      menuRow[4], // isActive
      menuRow[5], // description
    ]);
  }

  for (const optionRow of originalOptions) {
    lastOptionIdNum++;
    const oldMenuId = optionRow[1];
    const newMenuId = oldToNewMenuIdMap[oldMenuId];
    if (!newMenuId) continue;

    const newOptionId = `o${lastOptionIdNum.toString().padStart(3, '0')}`;
    newOptionsData.push([
      newOptionId,
      newMenuId,
      optionRow[2], // groupName
      optionRow[3], // choiceName
      optionRow[4], // priceDelta
      optionRow[5], // isDefault
    ]);
  }

  // 5. Append all new data to sheets
  if (newVendorData.length > 0) {
    await appendSheetData(SPREADSHEET_ID, `${VENDORS_SHEET_NAME}!A:D`, newVendorData);
  }
  if (newMenusData.length > 0) {
    await appendSheetData(SPREADSHEET_ID, `${MENUS_SHEET_NAME}!A:F`, newMenusData);
  }
  if (newOptionsData.length > 0) {
    await appendSheetData(SPREADSHEET_ID, `${MENU_OPTIONS_SHEET_NAME}!A:F`, newOptionsData);
  }

  return { success: true };
}
