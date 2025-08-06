'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowLeft } from 'lucide-react';
import { getMenusByVendorId } from '@/ai/flows/menu-flow';
import { getExistingOrderForEdit, getOrderDetailsByDailyOrderId } from '@/ai/flows/order-flow';
import { OrderClient } from '@/components/OrderClient';
import { type Menu } from '@/components/OrderClient';

export default function EditOrderPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const username = searchParams.get('username') || '';
  const dailyOrderId = Array.isArray(params.dailyOrderId) ? params.dailyOrderId[0] : params.dailyOrderId || '';
  
  const [menus, setMenus] = useState<Menu>({});
  const [initialOrderItems, setInitialOrderItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [availableOrders, setAvailableOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      // 確保 username 存在且不為空字串
      if (!username || typeof username !== 'string' || username.trim() === '') {
        router.push('/');
        return;
      }

      try {
        setIsLoading(true);
        
        // 獲取訂單詳情
        const { orderDetails, dailyOrder } = await getOrderDetailsByDailyOrderId(dailyOrderId);
        
        if (!dailyOrder) {
          throw new Error('找不到此訂單');
        }
        
        // 獲取菜單
        const menuData = await getMenusByVendorId(dailyOrder.vendorId);
        const menuMap: Menu = {};
        menuMap[dailyOrder.vendorId] = menuData;
        setMenus(menuMap);
        
        // 設置可用的訂單（當前訂單）
        setAvailableOrders([{
          id: dailyOrder.id,
          vendor: {
            vendorId: dailyOrder.vendorId,
            vendorName: dailyOrder.vendorName
          },
          date: dailyOrder.date,
          deadline: dailyOrder.deadline
        }]);
        
        // 設置初始訂單項目
        const items = await getExistingOrderForEdit(username, dailyOrderId);
        setInitialOrderItems(items);
        
      } catch (err) {
        console.error('載入訂單時出錯:', err);
        setError(err instanceof Error ? err.message : '載入訂單時出錯');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderData();
  }, [dailyOrderId, username, router]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">載入訂單中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>錯誤</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button onClick={() => window.location.reload()}>重試</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Button 
        variant="ghost" 
        className="mb-6" 
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        返回
      </Button>
      
      <h1 className="text-2xl font-bold mb-6">編輯訂單</h1>
      
      <OrderClient 
        availableOrders={availableOrders}
        menus={menus}
        initialOrderItems={initialOrderItems}
        isEditMode={true}
        orderIdToEdit={dailyOrderId}
      />
    </div>
  );
}
