
import { z } from 'zod';

export const PublishOrderRequestSchema = z.object({
  vendorId: z.string().min(1, "必須選擇一個店家"),
  date: z.string({ required_error: "必須選擇一個日期" }).regex(/^\d{4}-\d{2}-\d{2}$/, "日期格式必須是 YYYY-MM-DD"),
  deadline: z.string().regex(/^\d{2}:\d{2}$/, "截止時間格式必須是 HH:mm"),
});
export type PublishOrderRequest = z.infer<typeof PublishOrderRequestSchema>;


export const UpdateDailyOrderRequestSchema = z.object({
  orderId: z.string(),
  vendorId: z.string(), // Keep vendorId, though it's not editable in the form, it might be needed for validation or context
  date: z.string({ required_error: "必須選擇一個日期" }).regex(/^\d{4}-\d{2}-\d{2}$/, "日期格式必須是 YYYY-MM-DD"),
  deadline: z.string().regex(/^\d{2}:\d{2}$/, "截止時間格式必須是 HH:mm"),
});
export type UpdateDailyOrderRequest = z.infer<typeof UpdateDailyOrderRequestSchema>;
