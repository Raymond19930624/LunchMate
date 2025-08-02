
"use client";

import { useState, useEffect, Suspense, useTransition } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getOrdersByUsername, deleteUserOrder, type UserOrderGroup } from '@/ai/flows/order-flow';
import { isDeadlinePassed } from '@/components/OrderClient';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CalendarClock, Ban, CheckCircle2, Inbox, Edit, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

function MyOrdersContent() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username');
  const { toast } = useToast();

  const [orders, setOrders] = useState<UserOrderGroup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const fetchOrders = async () => {
      if (!username) {
        setError("缺少使用者名稱，無法查詢訂單。");
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const fetchedOrders = await getOrdersByUsername(decodeURIComponent(username));
        setOrders(fetchedOrders);
      } catch (e) {
        console.error("Failed to fetch orders:", e);
        setError("無法載入訂單資料，請稍後再試。");
      } finally {
        setIsLoading(false);
      }
  };

  useEffect(() => {
    fetchOrders();
  }, [username]);

  const handleCancelOrder = (dailyOrderId: string) => {
    if (!username) return;

    startTransition(async () => {
        try {
            await deleteUserOrder({ username: decodeURIComponent(username), dailyOrderId });
            toast({
                title: "訂單已取消",
                description: "您的該筆訂單已被成功取消。",
            });
            fetchOrders(); // Re-fetch orders to update the list
        } catch(e) {
             console.error("Failed to cancel order:", e);
             toast({
                variant: "destructive",
                title: "取消訂單失敗",
                description: e instanceof Error ? e.message : "發生未知錯誤，請稍後再試。",
             });
        }
    });
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="ml-4 text-muted-foreground">正在查詢您的訂單...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-destructive bg-destructive/10 p-4 rounded-md">
        <p>{error}</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
        <div className="text-center text-muted-foreground bg-secondary/30 p-12 rounded-lg">
            <Inbox className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h3 className="font-headline text-xl font-bold mb-2">沒有訂單紀錄</h3>
            <p className="font-body text-sm">您目前沒有任何訂單，快去點餐吧！</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {orders.map(({ dailyOrder, items, total, notes }) => {
        const deadlinePassed = isDeadlinePassed(dailyOrder.date, dailyOrder.deadline);
        const optionsString = (options: Record<string, string>): string => {
            if (!options || typeof options !== 'object' || Object.keys(options).length === 0) return '';
             return Object.entries(options)
                         .map(([key, value]) => `${key}：${value}`)
                         .join(', ');
        }
        return (
          <Card key={dailyOrder.id} className="shadow-lg transition-shadow hover:shadow-xl overflow-hidden">
             <div className="h-2 bg-accent"></div>
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="font-headline text-2xl mb-1">{dailyOrder.vendorName}</CardTitle>
                    <CardDescription className="flex items-center gap-1.5 text-sm">
                        <CalendarClock className="h-4 w-4" />
                       {dailyOrder.date} {dailyOrder.deadline} 截止
                    </CardDescription>
                  </div>
                   <div className="flex items-center shrink-0">
                    {deadlinePassed ? (
                        <Badge variant="outline" className="border-destructive text-destructive">
                           <Ban className="mr-1.5 h-3.5 w-3.5"/>已截止
                        </Badge>
                    ) : (
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="text-blue-600 h-8 w-8 hover:bg-blue-100 hover:text-blue-700" aria-label="編輯訂單" asChild>
                                <Link href={`/order?username=${encodeURIComponent(username || '')}&edit=${dailyOrder.id}`}>
                                    <Edit className="h-4 w-4" />
                                </Link>
                            </Button>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-destructive h-8 w-8 hover:bg-destructive/10" aria-label="取消訂單">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>確定要取消這筆訂單嗎？</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            此動作將會取消您在「{dailyOrder.vendorName}」的這筆訂單，確定後將無法復原。
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>再想想</AlertDialogCancel>
                                        <AlertDialogAction
                                            variant="destructive"
                                            onClick={() => handleCancelOrder(dailyOrder.id)}
                                            disabled={isPending}
                                        >
                                           {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                           確定取消
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    )}
                   
                  </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
               <Separator />
                {items.map(item => (
                    <div key={item.id} className="grid grid-cols-4 gap-4 items-start font-body text-sm">
                        <div className="col-span-2">
                             <p className="font-medium">{item.itemName}</p>
                             <p className="text-xs text-muted-foreground">{optionsString(item.options)}</p>
                        </div>
                        <div className="text-center">
                            <span className="text-muted-foreground">x </span>{item.quantity}
                        </div>
                        <div className="text-right font-medium">
                            ${item.price * item.quantity}
                        </div>
                    </div>
                ))}
                {notes && (
                    <>
                        <Separator />
                        <div>
                            <p className="text-sm font-medium">備註</p>
                            <p className="text-sm text-muted-foreground">{notes}</p>
                        </div>
                    </>
                )}
            </CardContent>
            <CardFooter className="bg-muted/50 p-4 flex justify-end items-baseline">
                <span className="text-sm mr-2 text-muted-foreground">總計</span>
                <span className="font-headline text-2xl font-bold">${total}</span>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}


export default function MyOrdersPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const username = searchParams.get('username');

    useEffect(() => {
        if (!username) {
            router.push('/');
        }
    }, [username, router]);
    
    if (!username) {
        return (
             <div className="flex min-h-screen items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
             </div>
        )
    }
    
    return (
        <div className="min-h-screen bg-background font-body text-foreground">
            <SiteHeader />
            <main className="container mx-auto max-w-2xl p-4 sm:p-6 lg:p-8">
                 <h1 className="font-headline text-3xl font-bold mb-6">我的訂單</h1>
                <Suspense fallback={
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                }>
                    <MyOrdersContent />
                </Suspense>
            </main>
        </div>
    )
}
