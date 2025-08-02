
"use client";

import { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Loader2, ListOrdered, CalendarClock, Ban, CheckCircle2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { type DailyOrder, deleteDailyOrder } from '@/ai/flows/order-flow';
import { EditOrderDialog } from './EditOrderDialog';
import { isDeadlinePassed } from '../OrderClient';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

interface PublishedOrdersCardProps {
    initialOrders: DailyOrder[];
    onOrdersChange: () => void;
}

function OrderItem({ order, onOrdersChange }: { order: DailyOrder, onOrdersChange: () => void }) {
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();
    const [isPassed, setIsPassed] = useState(false);

    useEffect(() => {
        // This check runs only on the client-side, preventing hydration mismatch.
        setIsPassed(isDeadlinePassed(order.date, order.deadline));
    }, [order.date, order.deadline]);

    const handleDeleteOrder = () => {
        startTransition(async () => {
            try {
                await deleteDailyOrder(order.id);
                toast({
                    title: "發布訂單已刪除",
                    description: `來自 ${order.vendorName} 的訂單已被移除。`,
                });
                onOrdersChange();
            } catch (error) {
                console.error("刪除已發布訂單失敗:", error);
                toast({
                    variant: "destructive",
                    title: "刪除失敗",
                    description: error instanceof Error ? error.message : "無法刪除訂單資料。",
                });
            }
        });
    };

    return (
        <Card className="p-3 transition-colors hover:bg-muted/50">
           <Link href={`/admin/orders/${order.id}`} className="block">
                <div>
                    <p className="font-semibold">{order.vendorName}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <CalendarClock className="h-3.5 w-3.5" />
                    {order.date} {order.deadline} 截止
                    </p>
                </div>
            </Link>
            <div className="flex items-center justify-between mt-2">
                <Badge
                    variant={isPassed ? "destructive" : "default"}
                    className={cn(
                        "text-xs whitespace-nowrap",
                        !isPassed && "bg-green-600 text-destructive-foreground"
                    )}
                    >
                    {isPassed ? <Ban className="mr-1 h-3 w-3"/> : <CheckCircle2 className="mr-1 h-3 w-3"/>}
                    {isPassed ? '已截止' : '可訂購'}
                </Badge>
                <div className="flex items-center gap-0">
                    <EditOrderDialog order={order} onOrderUpdated={onOrdersChange} />
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label={`刪除訂單 ${order.vendorName}`} disabled={isPending}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>確定要刪除此訂單嗎？</AlertDialogTitle>
                                <AlertDialogDescription>
                                    此動作將會將「{order.vendorName}」的訂單從可訂購列表中移除，確定後訂購者將無法再看到此店家。
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>取消</AlertDialogCancel>
                                <AlertDialogAction variant="destructive" onClick={handleDeleteOrder} disabled={isPending}>
                                {isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> 刪除中...</> : '確定刪除'}
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
        </Card>
    );
}


export function PublishedOrdersCard({ initialOrders, onOrdersChange }: PublishedOrdersCardProps) {
    return (
        <section>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                       <ListOrdered className="h-6 w-6" />
                       <span>已發布訂單</span>
                    </CardTitle>
                    <CardDescription>管理目前已開放訂購的店家。點擊可檢視訂單詳情。</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    {initialOrders.length > 0 ? (
                        initialOrders.map(order => (
                           <OrderItem key={order.id} order={order} onOrdersChange={onOrdersChange} />
                        ))
                    ) : (
                      <p className="text-sm text-center text-muted-foreground py-4">目前沒有任何已發布的訂單。</p>
                    )}
                </CardContent>
            </Card>
        </section>
    );
}
