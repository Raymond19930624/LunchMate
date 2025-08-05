'use client';

import { useState, useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
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

interface MyOrdersClientProps {
  username: string;
}

export function MyOrdersClient({ username }: MyOrdersClientProps) {
  const { toast } = useToast();
  const router = useRouter();

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
      setError(e instanceof Error ? e.message : '載入訂單時發生錯誤');
      console.error('Error fetching orders:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [username]);

  const handleDeleteOrder = async (dailyOrderId: string) => {
    if (!username) return;
    
    try {
      await deleteUserOrder({ username, dailyOrderId });
      toast({
        title: "成功",
        description: "訂單已刪除",
      });
      fetchOrders();
    } catch (e) {
      console.error('Error deleting order:', e);
      toast({
        title: "錯誤",
        description: e instanceof Error ? e.message : '刪除訂單時發生錯誤',
        variant: "destructive",
      });
    }
  };

  const refreshOrders = () => {
    fetchOrders();
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-muted-foreground">載入訂單中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center p-4">
        <Inbox className="h-12 w-12 text-muted-foreground" />
        <h3 className="text-lg font-medium">載入訂單時發生錯誤</h3>
        <p className="text-sm text-muted-foreground">{error}</p>
        <Button onClick={fetchOrders} disabled={isPending}>
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          重試
        </Button>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center p-4">
        <Inbox className="h-12 w-12 text-muted-foreground" />
        <h3 className="text-lg font-medium">尚無訂單記錄</h3>
        <p className="text-sm text-muted-foreground">您還沒有下過任何訂單。</p>
        <Button asChild>
          <Link href="/">返回首頁</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-1">
      <div className="flex justify-end mb-3">
        <Button 
          variant="outline" 
          size="sm"
          onClick={refreshOrders} 
          disabled={isPending}
          className="gap-2 text-sm h-9 px-4 font-medium rounded-lg border-2 border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 text-foreground transition-all duration-200 shadow-sm hover:shadow"
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-4 w-4 text-primary"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
              <path d="M16 16h5v5"></path>
            </svg>
          )}
          <span className="text-foreground/90">重新整理</span>
        </Button>
      </div>

      <div className="space-y-4">
        {orders.map((orderGroup) => {
          const { dailyOrder, items, total, notes } = orderGroup;
          const deadlinePassed = isDeadlinePassed(dailyOrder.date, dailyOrder.deadline);
          const orderDate = new Date(dailyOrder.date);
          
          return (
            <Card key={dailyOrder.id} className="overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="bg-gradient-to-r from-muted/10 to-muted/20 p-4 border-b">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{dailyOrder.vendorName || '未知商家'}</h3>
                      <span className="text-sm text-muted-foreground">
                        {orderDate.toLocaleDateString('zh-TW', {
                          month: '2-digit',
                          day: '2-digit',
                          weekday: 'short',
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={deadlinePassed ? "destructive" : "default"}
                      className={cn(
                        "gap-1 whitespace-nowrap",
                        !deadlinePassed && "bg-green-600 text-destructive-foreground"
                      )}
                    >
                      {deadlinePassed ? (
                        <Ban className="h-3 w-3" />
                      ) : (
                        <CheckCircle2 className="h-3 w-3" />
                      )}
                      {deadlinePassed ? '已截止' : '可訂購'}
                    </Badge>
                    <Badge variant={dailyOrder.status === 'confirmed' ? 'default' : 'outline'} className="gap-1">
                      {dailyOrder.status === 'confirmed' ? (
                        <>
                          <CheckCircle2 className="h-3 w-3" /> 已付款
                        </>
                      ) : (
                        <>
                          <Ban className="h-3 w-3" /> 未付款
                        </>
                      )}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {items.map((item, index) => (
                    <div key={index} className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">{item.itemName}</p>
                          {item.notes && (
                            <p className="text-sm text-muted-foreground mt-1">備註: {item.notes}</p>
                          )}
                          {item.options && Object.keys(item.options).length > 0 && (
                            <p className="text-sm text-muted-foreground mt-1">
                              選項: {Object.entries(item.options).map(([key, value]) => `${key}: ${value}`).join(', ')}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${item.price}</p>
                          <p className="text-sm text-muted-foreground">x{item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 border-t">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    總金額: <span className="font-medium text-foreground">${total}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    訂單編號: {dailyOrder.id}
                  </p>
                  {notes && (
                    <p className="text-xs text-muted-foreground">
                      備註: {notes}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-initial">
                    <Link href={`/order/${dailyOrder.id}?username=${encodeURIComponent(username)}`}>
                      <Edit className="h-4 w-4 mr-2" />
                      編輯
                    </Link>
                  </Button>
                  {!deadlinePassed && dailyOrder.status !== 'cancelled' && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1 sm:flex-initial">
                          <Trash2 className="h-4 w-4 mr-2" />
                          刪除
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>確定要刪除此訂單嗎？</AlertDialogTitle>
                          <AlertDialogDescription>
                            此操作無法復原，您確定要刪除此筆訂單嗎？
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>取消</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeleteOrder(dailyOrder.id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            確定刪除
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
