"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type AvailableOrder, submitOrder, getOrdersByUsername, deleteUserOrder } from "@/ai/flows/order-flow";
import type { MenuItem } from "@/ai/flows/menu-flow";
import { Button } from "@/components/ui/button";
import { OrderSummary, type OrderItem, type FinalOrder } from "@/components/OrderSummary";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "./ui/badge";
import { Utensils, MinusCircle, PlusCircle, ShoppingCart, Clock, Ban, CheckCircle2, CalendarClock, AlertTriangle } from "lucide-react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  const [editingOrderId, setEditingOrderId] = useState<string | null>(searchParams.get('edit'));
  const [hasExistingOrder, setHasExistingOrder] = useState(false);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [pendingOrder, setPendingOrder] = useState<AvailableOrder | null>(null);
  const [isEditing, setIsEditing] = useState(false); // 本地編輯模式狀態
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false); // 刪除確認對話框狀態
  const [isOrderPaid, setIsOrderPaid] = useState(false); // 訂單付款狀態
  
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
          (orderGroup: any) => orderGroup.dailyOrder
        );
        
        if (existingOrder) {
          // 檢查訂單是否已付款（如果所有項目都已付款則視為已付款）
          const paid = existingOrder.items.every((item: any) => item.isPaid);
          setIsOrderPaid(paid);
          
          const orderItems = existingOrder.items.map((item: any) => ({
            id: item.menuItemId,
            menuItemId: item.menuItemId,
            name: item.itemName,
            price: item.price,
            quantity: item.quantity,
            options: item.options,
            notes: item.notes || '',
            vendorId: item.vendorId,
            vendorName: item.vendorName,
            username: username,
            isPaid: item.isPaid || false
          } as OrderItem));

          setOrder(orderItems);
          setHasExistingOrder(true);
          setIsOrderSubmitted(true);
          
          // 更新緩存
          ordersCache.current[orderId] = true;
        } else {
          setOrder([]);
          setHasExistingOrder(false);
          setIsOrderSubmitted(false);
          
          // 更新緩存
          ordersCache.current[orderId] = false;
        }
      } catch (error) {
        console.error('檢查現有訂單時出錯:', error);
        setOrder([]);
        setHasExistingOrder(false);
        setIsOrderSubmitted(false);
      } finally {
        // 清除加載狀態
        setIsLoadingOrders(prev => ({
          ...prev,
          [orderId]: false
        }));
      }
    };
    
    checkExistingOrder();
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


  const [pendingToast, setPendingToast] = useState<{show: boolean, message?: string}>({show: false});

  // 處理待顯示的提示
  useEffect(() => {
    if (pendingToast.show && pendingToast.message) {
      toast({
        variant: "destructive",
        title: "尚有未完成訂單",
        description: pendingToast.message,
      });
      setPendingToast({show: false});
    }
  }, [pendingToast]);

  // 使用 useRef 來緩存用戶訂單數據
  const userOrdersCache = useRef<{ 
    [key: string]: { 
      data: any, 
      timestamp: number 
    } 
  }>({});
  
  // 緩存過期時間（5分鐘）
  const CACHE_EXPIRY = 5 * 60 * 1000;
  
  // 更新緩存
  const updateCache = useCallback((username: string, orderId: string, data: any) => {
    const cacheKey = `${username}-${orderId}`;
    userOrdersCache.current[cacheKey] = {
      data,
      timestamp: Date.now()
    };
  }, []);
  
  // 清除用戶的所有訂單緩存
  const clearUserCache = useCallback((username: string) => {
    Object.keys(userOrdersCache.current).forEach(key => {
      if (key.startsWith(`${username}-`)) {
        delete userOrdersCache.current[key];
      }
    });
  }, []);
  
  // 獲取用戶訂單數據（優先從緩存讀取）
  const fetchUserOrders = useCallback(async (username: string, orderId: string, forceRefresh = false) => {
    const cacheKey = `${username}-${orderId}`;
    const now = Date.now();
    
    // 如果強制刷新或緩存不存在/已過期，則從 API 獲取
    if (forceRefresh || 
        !userOrdersCache.current[cacheKey] || 
        now - userOrdersCache.current[cacheKey].timestamp > CACHE_EXPIRY) {
      
      const userOrders = await getOrdersByUsername(username);
      updateCache(username, orderId, userOrders);
      return userOrders;
    }
    
    // 返回緩存數據
    return userOrdersCache.current[cacheKey].data;
  }, []);

  // 清除特定訂單的緩存
  const clearOrderCache = useCallback((orderId: string) => {
    const cacheKey = `${username}-${orderId}`;
    if (userOrdersCache.current[cacheKey]) {
      delete userOrdersCache.current[cacheKey];
    }
  }, [username]);

  // 更新訂單狀態的輔助函數
  const updateOrderState = (userOrders: any[], orderId: string) => {
    const existingOrder = userOrders.find(o => o.dailyOrder?.id === orderId);
    
    if (existingOrder) {
      const orderItems = existingOrder.items.map((item: any) => ({
        id: item.menuItemId,
        menuItemId: item.menuItemId,
        name: item.itemName,
        price: item.price,
        quantity: item.quantity,
        options: item.options,
        notes: item.notes || '',
        vendorId: item.vendorId,
        vendorName: item.vendorName,
        username: username
      } as OrderItem));
      
      setOrder(orderItems);
      setHasExistingOrder(true);
      setIsOrderSubmitted(true);
    } else {
      setOrder([]);
      setHasExistingOrder(false);
      setIsOrderSubmitted(false);
    }
  };

  // 檢查用戶是否已經有該訂單
  const checkUserOrder = useCallback(async (orderId: string, forceRefresh = false) => {
    try {
      // 從緩存或 API 獲取數據
      const userOrders = await getOrdersByUsername(username);
      
      // 處理訂單數據
      updateOrderState(userOrders, orderId);
      
      // 檢查是否有該訂單
      const hasOrder = userOrders.some((o: any) => o.dailyOrder?.id === orderId);
      setHasExistingOrder(hasOrder);
      setIsOrderSubmitted(hasOrder);
      
      return hasOrder;
    } catch (error) {
      console.error('載入用戶訂單時出錯:', error);
      setOrder([]);
      setHasExistingOrder(false);
      setIsOrderSubmitted(false);
      return false;
    }
  }, [username]);

  // 確認切換訂單
  const confirmSwitchOrder = useCallback(async () => {
    if (!pendingOrder) return;
    
    // 清空購物車
    setOrder([]);
    setShowConfirmDialog(false);
    
    // 更新選中的訂單
    setSelectedOrder(pendingOrder);
    
    // 強制刷新訂單數據
    await checkUserOrder(pendingOrder.id, true);
    
    // 重置待處理的訂單
    setPendingOrder(null);
  }, [pendingOrder, checkUserOrder]);

  // 取消切換訂單
  const cancelSwitchOrder = useCallback(() => {
    setShowConfirmDialog(false);
    setPendingOrder(null);
  }, []);

  const handleSelectOrder = useCallback(async (orderToSelect: AvailableOrder) => {
    if (editingOrderId) return;
    
    // 如果是切換到同一個訂單，不做任何操作
    if (selectedOrder?.id === orderToSelect.id) return;
    
    // 如果購物車中有項目，且切換到不同店家的訂單，且當前訂單未提交，則顯示確認對話框
    if (order.length > 0 && selectedOrder?.vendor.vendorId !== orderToSelect.vendor.vendorId && !isOrderSubmitted) {
      setPendingOrder(orderToSelect);
      setShowConfirmDialog(true);
      return;
    }
    
    // 清空購物車並切換訂單
    setOrder([]);
    setSelectedOrder(orderToSelect);
    
    // 檢查用戶是否已經有該訂單（從緩存讀取）
    await checkUserOrder(orderToSelect.id, false);
  }, [order.length, selectedOrder?.vendor.vendorId, editingOrderId, isOrderSubmitted, checkUserOrder]);
  
  // 使用 useRef 來追蹤是否需要顯示提示
  const toastRef = useRef<() => void>();
  
  // 使用 useEffect 來處理提示，確保在渲染後執行
  useEffect(() => {
    if (toastRef.current) {
      const showToast = toastRef.current;
      // 在下一個事件循環中顯示提示，確保在渲染完成後
      const timer = setTimeout(() => {
        showToast();
        toastRef.current = undefined;
      }, 0);
      return () => clearTimeout(timer);
    }
  });

  // 從訂單中移除指定項目
  const handleRemoveItem = useCallback((itemId: string) => {
    setOrder(prevOrder => {
      // 過濾掉指定 ID 的項目
      const newOrder = prevOrder.filter(item => item.id !== itemId);
      
      // 如果是最後一個項目，清除訂單狀態
      if (newOrder.length === 0) {
        setHasExistingOrder(false);
        setIsOrderSubmitted(false);
      }
      
      return newOrder;
    });
  }, []);

  // 添加項目到訂單
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

  // 狀態變量已經在組件頂部聲明，這裡不需要重複聲明

  // 保存訂單到本地存儲
  const saveOrderToLocalStorage = useCallback((orderId: string, data: any) => {
    try {
      const key = `order_${orderId}_${username}`;
      localStorage.setItem(key, JSON.stringify({
        ...data,
        timestamp: new Date().getTime()
      }));
    } catch (error) {
      console.error('保存訂單到本地存儲失敗:', error);
    }
  }, [username]);

  // 從本地存儲加載訂單
  const loadOrderFromLocalStorage = useCallback((orderId: string) => {
    try {
      const key = `order_${orderId}_${username}`;
      const data = localStorage.getItem(key);
      if (data) {
        const parsed = JSON.parse(data);
        // 檢查是否在24小時內保存的
        if (new Date().getTime() - parsed.timestamp < 24 * 60 * 60 * 1000) {
          return parsed;
        }
        // 如果超過24小時，刪除舊數據
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.error('從本地存儲加載訂單失敗:', error);
    }
    return null;
  }, [username]);

  // 從本地存儲刪除訂單
  const removeOrderFromLocalStorage = useCallback((orderId: string) => {
    try {
      const key = `order_${orderId}_${username}`;
      localStorage.removeItem(key);
    } catch (error) {
      console.error('從本地存儲刪除訂單失敗:', error);
    }
  }, [username]);

  // 將 checkExistingOrder 函數移到組件頂部，使其可以被其他函數引用
  const checkExistingOrder = useCallback(async () => {
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
      
      // 首先嘗試從本地存儲加載
      const localOrder = loadOrderFromLocalStorage(orderId);
      
      if (localOrder) {
        console.log('從本地存儲加載訂單:', localOrder);
        setHasExistingOrder(localOrder.hasExistingOrder);
        setIsOrderSubmitted(localOrder.isOrderSubmitted);
        if (localOrder.order && localOrder.order.length > 0) {
          setOrder(localOrder.order);
        }
        return;
      }
      
      // 如果沒有緩存，則從 API 獲取數據
      if (!ordersCache.current[username]) {
        const orders = await getOrdersByUsername(username);
        ordersCache.current[username] = orders;
      }
      
      // 查找當前使用者在這個 dailyOrder 的訂單
      const userOrder = ordersCache.current[username].find(
        (o: any) => o.dailyOrderId === orderId
      );
      
      // 更新狀態
      const hasOrder = !!userOrder;
      setHasExistingOrder(hasOrder);
      
      // 如果是編輯模式，加載現有訂單
      if (isEditMode && userOrder) {
        const orderItems = userOrder.items.map((item: any) => ({
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
        // 設置訂單已提交狀態
        setIsOrderSubmitted(true);
        
        // 保存到本地存儲
        saveOrderToLocalStorage(orderId, {
          hasExistingOrder: true,
          isOrderSubmitted: true,
          order: orderItems
        });
      } else if (!hasOrder) {
        // 如果沒有現有訂單，確保訂單狀態為未提交
        setIsOrderSubmitted(false);
        // 清除本地存儲
        removeOrderFromLocalStorage(orderId);
      }
    } catch (error) {
      console.error("檢查訂單時出錯:", error);
    } finally {
      // 清除加載狀態
      setIsLoadingOrders(prev => ({ ...prev, [orderId]: false }));
    }
  }, [username, selectedOrder, isEditMode]);

  useEffect(() => {
    if (selectedOrder) {
      checkExistingOrder();
    }
  }, [selectedOrder, checkExistingOrder]);



  const handleSubmitOrder = useCallback(async (finalOrder: Omit<FinalOrder, 'dailyOrderId'>) => {
    console.log('handleSubmitOrder called with:', { 
      finalOrder, 
      selectedOrder, 
      editingOrderId, 
      hasExistingOrder, 
      username,
      availableOrders: availableOrders?.length,
      isEditMode,
      isEditing
    });
    
    // 如果是本地編輯模式，提交後不立即退出編輯模式，等提交成功後再退出
    // 這樣可以避免在異步操作完成前就切換狀態
    
    // 確保 selectedOrder 存在
    if (!selectedOrder) {
      console.error('No selected order', { 
        selectedOrder, 
        availableOrders: availableOrders?.map(o => o.id),
        isEditMode,
        orderIdToEdit
      });
      
      // 如果是在編輯模式但沒有 selectedOrder，嘗試從 availableOrders 中獲取
      if (isEditMode && orderIdToEdit && availableOrders?.length) {
        const orderToEdit = availableOrders.find(o => o.id === orderIdToEdit);
        if (orderToEdit) {
          console.log('Found order to edit from availableOrders:', orderToEdit);
          setSelectedOrder(orderToEdit);
          // 短暫延遲後重試提交
          setTimeout(() => handleSubmitOrder(finalOrder), 100);
          return;
        }
      }
      
      toast({ 
        variant: "destructive", 
        title: "錯誤", 
        description: "無法找到有效的訂單，請刷新頁面後重試" 
      });
      return;
    }
    
    // 確保 finalOrder 包含所有必需的字段
    const orderToSubmit: FinalOrder = {
      ...finalOrder,
      dailyOrderId: selectedOrder.id,
      username: finalOrder.username || username, // 使用傳入的 username 或組件中的 username
      vendorId: finalOrder.vendorId || selectedOrder.vendor?.vendorId,
      vendorName: finalOrder.vendorName || selectedOrder.vendor?.vendorName,
      items: finalOrder.items.map(item => ({
        ...item,
        options: item.options || {},
        notes: item.notes || ''
      })),
      notes: finalOrder.notes || ''
    };
    
    console.log('Submitting order with data:', orderToSubmit);
    
    if (orderToSubmit.items.length === 0) {
      console.error('Order is empty');
      toast({ variant: "destructive", title: "訂單是空的", description: "請先選擇餐點再送出訂單。" });
      return;
    }
    
    try {
      console.log('Setting isSubmitting to true');
      setIsSubmitting(true);
      
      // 如果是編輯模式或已有訂單，先刪除舊的訂單
      if (editingOrderId || hasExistingOrder) {
        console.log('Deleting existing order:', { 
          dailyOrderId: editingOrderId || selectedOrder.id, 
          username,
          isEditMode,
          hasExistingOrder
        });
        
        const deleteResult = await deleteUserOrder({ 
          dailyOrderId: editingOrderId || selectedOrder.id, 
          username 
        });
        
        console.log('Delete order result:', deleteResult);
        
        if (!deleteResult.success) {
          console.warn('Failed to delete existing order, but continuing with submission');
        }
      }

      // 提交新訂單
      console.log('Submitting order:', orderToSubmit);
      const submitResult = await submitOrder(orderToSubmit);
      console.log('Submit order result:', submitResult);
      
      if (!submitResult.success) {
        throw new Error(submitResult.error || 'Failed to submit order');
      }
      
      console.log('Updating local state');
      // 更新狀態
      setHasExistingOrder(true);
      setIsOrderSubmitted(true);
      
      // 保存到本地存儲
      saveOrderToLocalStorage(selectedOrder.id, {
        hasExistingOrder: true,
        isOrderSubmitted: true,
        order: orderToSubmit.items
      });
      
      // 清除訂單緩存，強制下次重新加載
      if (selectedOrder?.id) {
        const cacheKey = `${username}-${selectedOrder.id}`;
        delete userOrdersCache.current[cacheKey];
      }
      
      // 顯示成功提示
      toast({
        title: '訂單已送出',
        description: `已成功${editingOrderId || hasExistingOrder ? '更新' : '送出'} ${orderToSubmit.vendorName || '訂單'}`,
        variant: "default"
      });
      
      // 重置編輯狀態
      if (editingOrderId) {
        setEditingOrderId(null);
      }
      // 確保退出編輯模式
      setIsEditing(false);
      
      // 清除訂單快取並重新載入訂單數據
      console.log('Clearing order cache');
      if (selectedOrder?.id) {
        clearOrderCache(selectedOrder.id);
        console.log('Reloading order data');
        await checkUserOrder(selectedOrder.id, true);
      }
      
    } catch (error) {
      console.error('Error submitting order:', error);
      
      // 顯示更具體的錯誤信息
      let errorMessage = "訂單送出時發生錯誤，請稍後再試。";
      if (error instanceof Error) {
        if (error.message.includes('permission')) {
          errorMessage = "權限不足，請確認您已登入並有權限執行此操作。";
        } else if (error.message.includes('network')) {
          errorMessage = "網路連接出現問題，請檢查您的網路連線後重試。";
        } else {
          errorMessage = error.message;
        }
      }
      
      toast({ 
        variant: "destructive", 
        title: "送出失敗", 
        description: errorMessage,
        duration: 5000
      });
      
    } finally {
      console.log('Setting isSubmitting to false');
      setIsSubmitting(false);
    }
  }, [isEditMode, editingOrderId, toast, selectedOrder, hasExistingOrder, username, availableOrders, orderIdToEdit, clearOrderCache, checkUserOrder]);

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
    <div className="container mx-auto max-w-screen-xl p-4 sm:p-6 lg:p-8 relative">
      {/* 確認對話框 */}
      {showConfirmDialog && pendingOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <h3 className="text-lg font-medium mb-4">確認切換訂單</h3>
            <p className="mb-6">
              您有尚未提交的訂單項目。確定要切換到 <span className="font-semibold">{pendingOrder.vendor.vendorName}</span> 的訂單嗎？這將清空您的購物車。
            </p>
            <div className="flex justify-end space-x-3">
              <Button 
                variant="outline" 
                onClick={cancelSwitchOrder}
                className="px-6"
              >
                取消
              </Button>
              <Button 
                onClick={confirmSwitchOrder}
                className="px-6"
              >
                確認
              </Button>
            </div>
          </div>
        </div>
      )}
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
          {selectedOrder ? (
            <section>
              <div className="flex flex-col space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-headline text-2xl font-bold">
                    {isEditMode ? '編輯訂單 - ' : ''}{selectedOrder.vendor.vendorName} 菜單
                  </h2>
                  {hasExistingOrder && !isEditMode && !editingOrderId && !isEditing && (
                    <Badge className={`ml-2 ${isOrderPaid ? 'bg-green-100 text-green-800 border-green-200' : 'bg-amber-100 text-amber-800 border-amber-200'}`}>
                      {isOrderPaid ? (
                        <>
                          <CheckCircle2 className="h-3 w-3 mr-1" /> 已收款
                        </>
                      ) : (
                        <>
                          <Clock className="h-3 w-3 mr-1" /> 未收款
                        </>
                      )}
                    </Badge>
                  )}
                </div>
                
                {isPastDeadline ? (
                  <Card className="flex flex-col items-center justify-center p-8 text-center text-destructive bg-destructive/10 border-destructive/50">
                    <Ban className="h-16 w-16 mb-4" />
                    <h3 className="font-headline text-xl font-bold mb-2">訂購已截止</h3>
                    <p className="font-body text-sm">此店家的訂購時間已過，無法再修改訂單。</p>
                  </Card>
                ) : hasExistingOrder && !isEditMode && !editingOrderId && !isEditing ? (
                  <Card className="flex flex-col items-center justify-center p-8 text-center text-blue-700 bg-blue-50 border-blue-200">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <CheckCircle2 className="h-16 w-16 text-blue-600" />
                      <h3 className="font-headline text-xl font-bold">您已經訂購過此訂單</h3>
                      <p className="font-body text-sm">
                        {isOrderPaid 
                          ? '您的訂單已付款，如有問題請聯繫管理者。' 
                          : '可點選編輯訂單修改品項'}
                      </p>
                    </div>
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
                        disabled={isPastDeadline}
                      />
                    )) : (
                      <p className="text-sm text-muted-foreground col-span-full">這個店家還沒有任何菜單品項，請管理者新增。</p>
                    )}
                  </div>
                )}
              </div>
            </section>
          ) : null}
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
              isEditMode={isEditMode || !!editingOrderId || isEditing}
              disabled={isPastDeadline || isOrderPaid}
              hasSubmitted={isOrderSubmitted}
              onEdit={() => {
                // 檢查是否已付款或已截止
                if (isOrderPaid) {
                  toast({
                    title: "無法編輯訂單",
                    description: "此訂單已付款，無法進行編輯。",
                    variant: "destructive"
                  });
                  return;
                }
                if (isPastDeadline) {
                  toast({
                    title: "無法編輯訂單",
                    description: "訂購時間已截止，無法進行編輯。",
                    variant: "destructive"
                  });
                  return;
                }
                // 切換編輯模式
                setIsEditing(!isEditing);
              }}
              onDelete={() => {
                if (!selectedOrder) return;
                
                // 檢查是否已付款或已截止
                if (isOrderPaid) {
                  toast({
                    title: "無法刪除訂單",
                    description: "此訂單已付款，無法進行刪除。",
                    variant: "destructive"
                  });
                  return;
                }
                if (isPastDeadline) {
                  toast({
                    title: "無法刪除訂單",
                    description: "訂購時間已截止，無法進行刪除。",
                    variant: "destructive"
                  });
                  return;
                }
                
                setShowDeleteConfirm(true);
              }}
            />
          </div>
        </aside>
      </div>

      {/* 刪除確認對話框 */}
      {showDeleteConfirm && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h3 className="text-lg font-semibold">確認刪除訂單</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              確定要刪除 {selectedOrder.vendor.vendorName} 的訂單嗎？此操作無法復原。
            </p>
            <div className="flex justify-end gap-3">
              <Button 
                variant="outline" 
                onClick={() => setShowDeleteConfirm(false)}
              >
                取消
              </Button>
              <Button 
                variant="destructive"
                onClick={async () => {
                  try {
                    // 調用刪除訂單的 API
                    await deleteUserOrder({ dailyOrderId: selectedOrder.id, username });
                    toast({
                      title: "訂單已刪除",
                      description: `已成功刪除 ${selectedOrder.vendor.vendorName} 的訂單`,
                      variant: "default"
                    });
                    // 重置訂單狀態
                    setOrder([]);
                    setHasExistingOrder(false);
                    setIsOrderSubmitted(false);
                    setEditingOrderId(null);
                    setShowDeleteConfirm(false);
                    
                    // 如果是在編輯模式，則返回訂單列表
                    if (isEditMode || editingOrderId) {
                      router.push(`/order?username=${encodeURIComponent(username)}`);
                    }
                  } catch (error) {
                    console.error("刪除訂單時出錯:", error);
                    toast({
                      variant: "destructive",
                      title: "刪除訂單失敗",
                      description: error instanceof Error ? error.message : "請稍後再試"
                    });
                  } finally {
                    setShowDeleteConfirm(false);
                  }
                }}
              >
                確認刪除
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
