
import { z } from 'zod';

export const NewOptionGroupSchema = z.object({
  groupName: z.string().min(1, "選項群組名稱不能為空"),
  choices: z.string().min(1, "選項不能為空"),
  priceDeltas: z.string().optional(),
});

export const AddMenuItemRequestSchema = z.object({
  vendorId: z.string(),
  name: z.string().min(1, "品項名稱不能為空"),
  description: z.string().optional(),
  price: z.number({
    required_error: "價格為必填欄位",
    invalid_type_error: "價格必須是數字",
  })
  .min(0, "價格不能為負數")
  .int("價格必須是整數"),
  optionGroups: z.array(NewOptionGroupSchema).optional(),
});

export type AddMenuItemRequest = z.infer<typeof AddMenuItemRequestSchema>;
