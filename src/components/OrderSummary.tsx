
"use client";

import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MinusCircle, NotebookPen, PlusCircle, Trash2, ShoppingCart, Edit } from "lucide-react";
import { cn } from "@/lib/utils";

export type OrderItem = {
  id: string; // composite key: menuItemId + options
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  vendorName: string;
  vendorId: string;
  username: string;
  options: Record<string, string>;
  notes: string;
};

export type FinalOrder = {
    dailyOrderId: string;
    username: string;
    vendorId: string;
    vendorName: string;
    notes: string;
    items: Omit<OrderItem, 'vendorName' | 'vendorId' | 'username'>[];
}

interface OrderSummaryProps {
  order: OrderItem[];
  username: string;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onSubmit: (finalOrder: Omit<FinalOrder, 'dailyOrderId'>) => void;
  disabled?: boolean;
  isEditing?: boolean;
}

export function OrderSummary({ order, username, onUpdateQuantity, onSubmit, disabled = false, isEditing = false }: OrderSummaryProps) {
  const [notes, setNotes] = useState('');

  // When the component receives an existing order for editing, update the notes field.
  useEffect(() => {
      if (isEditing && order.length > 0 && order[0].notes) {
          setNotes(order[0].notes);
      }
  }, [isEditing, order]);

  const total = useMemo(() => {
    return order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [order]);

  const vendorName = useMemo(() => {
    return order.length > 0 ? order[0].vendorName : "";
  }, [order]);
  
  const vendorId = useMemo(() => {
    return order.length > 0 ? order[0].vendorId : "";
  }, [order]);
  
  const handleSubmit = () => {
      if (disabled) return;
      const finalOrder: Omit<FinalOrder, 'dailyOrderId'> = {
          username,
          vendorId,
          vendorName,
          notes,
          items: order.map(({ vendorName, vendorId, username, ...item }) => ({...item, notes: notes})) // ensure notes are consistent for all items
      };
      onSubmit(finalOrder);
      setNotes('');
  }

  return (
    <Card className={cn("shadow-xl bg-background/80 backdrop-blur-sm transform transition-all duration-300 lg:-rotate-1 lg:hover:rotate-0", disabled && "bg-muted/80 lg:rotate-0")}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                {isEditing ? <Edit className="h-7 w-7 text-accent" /> : <NotebookPen className={cn("h-7 w-7 text-accent", disabled && "text-muted-foreground")} />}
                <CardTitle className="font-headline text-2xl">{isEditing ? '修改訂單' : '我的訂單'}</CardTitle>
            </div>
            {username && <span className="font-body text-sm font-medium text-muted-foreground">訂購人: {username}</span>}
        </div>
        {vendorName && <CardDescription>店家: {vendorName}</CardDescription>}
      </CardHeader>
      <CardContent>
        {order.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center text-muted-foreground py-10">
            <ShoppingCart className="h-12 w-12 mb-4" />
            <p className="font-body">您的訂單是空的。</p>
            <p className="font-body text-sm">{disabled ? "此店家已截止訂購。" : "快去挑選想吃的餐點吧！"}</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="max-h-60 overflow-y-auto pr-2 space-y-4">
              {order.map((item) => (
                <div key={item.id} className="flex items-start justify-between font-body text-sm">
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <div className="text-xs text-muted-foreground">
                        {Object.entries(item.options).map(([key, value]) => (
                            <span key={key} className="mr-2">{key}: {value}</span>
                        ))}
                    </div>
                    <p className="text-muted-foreground">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} aria-label={`減少 ${item.name} 數量`} disabled={disabled}>
                      <MinusCircle className="h-4 w-4" />
                    </Button>
                    <span className="w-6 text-center font-mono">{item.quantity}</span>
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} aria-label={`增加 ${item.name} 數量`} disabled={disabled}>
                      <PlusCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive/70 hover:text-destructive" onClick={() => onUpdateQuantity(item.id, 0)} aria-label={`移除 ${item.name}`} disabled={disabled}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Separator />
             <div className="space-y-2">
                <Label htmlFor="order-notes">訂單備註 (選填)</Label>
                <Textarea id="order-notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="例如: 不要辣、餐具一份" disabled={disabled} />
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg font-headline">
              <span>總計</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-6"
          disabled={order.length === 0 || disabled}
          onClick={handleSubmit}
        >
          {disabled ? "已截止" : (isEditing ? '確認修改' : '送出訂單')}
        </Button>
      </CardFooter>
    </Card>
  );
}
