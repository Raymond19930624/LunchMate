
"use client";

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Settings } from 'lucide-react';
import { updateVendor, type Vendor } from '@/ai/flows/vendor-flow';

interface EditVendorDialogProps {
  vendor: Vendor;
  onVendorUpdated: () => void;
}

const formSchema = z.object({
  name: z.string().min(1, "店家名稱不能為空"),
  description: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function EditVendorDialog({ vendor, onVendorUpdated }: EditVendorDialogProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: vendor.vendorName,
      description: vendor.description,
    },
  });

  const onSubmit = (data: FormData) => {
    startTransition(async () => {
      try {
        await updateVendor({
          vendorId: vendor.vendorId,
          name: data.name,
          description: data.description || '',
        });
        toast({
          title: "店家資訊已更新",
          description: `${data.name} 的資料已成功儲存。`,
        });
        onVendorUpdated();
        setIsOpen(false); 
      } catch (error) {
        console.error("更新店家失敗:", error);
        toast({
          variant: "destructive",
          title: "更新店家失敗",
          description: error instanceof Error ? error.message : "發生未知錯誤。",
        });
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={`編輯店家 ${vendor.vendorName}`}>
          <Settings className="h-4 w-4 text-gray-500" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>編輯店家資訊</DialogTitle>
          <DialogDescription>修改 {vendor.vendorName} 的基本資料。</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>店家名稱</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>店家描述 (選填)</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} />
                  </FormControl>
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
