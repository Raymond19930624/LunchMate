
"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
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
import { type AvailableOrder, submitOrder, getOrdersByUsername } from "@/ai/flows/order-flow";
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
function MenuItemCard({ 
  item, 
  vendorName, 
  vendorId, 
  onAddToOrder, 
  disabled = false 
}: { 
  item: MenuItem, 
  vendorName: string, 
  vendorId: string, 
  onAddToOrder: (orderDetail: OrderItem) => void,
  disabled?: boolean 
}) {
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
        <Card className={`overflow-hidden transition-all hover:shadow-md h-full flex flex-col ${disabled ? 'opacity-60' : ''}`}>
            <CardContent className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-headline font-semibold text-lg">{item.name}</h3>
                    <span className="font-sans font-bold text-lg text-primary-foreground bg-primary/80 hover:bg-primary/90 transition-colors px-3 py-1 rounded-md">
                        ${item.price}
                    </span>
                </div>
                {item.description && (
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                )}
                
                {item.options && item.options.length > 0 && (
                    <div className="mt-2 space-y-3 flex-1">
                        {item.options.map((group) => (
                            <div key={group.name} className="space-y-1">
                                <Label className="text-sm font-medium">{group.name}</Label>
                                <Select
                                    value={selections[group.name]}
                                    onValueChange={(value) => handleSelectionChange(group.name, value)}
                                    disabled={disabled}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder={`選擇${group.name}`} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {group.choices.map((choice) => (
                                            <SelectItem key={choice.name} value={choice.name}>
                                                <div className="flex items-center justify-between w-full">
                                                    <span>{choice.name}</span>
                                                    {choice.priceDelta !== 0 && (
                                                        <span className="text-muted-foreground text-xs">
                                                            {choice.priceDelta > 0 ? '+' : ''}{choice.priceDelta}
                                                        </span>
                                                    )}
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        ))}
                    </div>
                )}
                
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(-1)}
                            className="h-8 w-8 p-0"
                            disabled={disabled}
                        >
                            <MinusCircle className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{quantity}</span>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(1)}
                            className="h-8 w-8 p-0"
                            disabled={disabled}
                        >
                            <PlusCircle className="h-4 w-4" />
                        </Button>
                    </div>
                    <Button
                        onClick={handleAddToCart}
                        size="sm"
                        className="ml-auto"
                        disabled={disabled}
                    >
                        {disabled ? '無法新增' : '加入訂單'}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

interface OrderClientProps {
  availableOrders: AvailableOrder[];
  menus: Menu;
  initialOrderItems?: OrderItem[];
  isEditMode?: boolean;
  orderIdToEdit?: string;
}

export function OrderClient({ 
  availableOrders, 
  menus, 
  initialOrderItems = [],
  isEditMode = false,
  orderIdToEdit
}: OrderClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();
  const [selectedOrder, setSelectedOrder] = useState<AvailableOrder | null>(null);
  const [order, setOrder] = useState<OrderItem[]>([]);
  const username = searchParams.get('username') || '匿名';
  const editingOrderId = searchParams.get('edit');
  const [hasExistingOrder, setHasExistingOrder] = useState(false);
  
  // Hydration-safe state for deadline checking
  const [isPastDeadline, setIsPastDeadline] = useState(false);

  // 使用 useRef 緩存已加載的訂單數據
  const ordersCache = useRef<Record<string, any>>({});
  const [isLoadingOrders, setIsLoadingOrders] = useState<Record<string, boolean>>({});

  // 檢查用戶是否已經訂購過
  useEffect(() => {
    const checkExistingOrder = async () => {
      if (!username || !selectedOrder) return;
      
      const orderId = selectedOrder.id;
      
      // 如果正在加載或已經加載過，則直接返回
      if (isLoadingOrders[orderId] || ordersCache.current[orderId] !== undefined) {
        setHasExistingOrder(!!ordersCache.current[orderId]);
        return;
      }
      
      try {
        // 設置加載狀態
        setIsLoadingOrders(prev => ({ ...prev, [orderId]: true }));
        
        // 如果沒有緩存，則從 API 獲取數據
        if (!ordersCache.current[username]) {
          const orders = await getOrdersByUsername(username);
          // 緩存所有訂單數據
          ordersCache.current = {
            ...ordersCache.current,
            [username]: orders
          };
        }
        
        // 從緩存中查找訂單
        const userOrders = ordersCache.current[username] || [];
        const existingOrder = userOrders.find(
          (orderGroup: any) => 
            orderGroup.dailyOrder && 
            orderGroup.dailyOrder.id === orderId && 
            orderGroup.dailyOrder.status !== 'cancelled' &&
            orderGroup.items.length > 0
        );
        
        // 更新緩存
        ordersCache.current[orderId] = existingOrder || null;
        
        const hasOrder = !!existingOrder;
        setHasExistingOrder(hasOrder);
        
        // 如果是編輯模式，加載現有訂單項目
        if (existingOrder && isEditMode) {
          const orderItems = existingOrder.items.map((item: any) => ({
            id: item.id,
            menuItemId: item.menuItemId,
            name: item.itemName,
            price: item.price,
            quantity: item.quantity,
            vendorName: selectedOrder.vendor.vendorName,
            vendorId: selectedOrder.vendor.vendorId,
            username: username,
            options: item.options || {},
            notes: item.notes || ''
          }));
          setOrder(orderItems);
        }
      } catch (error) {
        console.error("檢查訂單時出錯:", error);
      } finally {
        // 清除加載狀態
        setIsLoadingOrders(prev => ({ ...prev, [orderId]: false }));
      }
    };
    
    if (selectedOrder) {
      checkExistingOrder();
    }
  }, [selectedOrder, username, isEditMode]);

  // This effect runs once on mount to set the initial order, aggregating if needed.
  useEffect(() => {
    if (initialOrderItems && initialOrderItems.length > 0) {
      // 在編輯模式下，直接使用 initialOrderItems，不進行聚合
      setOrder(editingOrderId || isEditMode ? [...initialOrderItems] : aggregateOrderItems(initialOrderItems));
    } else if (editingOrderId || isEditMode) {
      // 如果是編輯模式但沒有 initialOrderItems，清空訂單
      setOrder([]);
    }
  }, [initialOrderItems, editingOrderId, isEditMode]);

  // Set initial selected order and calculate deadline status on client
  useEffect(() => {
    // 如果是編輯模式，且提供了 orderIdToEdit，則選擇該訂單
    if (isEditMode && orderIdToEdit && availableOrders.length > 0) {
      const orderToEdit = availableOrders.find(order => order.id === orderIdToEdit);
      if (orderToEdit) {
        setSelectedOrder(orderToEdit);
        return;
      }
    }
    
    // 如果不是編輯模式，且有可用的訂單，則選擇第一個
    if (availableOrders.length > 0 && !selectedOrder) {
      setSelectedOrder(availableOrders[0]);
    }
  }, [availableOrders, selectedOrder, isEditMode, orderIdToEdit]);
  
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
  
  // 使用 useRef 來追蹤是否需要顯示提示
  const toastRef = useRef<() => void>();
  
  // 使用 useEffect 來處理提示，確保在渲染後執行
  useEffect(() => {
    if (toastRef.current) {
      toastRef.current();
      toastRef.current = undefined;
    }
  });

  const handleAddToOrder = useCallback((orderDetail: OrderItem) => {
    setOrder(prevOrder => {
      try {
        const isEditing = isEditMode || !!editingOrderId;
        const usernameDecoded = decodeURIComponent(username);
        let toastMessage: { title: string; description: string } | null = null;
        
        // 檢查是否已存在相同 ID 和選項的項目
        const existingItemIndex = prevOrder.findIndex(oi => 
          oi.menuItemId === orderDetail.menuItemId && 
          JSON.stringify(oi.options) === JSON.stringify(orderDetail.options) &&
          oi.notes === orderDetail.notes // 同時檢查備註是否相同
        );
        
        const newOrder = [...prevOrder];
        
        // 在編輯模式下，直接替換項目；在新增模式下，累加數量
        if (existingItemIndex >= 0) {
          if (isEditing) {
            // 編輯模式：直接替換項目
            newOrder[existingItemIndex] = { 
              ...orderDetail, 
              username: usernameDecoded,
              id: newOrder[existingItemIndex].id // 保留原始 ID
            };
            
            toastMessage = { 
              title: "已更新訂單",
              description: `${orderDetail.quantity} 份 ${orderDetail.name} 已更新`
            };
          } else {
            // 新增模式：累加數量
            const updatedQuantity = newOrder[existingItemIndex].quantity + orderDetail.quantity;
            newOrder[existingItemIndex] = {
              ...newOrder[existingItemIndex],
              quantity: updatedQuantity
            };
            
            toastMessage = { 
              title: "已更新數量",
              description: `${newOrder[existingItemIndex].name} 數量已更新為 ${updatedQuantity} 份`
            };
          }
        } else {
          // 確保 orderDetail 有有效的 id
          const itemId = orderDetail.id || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
          
          // 添加新項目
          const newItem = { 
            ...orderDetail, 
            id: itemId,
            username: usernameDecoded
          };
          
          newOrder.push(newItem);
          
          toastMessage = { 
            title: "已新增項目",
            description: `${orderDetail.quantity} 份 ${orderDetail.name} 已新增` 
          };
        }
        
        // 設置提示訊息，將在 useEffect 中顯示
        if (toastMessage) {
          toastRef.current = () => {
            toast(toastMessage!);
          };
        }
        
        return newOrder;
      } catch (error) {
        console.error("處理訂單項目時發生錯誤:", error);
        // 設置錯誤提示訊息，將在 useEffect 中顯示
        toastRef.current = () => {
          toast({
            variant: "destructive",
            title: "發生錯誤",
            description: "無法新增項目，請稍後再試"
          });
        };
        return prevOrder; // 返回原狀態以避免狀態不一致
      }
    });
  }, [isEditMode, editingOrderId, username]);


  const handleUpdateQuantity = useCallback((itemId: string, newQuantity: number) => {
    setOrder(prevOrder => {
      const isEditing = isEditMode || !!editingOrderId;
      
      if (newQuantity <= 0) {
        // 如果數量小於等於 0，從訂單中移除該項目
        const removedItem = prevOrder.find(item => item.id === itemId);
        if (removedItem && isEditing) {
          toast({
            title: "已移除項目",
            description: `已從訂單中移除 ${removedItem.name}`,
            variant: "default"
          });
        }
        return prevOrder.filter((item) => item.id !== itemId);
      }
      
      // 更新數量
      return prevOrder.map((item) =>
        item.id === itemId 
          ? { 
              ...item, 
              quantity: newQuantity,
              // 確保 username 被正確設置
              username: item.username || decodeURIComponent(username)
            } 
          : item
      );
    });
  }, [isEditMode, editingOrderId, username, toast]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmitOrder = useCallback(async (finalOrder: Omit<FinalOrder, 'dailyOrderId'>) => {
    if (!selectedOrder) {
      toast({ variant: "destructive", title: "錯誤", description: "請選擇一個有效的訂單" });
      return;
    }
    
    if (finalOrder.items.length === 0) {
      toast({ variant: "destructive", title: "訂單是空的", description: "請先選擇餐點再送出訂單。" });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // 檢查是否為編輯模式（通過 URL 參數或 props）
      const isEditing = isEditMode || !!editingOrderId;
      
      // 準備訂單數據
      const orderData: FinalOrder = {
        ...finalOrder,
        dailyOrderId: isEditing && editingOrderId ? editingOrderId : selectedOrder.id,
        vendorId: selectedOrder.vendor.vendorId,
        vendorName: selectedOrder.vendor.vendorName,
        notes: finalOrder.notes || ''
      };
      
      // 提交訂單
      await submitOrder(orderData);
      
      // 清空購物車
      setOrder([]);
      
      // 更新 hasExistingOrder 狀態
      setHasExistingOrder(true);
      
      // 清除緩存，強制下次重新加載
      const orderId = selectedOrder.id;
      delete ordersCache.current[orderId];
      
      // 顯示簡潔的成功訊息
      toast({ 
        title: isEditing ? "訂單已更新！" : "訂單已送出！", 
        description: isEditing 
          ? `已成功更新 ${selectedOrder.vendor.vendorName} 的訂單`
          : `已成功送出 ${selectedOrder.vendor.vendorName} 的訂單`
      });
      
    } catch (error) {
      console.error("訂單提交錯誤:", error);
      toast({
        variant: "destructive",
        title: "送出訂單時發生錯誤",
        description: error instanceof Error ? error.message : "請稍後再試"
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [selectedOrder, isEditMode, editingOrderId, submitOrder, setOrder, toast]);

  const handleRemoveItem = useCallback((itemId: string) => {
    setOrder(prevOrder => {
      const removedItem = prevOrder.find(item => item.id === itemId);
      if (!removedItem) return prevOrder;
      
      const newOrder = prevOrder.filter(item => item.id !== itemId);
      const isEditing = isEditMode || !!editingOrderId;
      
      // 顯示已移除項目的提示
      if (isEditing) {
        toast({
          title: "已移除項目",
          description: `已從訂單中移除 ${removedItem.name}`,
          variant: "default"
        });
      }
      
      return newOrder;
    });
  }, [isEditMode, editingOrderId, toast]);

  const selectedMenu = useMemo(() => {
    if (!selectedOrder) return [];
    const vendorMenu = menus[selectedOrder.vendor.vendorId] || [];
    // 創建一個映射，用於快速查找菜單項
    const menuMap = new Map(vendorMenu.map(item => [item.id, item]));
    // 從 AvailableOrder 中獲取菜單 ID 順序（如果有的話）
    const menuIds = selectedOrder.vendor.menuIds || [];
    // 按照原始菜單 ID 順序返回菜單項目
    const orderedMenu = menuIds
      .map(id => menuMap.get(id))
      .filter((item): item is MenuItem => item !== undefined);
    // 如果沒有指定順序，則返回原始菜單
    return orderedMenu.length > 0 ? orderedMenu : vendorMenu;
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
              <h2 className="font-headline text-2xl font-bold mb-4">
                {isEditMode ? '編輯訂單 - ' : ''}{selectedOrder.vendor.vendorName} 菜單
              </h2>
              {isPastDeadline ? (
                 <Card className="flex flex-col items-center justify-center p-12 text-center text-destructive bg-destructive/10 border-destructive/50">
                    <Ban className="h-16 w-16 mb-4" />
                    <h3 className="font-headline text-xl font-bold mb-2">訂購已截止</h3>
                    <p className="font-body text-sm">此店家的訂購時間已過，無法再修改訂單。</p>
                 </Card>
              ) : hasExistingOrder && !isEditMode && !editingOrderId ? (
                 <Card className="flex flex-col items-center justify-center p-12 text-center text-blue-700 bg-blue-50 border-blue-200">
                    <CheckCircle2 className="h-16 w-16 mb-4 text-blue-600" />
                    <h3 className="font-headline text-xl font-bold mb-2">您已經訂購過此訂單</h3>
                    <p className="font-body text-sm">請前往「我的訂單」頁面進行修改</p>
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
                        disabled={hasExistingOrder && !isEditMode}
                      />
                    )) : (
                      <p className="text-sm text-muted-foreground col-span-full">這個店家還沒有任何菜單品項，請管理者新增。</p>
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
              username={username}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onSubmit={handleSubmitOrder}
              onClear={() => setOrder([])}
              isSubmitting={isSubmitting}
              selectedOrder={selectedOrder}
              notes={order[0]?.notes || ''}
              setNotes={(notes) => {
                setOrder(prev => prev.map(item => ({
                  ...item,
                  notes
                })));
              }}
              isEditMode={isEditMode || !!editingOrderId}
              disabled={isPastDeadline || (hasExistingOrder && !isEditMode)}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
