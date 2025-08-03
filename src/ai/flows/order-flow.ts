
'use server';

import { getSheetData, appendSheetData, getHeaders, updateSheetData, batchUpdateSheetData, getAuthenticatedClient } from '@/services/sheet-service';
import { getVendors, type Vendor } from './vendor-flow';
import { type FinalOrder, type OrderItem } from '@/components/OrderSummary';
import { PublishOrderRequestSchema, type PublishOrderRequest } from '@/lib/schema/order';
import { format, parse, parseISO, isValid } from 'date-fns';

const SPREADSHEET_ID = '1Zj2h0cYlrb2mBaNgl1-PoOK7tlCCwDccAXn5w66hp4c';
const DAILY_ORDERS_SHEET_NAME = 'daily_orders';
const ORDER_ITEMS_SHEET_NAME = 'order_items';

export type DailyOrder = {
    id: string;
    date: string;
    vendorId: string;
    vendorName?: string; // Optional: for display on admin page
    deadline: string;
    status?: 'pending' | 'confirmed' | 'cancelled'; // 訂單狀態
};

// This type is for the user-facing order page
export type AvailableOrder = {
    id: string; // dailyOrderId
    vendor: Vendor;
    date: string;
    deadline: string;
};

// Helper to safely parse the options string, which might be valid JSON or a "key:value" string.
const safeParseOptions = (optionsStr: string): Record<string, string> => {
    if (!optionsStr || typeof optionsStr !== 'string') return {};
    try {
        // First, try to parse it as a valid JSON string.
        // This handles cases like '{"飯量":"正常","辣度":"不辣"}'
        const parsed = JSON.parse(optionsStr);
        if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
            return parsed;
        }
    } catch (e) {
        // If JSON.parse fails, it's not a JSON string.
        // Assume it's a simple "key:value" string like "飯量:正常".
        // This is a fallback for data that wasn't stored as JSON.
        const parts = optionsStr.split(':');
        if (parts.length === 2) {
            const key = parts[0].trim();
            const value = parts[1].trim();
            if (key && value) {
                return { [key]: value };
            }
        }
        // If it's something else we don't recognize, log it and return empty.
        console.warn(`Could not parse options string into a valid object: "${optionsStr}"`);
    }
    // Return empty object if it's not a parsable JSON object or a simple key:value pair.
    return {};
};


// Helper function to format time from Sheets (which can be a number)
const formatTime = (timeValue: any): string => {
    if (typeof timeValue === 'string' && timeValue.match(/^\d{2}:\d{2}(:\d{2})?$/)) {
        return timeValue.substring(0, 5);
    }
    
    if (typeof timeValue === 'number' && timeValue > 0 && timeValue < 1) {
      // It's a time serial number from Sheets
      const totalSeconds = Math.round(timeValue * 86400);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    // Try parsing as a date string to extract time
    if (typeof timeValue === 'string') {
        try {
            const date = parseISO(timeValue);
            if (isValid(date)) {
                return format(date, 'HH:mm');
            }
        } catch (e) {
            // Ignore parse errors from ISO
        }
        
        const timeMatch = timeValue.match(/(\d{2}:\d{2})/);
        if (timeMatch) return timeMatch[0];
    }
    
    // Fallback for unexpected formats
    return '00:00'; 
};

// Helper function to format date from Sheets (which can be a number or string)
const formatDate = (dateValue: any): string => {
    if (!dateValue) return format(new Date(), 'yyyy-MM-dd'); // Return today's date if empty

    let date;
    
    // Handle Sheets date serial number (number of days since 1899-12-30)
    if (typeof dateValue === 'number') {
        const excelEpoch = new Date(Date.UTC(1899, 11, 30));
        date = new Date(excelEpoch.getTime() + dateValue * 86400000);
    } else {
        // Handle ISO string like '2024-07-25T00:00:00.000Z' or simple string '2024-07-25'
        try {
           date = parseISO(String(dateValue));
           // If ISO parsing fails, try the simple format
           if (!isValid(date)) {
               date = parse(String(dateValue), 'yyyy-MM-dd', new Date());
           }
        } catch(e) {
           date = parse(String(dateValue), 'yyyy-MM-dd', new Date());
        }
    }
    
    // If date is valid, format it, otherwise return today's date as a fallback
    return isValid(date) ? format(date, 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd');
};


/**
 * Retrieves all available orders from the daily_orders sheet.
 * Any order present is considered available.
 * @returns {Promise<AvailableOrder[]>} A list of available vendors and their deadlines.
 */
export async function getAvailableOrders(): Promise<AvailableOrder[]> {
    const dailyOrdersRange = `${DAILY_ORDERS_SHEET_NAME}!A:D`;
    const [dailyOrdersData, allVendors] = await Promise.all([
        getSheetData(SPREADSHEET_ID, dailyOrdersRange),
        getVendors()
    ]);

    if (!dailyOrdersData || dailyOrdersData.length < 2) {
        return [];
    }
    
    const header = dailyOrdersData[0];
    const rows = dailyOrdersData.slice(1);

    const headerMap = header.reduce((acc, h, i) => {
        acc[String(h)] = i;
        return acc;
    }, {} as Record<string, number>);

    const allVendorsMap = new Map(allVendors.map(v => [v.vendorId, v]));

    const availableOrders: AvailableOrder[] = [];

    for (const row of rows) {
        if (row.every(cell => !cell)) continue; // Skip completely empty rows

        const id = row[headerMap['id']];
        const vendorId = row[headerMap['vendorId']];
        const dateRaw = row[headerMap['date']];
        const deadlineRaw = row[headerMap['deadline']];

        if (!id || !vendorId) continue; // Skip rows without essential data

        const vendor = allVendorsMap.get(vendorId);
        if (!vendor || !vendor.isActive) continue;

        availableOrders.push({
            id: id,
            vendor,
            date: formatDate(dateRaw),
            deadline: formatTime(deadlineRaw) // Format the deadline
        });
    }

    return availableOrders;
}

/**
 * Retrieves all daily orders for admin display.
 * @returns {Promise<DailyOrder[]>} A list of all published orders.
 */
export async function getAllDailyOrders(): Promise<DailyOrder[]> {
    const dailyOrdersRange = `${DAILY_ORDERS_SHEET_NAME}!A:D`;
     const [dailyOrdersData, allVendors] = await Promise.all([
        getSheetData(SPREADSHEET_ID, dailyOrdersRange),
        getVendors()
    ]);
    
    if (!dailyOrdersData || dailyOrdersData.length < 2) {
        return [];
    }

    const header = dailyOrdersData[0];
    const rows = dailyOrdersData.slice(1);
    const allVendorsMap = new Map(allVendors.map(v => [v.vendorId, v]));
    
    const headerMap = header.reduce((acc, h, i) => {
        acc[String(h)] = i;
        return acc;
    }, {} as Record<string, number>);

    const orders = rows.map(row => {
        const vendorId = row[headerMap['vendorId']];
        const vendor = allVendorsMap.get(vendorId);
        
        return {
            id: row[headerMap['id']] || '',
            date: formatDate(row[headerMap['date']]),
            vendorId: vendorId || '',
            vendorName: vendor ? vendor.vendorName : '未知店家',
            deadline: formatTime(row[headerMap['deadline']])
        };
    }).filter(order => order.id); // Filter out any empty rows

    // Sort orders by date and then by deadline, ascending (closest first)
    orders.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.deadline}`);
        const dateB = new Date(`${b.date}T${b.deadline}`);
        return dateA.getTime() - dateB.getTime();
    });

    return orders;
}


/**
 * Publishes a new order for a specific date, vendor and deadline.
 * @param {PublishOrderRequest} req - The request containing date, vendorId and deadline.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function publishOrder(req: PublishOrderRequest): Promise<{ success: boolean }> {
  const validation = PublishOrderRequestSchema.safeParse(req);
  if (!validation.success) {
    const errorMsg = validation.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ');
    throw new Error(`輸入資料有誤: ${errorMsg}`);
  }

  const allOrdersRange = `${DAILY_ORDERS_SHEET_NAME}!A2:A`;
  const allOrderIdsData = await getSheetData(SPREADSHEET_ID, allOrdersRange);
    const lastIdNum = allOrderIdsData.length > 0 
        ? Math.max(0, ...allOrderIdsData.map(row => parseInt((row[0] || 'do0').replace('do', ''), 10)).filter(num => !isNaN(num)))
        : 0;
  const newId = `do${(lastIdNum + 1).toString().padStart(3, '0')}`;

  const values = [
    [newId, req.date, req.vendorId, req.deadline]
  ];
  
  // Ensure headers exist
  const headers = await getHeaders(SPREADSHEET_ID, DAILY_ORDERS_SHEET_NAME);
  if (headers.length === 0) {
      await updateSheetData(SPREADSHEET_ID, `${DAILY_ORDERS_SHEET_NAME}!A1:D1`, [['id', 'date', 'vendorId', 'deadline']]);
  }

  await appendSheetData(SPREADSHEET_ID, `${DAILY_ORDERS_SHEET_NAME}!A:D`, values);
  return { success: true };
}

export type UpdateDailyOrderRequest = {
    orderId: string;
    vendorId: string;
    date: string;
    deadline: string;
}

/**
 * Updates an existing daily order's date and deadline.
 * @param {UpdateDailyOrderRequest} req - The request containing orderId, date and deadline.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function updateDailyOrder(req: UpdateDailyOrderRequest): Promise<{ success: boolean }> {
    const { orderId, vendorId, date, deadline } = req;
    
    // 1. Find the row of the order to update
    const allOrdersData = await getSheetData(SPREADSHEET_ID, `${DAILY_ORDERS_SHEET_NAME}!A:A`);
    const rowIndex = allOrdersData.findIndex(row => row[0] === orderId);
    
    if (rowIndex === -1) {
        throw new Error(`找不到 ID 為 ${orderId} 的訂單。`);
    }

    // +1 because sheet rows are 1-based.
    const rowToUpdate = rowIndex + 1;
    
    // We update date and deadline. VendorId is not changed.
    // The range should be Bx:Dx to update date and deadline.
    const updateRange = `${DAILY_ORDERS_SHEET_NAME}!B${rowToUpdate}:D${rowToUpdate}`;
    await updateSheetData(SPREADSHEET_ID, updateRange, [[date, vendorId, deadline]]);

    return { success: true };
}


/**
 * Deletes a published daily order and its associated order items.
 * @param {string} dailyOrderId The ID of the daily order to delete.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function deleteDailyOrder(dailyOrderId: string): Promise<{ success: boolean }> {
  // 1. Get all data from both sheets
  const [dailyOrdersDataWithHeader, orderItemsDataWithHeader] = await Promise.all([
    getSheetData(SPREADSHEET_ID, `${DAILY_ORDERS_SHEET_NAME}!A:D`),
    getSheetData(SPREADSHEET_ID, `${ORDER_ITEMS_SHEET_NAME}!A:M`), // Read up to column M
  ]);

  if (dailyOrdersDataWithHeader.length < 2) {
    return { success: true };
  }

  const dailyOrdersHeaders = dailyOrdersDataWithHeader[0];
  const dailyOrdersRows = dailyOrdersDataWithHeader.slice(1);
  
  const orderItemsHeaders = orderItemsDataWithHeader.length > 0 ? orderItemsDataWithHeader[0] : [];
  const orderItemsRows = orderItemsDataWithHeader.length > 1 ? orderItemsDataWithHeader.slice(1) : [];

  // 2. Filter the rows to keep for both sheets
  const dailyOrdersToKeep = dailyOrdersRows.filter(row => row[0] !== dailyOrderId);

  let orderItemsToKeep = orderItemsRows;
  if (orderItemsRows.length > 0 && orderItemsHeaders.length > 0) {
      const orderItemsHeaderMap = orderItemsHeaders.reduce((acc, h, i) => { acc[String(h)] = i; return acc; }, {} as Record<string, number>);
      const dailyOrderIdIndex = orderItemsHeaderMap['dailyOrderId'];
      
      // Ensure the dailyOrderId column exists before filtering
      if (dailyOrderIdIndex !== undefined) {
          orderItemsToKeep = orderItemsRows.filter(itemRow => itemRow[dailyOrderIdIndex] !== dailyOrderId);
      }
  }

  // 4. Prepare batch update data to clear and rewrite both sheets
  await batchUpdateSheetData(SPREADSHEET_ID, [
    {
      range: `${DAILY_ORDERS_SHEET_NAME}!A1:D`,
      values: [dailyOrdersHeaders, ...dailyOrdersToKeep],
    },
    {
      range: `${ORDER_ITEMS_SHEET_NAME}!A1:M`,
      values: orderItemsHeaders.length > 0 ? [orderItemsHeaders, ...orderItemsToKeep] : [],
    }
  ]);

  return { success: true };
}


/**
 * Submits an order and saves it to the 'order_items' sheet.
 * If editing an existing order, it first deletes the old items.
 * @param {FinalOrder} order - The complete order details.
 * @param {boolean} isEditing - A flag to indicate if this is an edit.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function submitOrder(order: FinalOrder, isEditing: boolean = false): Promise<{ success: boolean }> {
    // If editing, first delete all existing items for that user in that daily order
    if (isEditing) {
        await deleteUserOrder({ username: order.username, dailyOrderId: order.dailyOrderId });
    }
    
    // Then, append the new/updated items
    const allItemsRange = `${ORDER_ITEMS_SHEET_NAME}!A2:A`;
    const allItemIdsData = await getSheetData(SPREADSHEET_ID, allItemsRange);
    let lastIdNum = allItemIdsData.length > 0
        ? Math.max(0, ...allItemIdsData.map(row => parseInt((row[0] || 'oi0').replace('oi', ''), 10)).filter(num => !isNaN(num)))
        : 0;

    const now = new Date().toISOString();
    const orderValues = [];

    for (const item of order.items) {
        lastIdNum++; // Increment ID for each item in the loop
        const newId = `oi${lastIdNum.toString().padStart(3, '0')}`;
        const optionsString = JSON.stringify(item.options);

        orderValues.push([
            newId,
            order.dailyOrderId,
            now,
            order.username,
            order.vendorId,
            order.vendorName,
            item.menuItemId,
            item.name,
            item.quantity,
            item.price,
            optionsString,
            order.notes,
            'FALSE' // isPaid
        ]);
    }
    
    // Ensure headers exist
    const headers = await getHeaders(SPREADSHEET_ID, ORDER_ITEMS_SHEET_NAME);
    if (headers.length === 0) {
        await updateSheetData(SPREADSHEET_ID, `${ORDER_ITEMS_SHEET_NAME}!A1:M1`, [['id', 'dailyOrderId', 'timestamp', 'username', 'vendorId', 'vendorName', 'menuItemId', 'itemName', 'quantity', 'price', 'options', 'notes', 'isPaid']]);
    }

    if (orderValues.length > 0) {
        await appendSheetData(SPREADSHEET_ID, `${ORDER_ITEMS_SHEET_NAME}!A:M`, orderValues);
    }
    
    return { success: true };
}


export type OrderDetailItem = {
    id: string;
    dailyOrderId: string;
    timestamp: string;
    username: string;
    vendorId: string;
    vendorName: string;
    menuItemId: string;
    itemName: string;
    quantity: number;
    price: number;
    options: Record<string, string>;
    notes: string;
    isPaid: boolean;
};

/**
 * Retrieves all order items for a specific daily order.
 * @param {string} dailyOrderId The ID of the daily order.
 * @returns {Promise<{orderDetails: OrderDetailItem[], dailyOrder: DailyOrder | null}>} An object containing the list of order items and the daily order details.
 */
export async function getOrderDetailsByDailyOrderId(dailyOrderId: string): Promise<{ orderDetails: OrderDetailItem[], dailyOrder: DailyOrder | null }> {
    // 1. Get the daily order details
    const allDailyOrders = await getAllDailyOrders();
    const dailyOrder = allDailyOrders.find(o => o.id === dailyOrderId);

    if (!dailyOrder) {
        return { orderDetails: [], dailyOrder: null };
    }

    // 2. Get all order items
    const orderItemsRange = `${ORDER_ITEMS_SHEET_NAME}!A:M`; // Extended to column M for new fields
    const orderItemsData = await getSheetData(SPREADSHEET_ID, orderItemsRange);

    if (orderItemsData.length < 2) {
        return { orderDetails: [], dailyOrder: dailyOrder };
    }

    const headers = orderItemsData[0].map(h => String(h).trim());
    const headerMap = headers.reduce((acc, header, index) => {
        acc[header.trim()] = index;
        return acc;
    }, {} as Record<string, number>);

    // Check for required columns
    const requiredCols = ['id', 'dailyOrderId', 'timestamp', 'username', 'vendorId', 'vendorName', 'menuItemId', 'itemName', 'quantity', 'price', 'options', 'notes', 'isPaid'];
    for (const col of requiredCols) {
        if (headerMap[col] === undefined) {
            console.error(`Error: The '${ORDER_ITEMS_SHEET_NAME}' sheet is missing the required column: '${col}'.`);
            return { orderDetails: [], dailyOrder: dailyOrder };
        }
    }

    const rows = orderItemsData.slice(1);

    // 3. Filter items that match the dailyOrderId
    const filteredItems = rows.filter(row => row[headerMap['dailyOrderId']] === dailyOrderId);

    // 4. Map to OrderDetailItem objects
    const orderDetails: OrderDetailItem[] = filteredItems.map(row => ({
        id: row[headerMap['id']] || '',
        dailyOrderId: row[headerMap['dailyOrderId']] || '',
        timestamp: row[headerMap['timestamp']] || '',
        username: row[headerMap['username']] || 'N/A',
        vendorId: row[headerMap['vendorId']] || '',
        vendorName: row[headerMap['vendorName']] || '',
        menuItemId: row[headerMap['menuItemId']] || '',
        itemName: row[headerMap['itemName']] || 'N/A',
        quantity: parseInt(row[headerMap['quantity']] || '0', 10),
        price: parseInt(row[headerMap['price']] || '0', 10),
        options: safeParseOptions(row[headerMap['options']] || '{}'),
        notes: row[headerMap['notes']] || '',
        isPaid: row[headerMap['isPaid']] === 'TRUE' || row[headerMap['isPaid']] === true,
    }));

    return { orderDetails, dailyOrder };
}

export type UserOrderGroup = {
    dailyOrder: DailyOrder;
    items: OrderDetailItem[];
    total: number;
    notes: string;
}

/**
 * Retrieves all orders for a specific user, grouped by daily order.
 * @param {string} username The username to fetch orders for.
 * @returns {Promise<UserOrderGroup[]>} A list of the user's orders.
 */
export async function getOrdersByUsername(username: string): Promise<UserOrderGroup[]> {
    // 1. Get all daily orders and all order items
    const [allDailyOrders, allOrderItemsData] = await Promise.all([
        getAllDailyOrders(),
        getSheetData(SPREADSHEET_ID, `${ORDER_ITEMS_SHEET_NAME}!A:M`)
    ]);

    if (allOrderItemsData.length < 2) {
        return [];
    }

    const itemsHeaders = allOrderItemsData[0].map(h => String(h).trim());
    const itemsHeaderMap = itemsHeaders.reduce((acc, header, index) => {
        acc[header.trim()] = index;
        return acc;
    }, {} as Record<string, number>);

    // Check for required columns
    const requiredCols = ['username', 'dailyOrderId', 'id', 'timestamp', 'vendorId', 'vendorName', 'menuItemId', 'itemName', 'quantity', 'price', 'options', 'notes', 'isPaid'];
    for (const col of requiredCols) {
        if (itemsHeaderMap[col] === undefined) {
            console.error(`Error: The '${ORDER_ITEMS_SHEET_NAME}' sheet is missing the required column: '${col}'.`);
            return [];
        }
    }

    // 2. Filter items for the specific username
    const userItemsRows = allOrderItemsData.slice(1).filter(row => row[itemsHeaderMap['username']] === username);
    
    if (userItemsRows.length === 0) {
        return [];
    }

    const userItems: OrderDetailItem[] = userItemsRows.map(row => ({
        id: row[itemsHeaderMap['id']] || '',
        dailyOrderId: row[itemsHeaderMap['dailyOrderId']] || '',
        timestamp: row[itemsHeaderMap['timestamp']] || '',
        username: row[itemsHeaderMap['username']] || 'N/A',
        vendorId: row[itemsHeaderMap['vendorId']] || '',
        vendorName: row[itemsHeaderMap['vendorName']] || '',
        menuItemId: row[itemsHeaderMap['menuItemId']] || '',
        itemName: row[itemsHeaderMap['itemName']] || 'N/A',
        quantity: parseInt(row[itemsHeaderMap['quantity']] || '0', 10),
        price: parseInt(row[itemsHeaderMap['price']] || '0', 10),
        options: safeParseOptions(row[itemsHeaderMap['options']] || '{}'),
        notes: row[itemsHeaderMap['notes']] || '',
        isPaid: row[itemsHeaderMap['isPaid']] === 'TRUE' || row[itemsHeaderMap['isPaid']] === true,
    }));
    
    // 3. Group items by dailyOrderId
    const groupedByDailyOrder = userItems.reduce((acc, item) => {
        const key = item.dailyOrderId;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {} as Record<string, OrderDetailItem[]>);
    
    
    // 4. Format the final output
    const allDailyOrdersMap = new Map(allDailyOrders.map(o => [o.id, o]));
    const result: UserOrderGroup[] = [];

    for (const dailyOrderId in groupedByDailyOrder) {
        const dailyOrder = allDailyOrdersMap.get(dailyOrderId);
        if (dailyOrder) {
            const items = groupedByDailyOrder[dailyOrderId];
            
             // Aggregate items with the same menuItemId and options
            const aggregatedItemsMap = items.reduce((acc, item) => {
                const optionsString = JSON.stringify(item.options || {});
                const aggregationKey = `${item.menuItemId}|${optionsString}`;
                if (acc.has(aggregationKey)) {
                    const existingItem = acc.get(aggregationKey)!;
                    existingItem.quantity += item.quantity;
                } else {
                    // Create a copy to avoid modifying the original array items
                    acc.set(aggregationKey, { ...item });
                }
                return acc;
            }, new Map<string, OrderDetailItem>());

            const finalItems = Array.from(aggregatedItemsMap.values());
            const total = finalItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            const notes = items.length > 0 ? items[0].notes : ''; 
            
            result.push({
                dailyOrder,
                items: finalItems,
                total,
                notes,
            });
        }
    }
    
    // 5. Sort the final groups by date, most recent first
    result.sort((a, b) => {
        const dateA = new Date(`${a.dailyOrder.date}T${a.dailyOrder.deadline}`);
        const dateB = new Date(`${b.dailyOrder.date}T${b.dailyOrder.deadline}`);
        return dateB.getTime() - dateA.getTime();
    });

    return result;
}

/**
 * Retrieves a user's specific order for a given daily order, formatted for editing.
 * @param {string} username The username.
 * @param {string} dailyOrderId The ID of the daily order.
 * @returns {Promise<OrderItem[]>} A list of order items ready for the cart.
 */
export async function getExistingOrderForEdit(username: string, dailyOrderId: string): Promise<OrderItem[]> {
  const allOrderItemsData = await getSheetData(SPREADSHEET_ID, `${ORDER_ITEMS_SHEET_NAME}!A:M`);
  if (allOrderItemsData.length < 2) {
    return [];
  }

  const itemsHeaders = allOrderItemsData[0].map(h => String(h).trim());
  const itemsHeaderMap = itemsHeaders.reduce((acc, header, index) => {
    acc[header] = index;
    return acc;
  }, {} as Record<string, number>);

  const userItemsRows = allOrderItemsData
    .slice(1)
    .filter(row => row[itemsHeaderMap['username']] === username && row[itemsHeaderMap['dailyOrderId']] === dailyOrderId);

  if (userItemsRows.length === 0) {
    return [];
  }
  
  // Helper to re-generate the composite item ID for the cart
  const generateOrderItemId = (itemId: string, options: Record<string, string>) => {
    if (Object.keys(options).length === 0) return itemId;
    const sortedSelections = Object.keys(options).sort().map(key => `${key}:${options[key]}`).join('|');
    return `${itemId}[${sortedSelections}]`;
  }

  const orderItems: OrderItem[] = userItemsRows.map(row => {
    const options = safeParseOptions(row[itemsHeaderMap['options']] || '{}');
    const menuItemId = row[itemsHeaderMap['menuItemId']];
    return {
      id: generateOrderItemId(menuItemId, options),
      menuItemId: menuItemId,
      name: row[itemsHeaderMap['itemName']] || '',
      price: parseInt(row[itemsHeaderMap['price']] || '0', 10),
      quantity: parseInt(row[itemsHeaderMap['quantity']] || '0', 10),
      vendorName: row[itemsHeaderMap['vendorName']] || '',
      vendorId: row[itemsHeaderMap['vendorId']] || '',
      username: username,
      options: options,
      notes: row[itemsHeaderMap['notes']] || '',
    };
  });
  
  return orderItems;
}


/**
 * Deletes a user's entire order for a specific daily order.
 * @param {object} params - The parameters for deleting the order.
 * @param {string} params.username - The username of the user.
 * @param {string} params.dailyOrderId - The ID of the daily order to delete.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function deleteUserOrder({ username, dailyOrderId }: { username: string, dailyOrderId: string }): Promise<{ success: boolean }> {
    const [orderItemsDataWithHeader] = await Promise.all([
        getSheetData(SPREADSHEET_ID, `${ORDER_ITEMS_SHEET_NAME}!A:M`),
    ]);

    if (orderItemsDataWithHeader.length < 2) {
      return { success: true }; // No items to delete
    }

    const itemsHeaders = orderItemsDataWithHeader[0];
    const itemsRows = orderItemsDataWithHeader.slice(1);
    
    const headerMap = itemsHeaders.reduce((acc, h, i) => { acc[String(h)] = i; return acc; }, {} as Record<string, number>);
    const dailyOrderIdIndex = headerMap['dailyOrderId'];
    const usernameIndex = headerMap['username'];

    if (dailyOrderIdIndex === undefined || usernameIndex === undefined) {
        throw new Error("The 'order_items' sheet is missing required columns 'dailyOrderId' or 'username'.");
    }

    const itemsToKeep = itemsRows.filter(row => 
        !(row[dailyOrderIdIndex] === dailyOrderId && row[usernameIndex] === username)
    );
    
    await batchUpdateSheetData(SPREADSHEET_ID, [{
        range: `${ORDER_ITEMS_SHEET_NAME}!A1:M`,
        values: [itemsHeaders, ...itemsToKeep],
    }]);

    return { success: true };
}

/**
 * Marks a user's order for a specific daily order as paid or unpaid.
 * @param {object} params - The parameters for the operation.
 * @param {string} params.dailyOrderId - The ID of the daily order.
 * @param {string} params.username - The username of the user.
 * @param {boolean} params.isPaid - The new payment status.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function markUserOrderAsPaid({ dailyOrderId, username, isPaid }: { dailyOrderId: string, username: string, isPaid: boolean }): Promise<{ success: boolean }> {
  // 1. Get all order items data.
  const allItemsData = await getSheetData(SPREADSHEET_ID, `${ORDER_ITEMS_SHEET_NAME}!A:M`);

  if (allItemsData.length < 2) {
    throw new Error("找不到訂單品項資料。");
  }

  const headers = allItemsData[0];
  const rows = allItemsData.slice(1);
  const headerMap = headers.reduce((acc, h, i) => { acc[String(h)] = i; return acc; }, {} as Record<string, number>);
  const dailyOrderIdIndex = headerMap['dailyOrderId'];
  const usernameIndex = headerMap['username'];
  const isPaidIndex = headerMap['isPaid'];

  if (dailyOrderIdIndex === undefined || usernameIndex === undefined || isPaidIndex === undefined) {
      throw new Error("The 'order_items' sheet is missing required columns: 'dailyOrderId', 'username', or 'isPaid'.");
  }
    
  // 2. Prepare batch update data
  const dataToUpdate = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    if (row[dailyOrderIdIndex] === dailyOrderId && row[usernameIndex] === username) {
      // Sheet rows are 1-based, and we have a header row, so add 2.
      const rowIndex = i + 2; 
      dataToUpdate.push({
        range: `${ORDER_ITEMS_SHEET_NAME}!M${rowIndex}`, // 'M' is the isPaid column
        values: [[isPaid ? 'TRUE' : 'FALSE']],
      });
    }
  }

  // 3. Execute batch update if there's anything to update
  if (dataToUpdate.length > 0) {
    // This is not a "true" batch update in one API call, but it's better than reading/writing the whole sheet.
    // A single batchUpdate call would be more efficient if the API structure allows it easily.
     const sheets = await getAuthenticatedClient();
     await sheets.spreadsheets.values.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
            valueInputOption: 'USER_ENTERED',
            data: dataToUpdate,
        }
     });
  }

  return { success: true };
}

export type UpdateUserOrderRequest = {
    dailyOrderId: string;
    username: string;
    items: OrderDetailItem[]; // The complete new list of items
};

/**
 * Updates a user's entire order for a specific daily order.
 * It replaces all of the user's previous items with the new list provided.
 * @param {UpdateUserOrderRequest} req - The request containing the user's updated order.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function updateUserOrder(req: UpdateUserOrderRequest): Promise<{ success: boolean }> {
    const { dailyOrderId, username, items } = req;

    // 1. First, delete all existing items for this user in this daily order.
    // This simplifies the logic by not having to find and update individual rows.
    await deleteUserOrder({ username, dailyOrderId });

    // 2. If the new list of items is empty, we're done.
    if (items.length === 0) {
        return { success: true };
    }

    // 3. Append the new list of items to the sheet.
    const allItemsRange = `${ORDER_ITEMS_SHEET_NAME}!A2:A`;
    const allItemIdsData = await getSheetData(SPREADSHEET_ID, allItemsRange);
    let lastIdNum = allItemIdsData.length > 0
        ? Math.max(0, ...allItemIdsData.map(row => parseInt((row[0] || 'oi0').replace('oi', ''), 10)).filter(num => !isNaN(num)))
        : 0;
    
    const now = new Date().toISOString();
    const orderValues = [];
    const notes = items[0]?.notes || ''; // Assume notes are the same for all items
    const isPaid = items[0]?.isPaid || false; // Assume payment status is the same

    for (const item of items) {
        lastIdNum++;
        const newId = `oi${lastIdNum.toString().padStart(3, '0')}`;
        const optionsString = JSON.stringify(item.options);

        orderValues.push([
            newId,
            dailyOrderId,
            now,
            username,
            item.vendorId,
            item.vendorName,
            item.menuItemId,
            item.itemName,
            item.quantity,
            item.price,
            optionsString,
            notes,
            isPaid ? 'TRUE' : 'FALSE'
        ]);
    }

    if (orderValues.length > 0) {
        await appendSheetData(SPREADSHEET_ID, `${ORDER_ITEMS_SHEET_NAME}!A:M`, orderValues);
    }

    return { success: true };
}
