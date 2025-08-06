
"use client";

import { useState, useMemo, useTransition, useEffect } from 'react';
import { type OrderDetailItem, markUserOrderAsPaid, updateUserOrder } from '@/ai/flows/order-flow';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Download, User, ShoppingBag, Hash, DollarSign, StickyNote, Loader2, Edit, Save, X, Trash2, PlusCircle, MinusCircle } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
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


interface OrderDetailClientProps {
  initialOrderDetails: OrderDetailItem[];
}

type OrderByUser = {
    username: string;
    items: OrderDetailItem[];
    total: number;
    notes: string;
    isPaid: boolean;
};

type OrderByItem = {
    itemName: string;
    options: string;
    totalQuantity: number;
    users: { name: string; quantity: number }[];
    price: number;
};

const optionsToString = (options: Record<string, string>): string => {
    if (!options || Object.keys(options).length === 0) return '無';
    return Object.entries(options).map(([key, value]) => `${key}: ${value}`).join(', ');
};

function UserOrderCard({ userOrder, onPaymentUpdate, onOrderUpdate, deadline }: { userOrder: OrderByUser, onPaymentUpdate: (username: string, isPaid: boolean) => void, onOrderUpdate: () => void, deadline?: string }) {
    const isDeadlinePassed = useMemo(() => {
        if (!deadline) return false;
        const [hours, minutes] = deadline.split(':').map(Number);
        const now = new Date();
        const deadlineTime = new Date(now);
        deadlineTime.setHours(hours, minutes, 0, 0);
        return now > deadlineTime;
    }, [deadline]);
    
    const isReadOnly = userOrder.isPaid || isDeadlinePassed;
    const { toast } = useToast();
    const [isEditing, setIsEditing] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [editableItems, setEditableItems] = useState<OrderDetailItem[]>([]);

    useEffect(() => {
        // Deep copy to prevent direct state mutation
        setEditableItems(JSON.parse(JSON.stringify(userOrder.items)));
    }, [userOrder.items]);

    const handlePaymentStatusChange = (username: string, isPaid: boolean) => {
        const dailyOrderId = editableItems[0]?.dailyOrderId;
        if (!dailyOrderId) return;
        
        startTransition(async () => {
            try {
                await markUserOrderAsPaid({ dailyOrderId, username, isPaid });
                onPaymentUpdate(username, isPaid); // Update local state instead of full refetch
                toast({
                    title: "付款狀態已更新",
                    description: `${username} 的訂單已標示為 ${isPaid ? '已付款' : '未付款'}。`,
                });
            } catch (error) {
                 toast({
                    variant: "destructive",
                    title: "更新失敗",
                    description: error instanceof Error ? error.message : "無法更新付款狀態。",
                });
            }
        });
    };

    const handleQuantityChange = (itemId: string, newQuantity: number) => {
        setEditableItems(currentItems => {
            if (newQuantity <= 0) {
                return currentItems.filter(item => item.id !== itemId);
            }
            return currentItems.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            );
        });
    };
    
    const handleSaveChanges = () => {
        const dailyOrderId = userOrder.items[0]?.dailyOrderId;
        if(!dailyOrderId) return;

        startTransition(async () => {
             try {
                await updateUserOrder({
                    dailyOrderId,
                    username: userOrder.username,
                    items: editableItems,
                });
                onOrderUpdate(); // Re-fetch all data after structural changes
                setIsEditing(false);
                toast({
                    title: "訂單已儲存",
                    description: `${userOrder.username} 的訂單已成功更新。`,
                });
             } catch(error) {
                toast({
                    variant: "destructive",
                    title: "儲存失敗",
                    description: error instanceof Error ? error.message : "無法儲存訂單變更。",
                });
             }
        });
    };

    const handleCancelEdit = () => {
        setEditableItems(JSON.parse(JSON.stringify(userOrder.items)));
        setIsEditing(false);
    };

    const calculatedTotal = useMemo(() => {
        return editableItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [editableItems]);


    return (
        <Card key={userOrder.username}>
            <CardHeader className="flex flex-row justify-between items-start">
                <div>
                    <CardTitle>{userOrder.username}</CardTitle>
                    <div className="flex items-center space-x-2 mt-2">
                        <Switch
                            id={`payment-status-${userOrder.username}`}
                            checked={userOrder.isPaid}
                            onCheckedChange={(checked) => handlePaymentStatusChange(userOrder.username, checked)}
                            disabled={isPending || isEditing}
                        />
                        <Label htmlFor={`payment-status-${userOrder.username}`}>
                            <Badge variant={userOrder.isPaid ? "default" : "secondary"}>
                                {isPending && <Loader2 className="mr-1 h-3 w-3 animate-spin" />}
                                {userOrder.isPaid ? "已付款" : "未付款"}
                            </Badge>
                        </Label>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-right">
                        <p className="text-sm text-muted-foreground">總計</p>
                        <p className="text-xl font-bold">${isEditing ? calculatedTotal.toLocaleString() : userOrder.total.toLocaleString()}</p>
                    </div>
                    {!isReadOnly && !isEditing && (
                        <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={() => setIsEditing(true)}
                            title="編輯訂單"
                        >
                            <Edit className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <Separator className="mb-4" />
                <div className="space-y-3">
                    {editableItems.map(item => (
                        <div key={item.id} className="grid grid-cols-5 gap-2 text-sm">
                            <div className="col-span-3">
                                <p className="font-medium">{item.itemName}</p>
                                <p className="text-xs text-muted-foreground">{optionsToString(item.options)}</p>
                            </div>
                            {isEditing ? (
                                <div className="col-span-1 flex items-center justify-center gap-1.5">
                                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={isPending}><MinusCircle className="h-4 w-4" /></Button>
                                    <span className="font-bold">{item.quantity}</span>
                                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleQuantityChange(item.id, item.quantity + 1)} disabled={isPending}><PlusCircle className="h-4 w-4" /></Button>
                                </div>
                            ) : (
                                <p className="col-span-1 text-center">x {item.quantity}</p>
                            )}
                            <p className="col-span-1 text-right">${item.price}</p>
                        </div>
                    ))}
                </div>
                {userOrder.notes && (
                    <>
                        <Separator className="my-4" />
                        <div className="text-sm">
                            <p className="font-medium flex items-center gap-1.5"><StickyNote className="h-4 w-4" /> 備註</p>
                            <p className="text-muted-foreground pl-1">{userOrder.notes}</p>
                        </div>
                    </>
                )}
            </CardContent>
            {isEditing && (
                <CardFooter className="flex justify-end gap-2 bg-muted/50 p-3">
                    <Button 
                        variant="ghost" 
                        onClick={handleCancelEdit} 
                        disabled={isPending}
                        title="取消編輯"
                    >
                        <X className="mr-2 h-4 w-4" />取消
                    </Button>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button 
                                variant="default" 
                                disabled={isPending}
                                title="儲存變更"
                            >
                                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                                儲存變更
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                             <AlertDialogHeader>
                                <AlertDialogTitle>確定要儲存變更嗎?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    此動作將會覆蓋 {userOrder.username} 的原始訂單。此操作無法復原。
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>取消</AlertDialogCancel>
                                <AlertDialogAction onClick={handleSaveChanges}>確定儲存</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </CardFooter>
            )}
        </Card>
    );
}


export function OrderDetailClient({ initialOrderDetails, deadline }: OrderDetailClientProps & { deadline?: string }) {
  const [orderDetails, setOrderDetails] = useState<OrderDetailItem[]>(initialOrderDetails);
  
  useEffect(() => {
    setOrderDetails(initialOrderDetails);
  }, [initialOrderDetails])

  const handlePaymentUpdate = (username: string, isPaid: boolean) => {
    setOrderDetails(currentDetails => {
        return currentDetails.map(item => {
            if (item.username === username) {
                return { ...item, isPaid: isPaid };
            }
            return item;
        });
    });
  };

  const ordersByUser = useMemo<OrderByUser[]>(() => {
    if (!orderDetails) return [];
    
    // First, group all items by username
    const groupedByUser = orderDetails.reduce((acc, item) => {
      if (!acc[item.username]) {
        acc[item.username] = [];
      }
      acc[item.username].push(item);
      return acc;
    }, {} as Record<string, OrderDetailItem[]>);
    
    // Then, for each user, aggregate their items
    return Object.entries(groupedByUser).map(([username, items]) => {
      const aggregatedItemsMap = items.reduce((acc, item) => {
        const key = `${item.menuItemId}|${optionsToString(item.options)}`;
        if (acc.has(key)) {
          acc.get(key)!.quantity += item.quantity;
        } else {
          acc.set(key, { ...item });
        }
        return acc;
      }, new Map<string, OrderDetailItem>());

      const aggregatedItems = Array.from(aggregatedItemsMap.values());
      const total = aggregatedItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

      return {
        username,
        items: aggregatedItems,
        total,
        notes: items.length > 0 ? items[0].notes : '',
        isPaid: items.length > 0 ? items[0].isPaid : false,
      };
    });
  }, [orderDetails]);
  
  const ordersByItem = useMemo<OrderByItem[]>(() => {
    if (!orderDetails) return [];

    // Group by item name and options string first
    const groupedByItem = orderDetails.reduce((acc, item) => {
        const key = `${item.itemName}|${optionsToString(item.options)}`;
        if (!acc.has(key)) {
            acc.set(key, {
                itemName: item.itemName,
                options: optionsToString(item.options),
                totalQuantity: 0,
                usersMap: new Map<string, number>(),
                price: item.price
            });
        }
        
        const group = acc.get(key)!;
        group.totalQuantity += item.quantity;
        
        // Aggregate quantity per user within the item group
        const currentQty = group.usersMap.get(item.username) || 0;
        group.usersMap.set(item.username, currentQty + item.quantity);
        
        return acc;
    }, new Map<string, { itemName: string; options: string; totalQuantity: number; usersMap: Map<string, number>; price: number; }>());
    
    // Convert the map to the final array structure
    return Array.from(groupedByItem.values()).map(group => ({
        itemName: group.itemName,
        options: group.options,
        totalQuantity: group.totalQuantity,
        price: group.price,
        users: Array.from(group.usersMap.entries()).map(([name, quantity]) => ({ name, quantity }))
    })).sort((a,b) => b.totalQuantity - a.totalQuantity);

  }, [orderDetails]);
  
  const totalAmount = useMemo(() => ordersByUser.reduce((sum, user) => sum + user.total, 0), [ordersByUser]);
  const totalItemsCount = useMemo(() => orderDetails.reduce((sum, item) => sum + item.quantity, 0), [orderDetails]);

  const handleExport = (view: 'byUser' | 'byItem') => {
    // Add BOM for UTF-8 handling in Excel
    let csvContent = '\uFEFF';
    
    if (view === 'byUser') {
        csvContent += "訂購人,品項,選項,數量,單價,總價,備註,付款狀態\n";
        ordersByUser.forEach(userOrder => {
            userOrder.items.forEach(item => {
                const row = [
                    `"${userOrder.username}"`,
                    `"${item.itemName}"`,
                    `"${optionsToString(item.options)}"`,
                    item.quantity,
                    item.price,
                    item.quantity * item.price,
                    `"${userOrder.notes}"`,
                    userOrder.isPaid ? "是" : "否"
                ].join(',');
                csvContent += row + "\n";
            });
        });
    } else {
        csvContent += "品項,選項,總數量,單價,訂購人\n";
        ordersByItem.forEach(itemOrder => {
            const usersString = itemOrder.users.map(u => `${u.name} (x${u.quantity})`).join('; ');
            const row = [
                `"${itemOrder.itemName}"`,
                `"${itemOrder.options}"`,
                itemOrder.totalQuantity,
                itemOrder.price,
                `"${usersString}"`
            ].join(',');
            csvContent += row + "\n";
        });
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `order_summary_${view}.csv`);
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link);
  };
  
  const [activeTab, setActiveTab] = useState('byUser');


  return (
    <div>
      <Card className="mb-6 bg-muted/30">
          <CardHeader>
              <CardTitle>訂單總覽</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">總金額</p>
                  <p className="text-2xl font-bold">${totalAmount.toLocaleString()}</p>
              </div>
              <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">總訂購份數</p>
                  <p className="text-2xl font-bold">{totalItemsCount}</p>
              </div>
              <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">訂購人數</p>
                  <p className="text-2xl font-bold">{ordersByUser.length}</p>
              </div>
              <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">品項種類</p>
                  <p className="text-2xl font-bold">{ordersByItem.length}</p>
              </div>
          </CardContent>
      </Card>
    
      <Tabs defaultValue="byUser" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="byUser">按訂購人檢視</TabsTrigger>
            <TabsTrigger value="byItem">按品項檢視</TabsTrigger>
          </TabsList>
          <Button variant="default" onClick={() => handleExport(activeTab as 'byUser' | 'byItem')}>
            <Download className="mr-2 h-4 w-4" />
            匯出
          </Button>
        </div>
        <TabsContent value="byUser">
          <div className="space-y-4">
            {ordersByUser.length > 0 ? ordersByUser.map(userOrder => (
                <UserOrderCard 
                    key={userOrder.username}
                    userOrder={userOrder}
                    deadline={deadline}
                    onPaymentUpdate={handlePaymentUpdate}
                    onOrderUpdate={() => {
                        // This re-fetches ALL data from parent when one card is updated.
                        const parent = document.querySelector<HTMLButtonElement>('button[data-re-fetch-button]');
                        parent?.click();
                    }}
                />
            )) : <p className="text-center text-muted-foreground py-8">目前沒有任何訂單資料。</p>}
          </div>
        </TabsContent>
        <TabsContent value="byItem">
          <Card>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>品項</TableHead>
                        <TableHead>總數量</TableHead>
                        <TableHead>訂購人</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ordersByItem.length > 0 ? ordersByItem.map(item => (
                        <TableRow key={`${item.itemName}-${item.options}`}>
                            <TableCell>
                                <p className="font-medium">{item.itemName}</p>
                                <p className="text-xs text-muted-foreground">{item.options}</p>
                            </TableCell>
                            <TableCell className="font-bold text-center">{item.totalQuantity}</TableCell>
                            <TableCell>
                                <div className="flex flex-wrap gap-1">
                                    {item.users.map(user => (
                                       <Badge key={user.name} variant="secondary">{user.name} (x{user.quantity})</Badge>
                                    ))}
                                </div>
                            </TableCell>
                        </TableRow>
                    )) : (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                                目前沒有任何訂單資料。
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
