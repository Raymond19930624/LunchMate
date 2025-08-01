
'use server';
/**
 * @fileOverview Service for interacting with the Google Sheets API.
 * This service handles authentication and provides methods to read from and write to Google Sheets.
 * It uses a service account for authentication, and the credentials should be stored in an
 * environment variable.
 */

import { google, type sheets_v4 } from 'googleapis';
import fs from 'fs';
import path from 'path';

// This is the scope required for reading and writing to Google Sheets.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

/**
 * Authenticates with the Google Sheets API using a service account.
 * The service account credentials are automatically sourced from an
 * environment variable or a local .env file.
 * @returns {Promise<any>} The authenticated Google Sheets API client.
 */
export async function getAuthenticatedClient() {
  const credentialsPath = path.join(process.cwd(), 'google-credentials.json');
  if (!fs.existsSync(credentialsPath)) {
      throw new Error("找不到 'google-credentials.json' 檔案。請確認此檔案位於專案根目錄。");
  }

  const credentialsContent = fs.readFileSync(credentialsPath, 'utf-8');
  let credentials;
  try {
      credentials = JSON.parse(credentialsContent);
  } catch (e) {
      throw new Error("無法解析 'google-credentials.json' 檔案。請確認其內容為有效的 JSON 格式。");
  }
  
  if (!credentials.client_email || !credentials.private_key) {
      throw new Error("'google-credentials.json' 檔案內容不完整，缺少 'client_email' 或 'private_key' 欄位。");
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES
  });
  
  const authClient = await auth.getClient();
  return google.sheets({ version: 'v4', auth: authClient });
}

/**
 * Reads data from a specified range in a Google Sheet.
 * @param {string} spreadsheetId The ID of the Google Sheet.
 * @param {string} range The A1 notation of the range to retrieve.
 * @returns {Promise<any[][]>} A 2D array of the data from the sheet.
 * @throws {Error} If there is an error fetching the data.
 */
export async function getSheetData(spreadsheetId: string, range: string): Promise<any[][]> {
  try {
    const sheets = await getAuthenticatedClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
      valueRenderOption: 'UNFORMATTED_VALUE', // Treat all values as raw strings
    });

    return response.data.values || [];
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    if (error instanceof Error) {
        throw new Error(`Failed to retrieve data from Google Sheet. Reason: ${error.message}`);
    }
    throw new Error('Failed to retrieve data from Google Sheet due to an unknown error.');
  }
}

/**
 * Gets just the header row of a sheet.
 * @param {string} spreadsheetId The ID of the Google Sheet.
 * @param {string} sheetName The name of the sheet.
 * @returns {Promise<any[]>} An array of the header values.
 */
export async function getHeaders(spreadsheetId: string, sheetName: string): Promise<any[]> {
    try {
        const data = await getSheetData(spreadsheetId, `${sheetName}!1:1`);
        return data.length > 0 ? data[0] : [];
    } catch (error) {
        if (error instanceof Error && error.message.includes('Unable to parse range')) {
            // This likely means the sheet doesn't exist, which is fine.
            return [];
        }
        console.error(`Error fetching headers for ${sheetName}:`, error);
        throw error;
    }
}

/**
 * Appends data to a specified range in a Google Sheet.
 * @param {string} spreadsheetId The ID of the Google Sheet.
 * @param {string} range The A1 notation of the range to append to. For example, 'Sheet1'.
 * @param {any[][]} values A 2D array of values to append.
 * @returns {Promise<any>} The response from the Sheets API.
 * @throws {Error} If there is an error appending the data.
 */
export async function appendSheetData(spreadsheetId: string, range: string, values: any[][]): Promise<any> {
    try {
        const sheets = await getAuthenticatedClient();
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED', // Interpret data as if user typed it
            requestBody: {
                values,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error appending sheet data:', error);
        if (error instanceof Error) {
            throw new Error(`Failed to append data to Google Sheet. Reason: ${error.message}`);
        }
        throw new Error('Failed to append data to Google Sheet due to an unknown error.');
    }
}


/**
 * Clears data from a specified range in a Google Sheet.
 * @param {string} spreadsheetId The ID of the Google Sheet.
 * @param {string} range The A1 notation of the range to clear.
 * @returns {Promise<any>} The response from the Sheets API.
 * @throws {Error} If there is an error clearing the data.
 */
export async function clearSheetData(spreadsheetId: string, range: string): Promise<any> {
    try {
        const sheets = await getAuthenticatedClient();
        const response = await sheets.spreadsheets.values.clear({
            spreadsheetId,
            range,
        });
        return response.data;
    } catch (error) {
        console.error('Error clearing sheet data:', error);
        if (error instanceof Error) {
            throw new Error(`Failed to clear data from Google Sheet. Reason: ${error.message}`);
        }
        throw new Error('Failed to clear data from Google Sheet due to an unknown error.');
    }
}

/**
 * Updates data in a specified range in a Google Sheet.
 * @param {string} spreadsheetId The ID of the Google Sheet.
 * @param {string} range The A1 notation of the range to update.
 * @param {any[][]} values A 2D array of values to write.
 * @returns {Promise<any>} The response from the Sheets API.
 * @throws {Error} If there is an error updating the data.
 */
export async function updateSheetData(spreadsheetId: string, range: string, values: any[][]): Promise<any> {
    try {
        const sheets = await getAuthenticatedClient();
        const response = await sheets.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption: 'RAW', // Treat all values as raw strings
            requestBody: {
                values,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating sheet data:', error);
        if (error instanceof Error) {
            throw new Error(`Failed to update data in Google Sheet. Reason: ${error.message}`);
        }
        throw new Error('Failed to update data in Google Sheet due to an unknown error.');
    }
}


/**
 * Performs a batch update, clearing specified ranges and then writing new data.
 * @param spreadsheetId The ID of the Google Sheet.
 * @param data An array of objects, each with a range and the data to write.
 * @returns The response from the Sheets API.
 */
export async function batchUpdateSheetData(
  spreadsheetId: string,
  data: { range: string; values: any[][] }[]
): Promise<any> {
  try {
    const sheets = await getAuthenticatedClient();
    
    const rangesToClear = data.map(d => d.range);

    if (rangesToClear.length > 0) {
        await sheets.spreadsheets.values.batchClear({
            spreadsheetId,
            requestBody: {
                ranges: rangesToClear
            }
        });
    }

    // Filter for ranges that have data to write back (e.g. headers and content).
    // An array like [['h1', 'h2']] is valid, but an empty array `[]` or `[[]]` is not.
    const dataToWrite = data.filter(d => d.values && d.values.length > 0 && d.values.some(row => row && row.length > 0));

    if (dataToWrite.length === 0) {
        return; // Nothing to write
    }

    const writeRequests: sheets_v4.Params$Resource$Spreadsheets$Values$Batchupdate = {
        spreadsheetId,
        requestBody: {
            valueInputOption: 'USER_ENTERED',
            data: dataToWrite
        }
    }
    const response = await sheets.spreadsheets.values.batchUpdate(writeRequests);

    return response.data;
  } catch (error) {
    console.error('Error performing batch update on sheet data:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to batch update data in Google Sheet. Reason: ${error.message}`);
    }
    throw new Error('Failed to batch update data in Google Sheet due to an unknown error.');
  }
}

    