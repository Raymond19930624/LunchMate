
"use client";

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Edit, CalendarIcon } from 'lucide-react';
import { cn } from "@/lib/utils";
import { type DailyOrder, updateDailyOrder } from '@/ai/flows/order-flow';
import { type UpdateDailyOrderRequest, UpdateDailyOrderRequestSchema } from '@/lib/schema/order';

interface EditOrderDialogProps {
  order: DailyOrder;
  onOrderUpdated: () => void;
}

export function EditOrderDialog({ order, onOrderUpdated }: EditOrderDialogProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<UpdateDailyOrderRequest>({
    resolver: zodResolver(UpdateDailyOrderRequestSchema),
    defaultValues: {
      orderId: order.id,
      vendorId: order.vendorId,
      date: order.date, // expecting "YYYY-MM-DD"
      deadline: order.deadline, // expecting "HH:mm"
    },
  });

  const handleDeadlineChange = (part: 'h' | 'm', value: string) => {
    const currentDeadline = form.getValues('deadline') || '00:00';
    const [currentHour, currentMinute] = currentDeadline.split(':');
    let newDeadline: string;
    if (part === 'h') {
        newDeadline = `${value}:${currentMinute}`;
    } else {
        newDeadline = `${currentHour}:${value}`;
    }
    form.setValue('deadline', newDeadline, { shouldValidate: true });
  };


  const onSubmit = (data: UpdateDailyOrderRequest) => {
    startTransition(async () => {
      try {
        await updateDailyOrder(data);
        toast({
          title: "訂單已更新",
          description: `來自 ${order.vendorName || '店家'} 的訂單資料已成功儲存。`,
        });
        onOrderUpdated();
        setIsOpen(false); 
      } catch (error) {
        console.error("更新訂單失敗:", error);
        toast({
          variant: "destructive",
          title: "更新訂單失敗",
          description: error instanceof Error ? error.message : "發生未知錯誤。",
        });
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={`編輯訂單 ${order.vendorName}`}>
          <Edit className="h-4 w-4 text-blue-600" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>編輯已發布訂單</DialogTitle>
          <DialogDescription>修改 {order.vendorName || '某個店家'} 的訂單日期與截止時間。</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
             <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>訂單日期</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                        )}
                                        disabled={isPending}
                                    >
                                        {field.value ? field.value : <span>選擇日期</span>}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value ? new Date(`${field.value}T00:00:00`) : undefined}
                                    onSelect={(date) => {
                                        field.onChange(date ? format(date, 'yyyy-MM-dd') : '');
                                    }}
                                    disabled={(date) => date < new Date("1900-01-01")}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                    </FormItem>
                )}
            />
            
            <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                     <FormItem className="flex flex-col">
                        <FormLabel>截止時間</FormLabel>
                        <div className="flex items-center gap-2">
                            <Select value={(field.value || '00:00').split(':')[0]} onValueChange={(value) => handleDeadlineChange('h', value)} disabled={isPending}>
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    {Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')).map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}
                                </SelectContent>
                            </Select>
                            <span className="font-bold">:</span>
                             <Select value={(field.value || '00:00').split(':')[1]} onValueChange={(value) => handleDeadlineChange('m', value)} disabled={isPending}>
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
            />
            
            <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="secondary" disabled={isPending}>取消</Button>
                </DialogClose>
                <Button type="submit" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                儲存變更
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
