
"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { OrderSummary, type OrderItem, type FinalOrder } from "@/components/OrderSummary";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "./ui/badge";
import { Utensils, MinusCircle, PlusCircle, ShoppingCart, Clock, Ban, CheckCircle2, CalendarClock } from "lucide-react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type AvailableOrder, submitOrder } from "@/ai/flows/order-flow";
import type { MenuItem } from "@/ai/flows/menu-flow";
import { parse } from 'date-fns';

export type Menu = {
  [key: string]: MenuItem[];
};

export const isDeadlinePassed = (date?: string, deadline?: string): boolean => {
    if (!date || !deadline || typeof deadline !== 'string' || !deadline.match(/^\d{2}:\d{2}$/)) {
        return false; // Not enough info or invalid format, assume not passed
    }
    
    try {
        const deadlineDateTime = parse(`${date} ${deadline}`, 'yyyy-MM-dd HH:mm', new Date());

        if (isNaN(deadlineDateTime.getTime())) {
            console.error("Invalid date/time for deadline:", date, deadline);
            return false;
        }
        return new Date() > deadlineDateTime;
    } catch (error) {
        console.error("Error parsing deadline:", error);
        return false; // If parsing fails, assume not passed
    }
};

// Helper function to aggregate order items
const aggregateOrderItems = (items: OrderItem[]): OrderItem[] => {
    if (!items || items.length === 0) return [];
    
    const aggregated: Record<string, OrderItem> = {};

    for (const item of items) {
        if (aggregated[item.id]) {
            aggregated[item.id].quantity += item.quantity;
        } else {
            aggregated[item.id] = { ...item };
        }
    }

    return Object.values(aggregated);
};


// Component for a single menu item card
function MenuItemCard({ item, vendorName, vendorId, onAddToOrder }: { item: MenuItem, vendorName: string, vendorId: string, onAddToOrder: (orderDetail: OrderItem) => void }) {
    const [selections, setSelections] = useState<Record<string, string>>(() => {
        const defaults: Record<string, string> = {};
        item.options?.forEach(group => {
            const defaultChoice = group.choices.find(c => c.isDefault) || group.choices[0];
            if (defaultChoice) {
                defaults[group.name] = defaultChoice.name;
            }
        });
        return defaults;
    });
    const [quantity, setQuantity] = useState(1);

    const handleSelectionChange = (groupName: string, value: string) => {
        setSelections(prev => ({ ...prev, [groupName]: value }));
    };
    
    const handleQuantityChange = (amount: number) => {
        setQuantity(prev => Math.max(1, prev + amount));
    };

    const handleAddToCart = () => {
        let finalPrice = item.price;
        const selectedOptionDetails: Record<string, string> = {};
        
        item.options?.forEach(group => {
            const selectedChoiceName = selections[group.name];
            const choice = group.choices.find(c => c.name === selectedChoiceName);
            if (choice) {
                finalPrice += choice.priceDelta;
                selectedOptionDetails[group.name] = choice.name;
            }
        });

        // Helper to generate a unique ID for an order item based on its selections
        const generateOrderItemId = (itemId: string, selections: Record<string, string>) => {
            if (Object.keys(selections).length === 0) return itemId;
            const sortedSelections = Object.keys(selections).sort().map(key => `${key}:${selections[key]}`).join('|');
            return `${itemId}[${sortedSelections}]`;
        }
        
        const orderDetail: OrderItem = {
            id: generateOrderItemId(item.id, selectedOptionDetails),
            menuItemId: item.id,
            name: item.name,
            price: finalPrice,
            quantity: quantity,
            vendorName: vendorName,
            vendorId: vendorId,
            username: '', // Username will be set in the parent
            options: selectedOptionDetails,
            notes: '' // Notes will be set in summary
        };
        
        onAddToOrder(orderDetail);
    };

    return (
        <Card className="flex flex-col transition-shadow hover:shadow-xl">
            <CardHeader className="pb-2">
                <CardTitle className="font-headline text-xl">{item.name}</CardTitle>
                {item.description && (
                  <CardDescription className="font-body pt-1 text-xs">{item.description}</CardDescription>
                )}
            </CardHeader>
            <CardContent className="flex-grow space-y-3 pt-2">
                {item.options?.map(group => (
                    <div key={group.name} className="space-y-1">
                        <Label htmlFor={`${item.id}-${group.name}`} className="text-xs text-muted-foreground">{group.name}</Label>
                        <Select
                            value={selections[group.name]}
                            onValueChange={(value) => handleSelectionChange(group.name, value)}
                        >
                            <SelectTrigger id={`${item.id}-${group.name}`} className="h-9">
                                <SelectValue placeholder={`選擇${group.name}`} />
                            </SelectTrigger>
                            <SelectContent>
                                {group.choices.map(choice => (
                                    <SelectItem key={choice.id} value={choice.name}>
                                        {choice.name}
                                        {choice.priceDelta !== 0 && ` (${choice.priceDelta > 0 ? '+' : ''}$${choice.priceDelta})`}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="flex items-center justify-between bg-muted/50 p-3 mt-auto">
                 <p className="font-bold text-lg">${item.price}</p>
                 <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => handleQuantityChange(-1)}><MinusCircle className="h-4 w-4" /></Button>
                    <span className="w-6 text-center font-bold text-lg">{quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => handleQuantityChange(1)}><PlusCircle className="h-4 w-4" /></Button>
                    <Button onClick={handleAddToCart} size="sm" className="px-3 gap-1">
                        <ShoppingCart className="h-4 w-4" />
                        加入
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export function OrderClient({ availableOrders, menus, initialOrderItems }: { availableOrders: AvailableOrder[], menus: Menu, initialOrderItems?: OrderItem[] }) {
  const [selectedOrder, setSelectedOrder] = useState<AvailableOrder | null>(null);
  const [order, setOrder] = useState<OrderItem[]>([]);
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const username = searchParams.get('username') || '匿名';
  const editingOrderId = searchParams.get('edit');

  // Hydration-safe state for deadline checking
  const [isPastDeadline, setIsPastDeadline] = useState(false);

  // This effect runs once on mount to set the initial order, aggregating if needed.
  useEffect(() => {
    if (initialOrderItems && initialOrderItems.length > 0) {
      setOrder(aggregateOrderItems(initialOrderItems));
    }
  }, [initialOrderItems]);


  // Set initial selected order and calculate deadline status on client
  useEffect(() => {
    // If we're in editing mode, there will only be one availableOrder. Select it.
    if (editingOrderId && availableOrders.length === 1) {
        setSelectedOrder(availableOrders[0]);
    } else if (availableOrders.length > 0 && !selectedOrder) {
        setSelectedOrder(availableOrders[0]);
    }
  }, [availableOrders, selectedOrder, editingOrderId]);
  
  useEffect(() => {
    if (selectedOrder) {
        setIsPastDeadline(isDeadlinePassed(selectedOrder.date, selectedOrder.deadline));
    }
  }, [selectedOrder]);


  const handleSelectOrder = useCallback((orderToSelect: AvailableOrder) => {
    // Disable switching if in editing mode
    if (editingOrderId) return;
      
    if (order.length > 0 && selectedOrder?.vendor.vendorId !== orderToSelect.vendor.vendorId) {
       toast({
        variant: "destructive",
        title: "尚有未完成訂單",
        description: "切換店家將會清空目前的訂單，請先完成或取消訂單。",
      });
      return;
    }
    setSelectedOrder(orderToSelect);
  }, [order.length, selectedOrder?.vendor.vendorId, toast, editingOrderId]);
  
  const handleAddToOrder = (orderDetail: OrderItem) => {
    setOrder(prevOrder => {
        const existingItem = prevOrder.find(oi => oi.id === orderDetail.id);
        if (existingItem) {
            return prevOrder.map(oi => 
                oi.id === orderDetail.id 
                ? { ...oi, quantity: oi.quantity + orderDetail.quantity } 
                : oi
            );
        }
        return [...prevOrder, { ...orderDetail, username: decodeURIComponent(username) }];
    });
    toast({ title: "已加入訂單", description: `${orderDetail.quantity} 份 ${orderDetail.name} 已新增至您的訂單。` });
  };


  const handleUpdateQuantity = useCallback((itemId: string, quantity: number) => {
    setOrder((prevOrder) => {
      if (quantity <= 0) {
        return prevOrder.filter((item) => item.id !== itemId);
      }
      return prevOrder.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
    });
  }, []);

  const handleSubmitOrder = useCallback(async (finalOrder: FinalOrder) => {
    if (finalOrder.items.length === 0) {
       toast({ variant: "destructive", title: "訂單是空的", description: "請先選擇餐點再送出訂單。" });
      return;
    }
    if (!selectedOrder) {
         toast({ variant: "destructive", title: "錯誤", description: "請選擇一個有效的訂單" });
        return;
    }
    
    try {
        const isEditing = !!editingOrderId;
        await submitOrder({
            ...finalOrder,
            dailyOrderId: selectedOrder.id
        }, isEditing);
        toast({ title: "訂單已送出！", description: "感謝您的訂購，餐點稍後為您送上！" });
        setOrder([]);
    } catch (error) {
        toast({
            variant: "destructive",
            title: "訂單送出失敗",
            description: error instanceof Error ? error.message : "發生未知錯誤，請聯繫管理員。",
        });
    }

  }, [toast, selectedOrder, editingOrderId]);

  const selectedMenu = useMemo(() => {
    if (!selectedOrder) return [];
    return menus[selectedOrder.vendor.vendorId] || [];
  }, [selectedOrder, menus]);

  return (
    <div className="container mx-auto max-w-screen-xl p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Vendor Selection */}
          <section>
             <h2 className="font-headline text-2xl font-bold mb-4">{editingOrderId ? "正在修改訂單" : "已發布訂單"}</h2>
            {availableOrders.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {availableOrders.map((currentOrder) => {
                  // Client-side check for deadline
                  const passed = isDeadlinePassed(currentOrder.date, currentOrder.deadline);
                  const isSelected = selectedOrder?.vendor.vendorId === currentOrder.vendor.vendorId;
                  
                  return (
                    <Card
                        key={currentOrder.vendor.vendorId}
                        onClick={() => handleSelectOrder(currentOrder)}
                        className={cn(
                          "relative transition-all duration-200 h-full",
                          editingOrderId ? "ring-2 ring-primary shadow-lg" : "cursor-pointer hover:shadow-lg hover:-translate-y-1",
                          isSelected && !editingOrderId && "ring-2 ring-primary shadow-lg",
                           passed && "bg-muted/60"
                        )}
                      >
                      <Badge 
                        className={cn(
                            "absolute top-0 right-0 text-xs pointer-events-none transform -translate-y-1/2",
                            passed ? "bg-destructive text-destructive-foreground" : "bg-green-600 text-destructive-foreground"
                        )}
                      >
                       {passed ? <><Ban className="mr-1 h-3 w-3"/>已截止</> : <><CheckCircle2 className="mr-1 h-3 w-3"/>可訂購</>}
                      </Badge>
                        <CardHeader>
                          <CardTitle className="font-headline pr-4">{currentOrder.vendor.vendorName}</CardTitle>
                          <CardDescription className="font-body">{currentOrder.vendor.description}</CardDescription>
                        </CardHeader>
                        {currentOrder.deadline && (
                          <CardFooter className="text-xs text-muted-foreground pt-0">
                              <div className="flex items-center gap-1.5">
                                  <CalendarClock className="h-3.5 w-3.5" />
                                  <span>{currentOrder.date} {currentOrder.deadline} 截止</span>
                              </div>
                          </CardFooter>
                        )}
                      </Card>
                )})}
              </div>
            ) : (
              <Card className="flex flex-col items-center justify-center p-12 text-center text-muted-foreground bg-secondary/30">
                <Utensils className="h-16 w-16 mb-4 text-primary" />
                 <h3 className="font-headline text-xl font-bold mb-2">{editingOrderId ? "找不到此訂單" : "今天沒有訂餐"}</h3>
                <p className="font-body text-sm">{editingOrderId ? "這筆訂單可能已被刪除或不存在。" : "老闆今天沒上班，明天再來看看吧！"}</p>
              </Card>
            )}
          </section>

          {/* Menu Display */}
          {selectedOrder && (
            <section>
              <h2 className="font-headline text-2xl font-bold mb-4">{selectedOrder.vendor.vendorName} 菜單</h2>
              {isPastDeadline ? (
                 <Card className="flex flex-col items-center justify-center p-12 text-center text-destructive bg-destructive/10 border-destructive/50">
                    <Ban className="h-16 w-16 mb-4" />
                    <h3 className="font-headline text-xl font-bold mb-2">今日訂購已截止</h3>
                    <p className="font-body text-sm">此店家的訂購時間已過，明天請早！</p>
                 </Card>
              ) : (
                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {selectedMenu.length > 0 ? selectedMenu.map((item) => (
                      <MenuItemCard 
                        key={item.id} 
                        item={item} 
                        vendorName={selectedOrder.vendor.vendorName} 
                        vendorId={selectedOrder.vendor.vendorId}
                        onAddToOrder={handleAddToOrder} 
                      />
                    )) : (
                      <p className="text-sm text-muted-foreground col-span-full">這個店家還沒有任何菜單品項，請管理員新增。</p>
                    )}
                 </div>
              )}
            </section>
          )}
        </div>

        {/* Order Summary */}
        <aside className="pt-8 lg:pt-0">
          <div className="lg:sticky lg:top-24">
            <OrderSummary
              order={order}
              username={decodeURIComponent(username)}
              onUpdateQuantity={handleUpdateQuantity}
              onSubmit={handleSubmitOrder}
              disabled={isPastDeadline}
              isEditing={!!editingOrderId}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
