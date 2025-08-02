
'use server';
/**
 * @fileOverview Flow for handling application configuration from Google Sheets.
 *
 * - getAdminPassword - Retrieves the admin password.
 * - changeAdminPassword - Updates the admin password.
 */
import { getSheetData, updateSheetData } from '@/services/sheet-service';
import { z } from 'zod';

// The ID of your Google Sheet
const SPREADSHEET_ID = '1Zj2h0cYlrb2mBaNgl1-PoOK7tlCCwDccAXn5w66hp4c';
const CONFIG_SHEET_NAME = 'config';

/**
 * Retrieves the admin password from the 'config' sheet.
 * It looks for the key 'adminPassword' in column A and returns the corresponding value from column B.
 * @returns {Promise<string>} The admin password.
 * @throws {Error} If the password is not found.
 */
export async function getAdminPassword(): Promise<string> {
  const range = `${CONFIG_SHEET_NAME}!A:B`;
  const data = await getSheetData(SPREADSHEET_ID, range);
  
  const passwordRow = data.find(row => row[0] === 'adminPassword');
  
  if (passwordRow && passwordRow[1] !== undefined && passwordRow[1] !== null) {
    return String(passwordRow[1]);
  }
  
  console.error("在 Google Sheet 的 'config' 工作表中找不到管理者密碼。");
  throw new Error("無法取得管理者密碼。請確認您的 Google Sheet 中有名為 'config' 的工作表，且 A 欄中有 'adminPassword' 的項目。");
}

export type ChangePasswordRequest = z.infer<typeof ChangePasswordRequestSchema>;
const ChangePasswordRequestSchema = z.object({
  oldPassword: z.string(),
  newPassword: z.string().min(4, "新密碼長度至少需要 4 個字元"),
});

/**
 * Changes the admin password in the 'config' sheet.
 * @param {ChangePasswordRequest} req The request containing old and new passwords.
 * @returns {Promise<{success: boolean}>} A success flag.
 */
export async function changeAdminPassword(req: ChangePasswordRequest): Promise<{ success: boolean }> {
  const validation = ChangePasswordRequestSchema.safeParse(req);
  if (!validation.success) {
      const a = validation.error.format()._errors.join(', ');
      throw new Error(`輸入資料有誤: ${a}`);
  }
  
  const { oldPassword, newPassword } = req;
  const currentPassword = await getAdminPassword();

  if (oldPassword !== currentPassword) {
    throw new Error("舊密碼不正確。");
  }

  const range = `${CONFIG_SHEET_NAME}!A:B`;
  const data = await getSheetData(SPREADSHEET_ID, range);

  const passwordRowIndex = data.findIndex(row => row[0] === 'adminPassword');
  if (passwordRowIndex === -1) {
    throw new Error("在 'config' 工作表中找不到 'adminPassword' 項目。");
  }

  // Google Sheets API row indices are 1-based.
  const rowToUpdate = passwordRowIndex + 1;
  const updateRange = `${CONFIG_SHEET_NAME}!B${rowToUpdate}`;
  
  await updateSheetData(SPREADSHEET_ID, updateRange, [[newPassword]]);

  return { success: true };
}
