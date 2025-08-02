
"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { SiteHeader } from "@/components/SiteHeader";
import { OrderDetailClient } from "@/components/admin/OrderDetailClient";
import Link from "next/link";
import { ArrowLeft, Loader2, RefreshCw } from "lucide-react";
import { getOrderDetailsByDailyOrderId, type OrderDetailItem, type DailyOrder } from '@/ai/flows/order-flow';
import { Button } from '@/components/ui/button';

export default function OrderDetailPage() {
  const params = useParams();
  const dailyOrderId = params.dailyOrderId as string;

  const [orderDetails, setOrderDetails] = useState<OrderDetailItem[]>([]);
  const [dailyOrder, setDailyOrder] = useState<DailyOrder | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrderDetails = async () => {
    if (!dailyOrderId) return;
    setIsLoading(true);
    setError(null);
    try {
      const { orderDetails: fetchedDetails, dailyOrder: fetchedDailyOrder } = await getOrderDetailsByDailyOrderId(dailyOrderId);
      if (!fetchedDailyOrder) {
        setError("找不到指定的訂單。");
      } else {
        setOrderDetails(fetchedDetails);
        setDailyOrder(fetchedDailyOrder);
      }
    } catch (e) {
      console.error("Failed to fetch order details:", e);
      setError("無法載入訂單資料，請稍後再試。");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, [dailyOrderId]);

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteHeader />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-6 flex justify-between items-center">
          <Link href="/admin" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            返回管理介面
          </Link>
           <Button variant="outline" size="sm" onClick={fetchOrderDetails} disabled={isLoading} data-re-fetch-button>
              <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              重新整理
            </Button>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4 text-muted-foreground">正在載入訂單詳情...</p>
          </div>
        ) : error ? (
          <div className="text-center text-destructive bg-destructive/10 p-4 rounded-md">
            <p>{error}</p>
          </div>
        ) : dailyOrder ? (
          <>
            <h1 className="font-headline text-3xl font-bold mb-2">訂單詳情：{dailyOrder.vendorName}</h1>
            <p className="text-muted-foreground mb-6">檢視 {dailyOrder.date} 的訂單，於 {dailyOrder.deadline} 截止。</p>
            <OrderDetailClient initialOrderDetails={orderDetails} />
          </>
        ) : null}
      </main>
    </div>
  );
}
