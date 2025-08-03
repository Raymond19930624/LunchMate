
"use client";

import { useState, useTransition } from 'react';
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { type Vendor } from '@/ai/flows/vendor-flow';
import { publishOrder } from '@/ai/flows/order-flow';

interface PublishOrderCardProps {
    vendors: Vendor[];
    onOrderPublished: () => void;
}

export function PublishOrderCard({ vendors, onOrderPublished }: PublishOrderCardProps) {
    const { toast } = useToast();
    const [selectedVendorId, setSelectedVendorId] = useState<string>('');
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [deadline, setDeadline] = useState('09:40'); // HH:mm format
    const [isPending, startTransition] = useTransition();

    const handleDeadlineChange = (part: 'h' | 'm', value: string) => {
        const [hour, minute] = deadline.split(':');
        if (part === 'h') {
            setDeadline(`${value}:${minute}`);
        } else {
            setDeadline(`${hour}:${value}`);
        }
    };

    const handlePublishOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedVendorId) {
            toast({ variant: "destructive", title: "請選擇一個店家" });
            return;
        }
         if (!date) {
            toast({ variant: "destructive", title: "請選擇發佈日期" });
            return;
        }
        if (!deadline) {
            toast({ variant: "destructive", title: "請設定截止時間" });
            return;
        }

        startTransition(async () => {
            try {
                await publishOrder({ 
                    vendorId: selectedVendorId, 
                    date: format(date, "yyyy-MM-dd"), 
                    deadline 
                });
                const vendorName = vendors.find(v => v.vendorId === selectedVendorId)?.vendorName || '';
                toast({
                    title: "訂單已發佈",
                    description: `${vendorName} 的訂單已開放，將於 ${format(date, 'yyyy-MM-dd')} ${deadline} 截止。`,
                });
                setSelectedVendorId('');
                onOrderPublished();
            } catch (error) {
                console.error("發佈訂單失敗:", error);
                toast({
                    variant: "destructive",
                    title: "發佈失敗",
                    description: error instanceof Error ? error.message : "無法發佈訂單。",
                });
            }
        });
    };

    const [hour, minute] = deadline.split(':');

    return (
        <section>
            <Card className="bg-primary/10 border-primary">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Send className="h-6 w-6" />
                        <span>發佈訂單</span>
                    </CardTitle>
                    <CardDescription>選擇店家、日期與截止時間來開放訂購。</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handlePublishOrder} className="space-y-4">
                        <div>
                          <Label htmlFor="vendor-select">選擇店家</Label>
                          <Select value={selectedVendorId} onValueChange={setSelectedVendorId} disabled={isPending}>
                              <SelectTrigger id="vendor-select">
                                  <SelectValue placeholder="選擇一個店家..." />
                              </SelectTrigger>
                              <SelectContent>
                                  {vendors.map(vendor => (
                                      <SelectItem key={vendor.vendorId} value={vendor.vendorId}>
                                          {vendor.vendorName}
                                      </SelectItem>
                                  ))}
                              </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="order-date">訂單日期</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            id="order-date"
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal bg-card",
                                                !date && "text-muted-foreground"
                                            )}
                                             disabled={isPending}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "yyyy-MM-dd") : <span>選擇日期</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="deadline-input">截止時間</Label>
                               <div className="flex items-center gap-2">
                                    <Select value={hour} onValueChange={(value) => handleDeadlineChange('h', value)} disabled={isPending}>
                                        <SelectTrigger className="bg-card w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')).map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    <span className="font-bold">:</span>
                                    <Select value={minute} onValueChange={(value) => handleDeadlineChange('m', value)} disabled={isPending}>
                                        <SelectTrigger className="bg-card w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                               </div>
                            </div>
                        </div>

                        <Button type="submit" className="w-full" disabled={isPending || !selectedVendorId || !date}>
                            {isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> 發佈中...</> : '確認發佈'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
}
