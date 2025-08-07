
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
  selectedOptions?: Record<string, string>;
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
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onSubmit: (finalOrder: Omit<FinalOrder, 'dailyOrderId'>) => void;
  onClear: () => void;
  isSubmitting?: boolean;
  selectedOrder: any | null;
  username: string;
  notes: string;
  setNotes: (notes: string) => void;
  isEditMode?: boolean;
  disabled?: boolean;
  hasSubmitted?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function OrderSummary({ 
  order, 
  username, 
  onUpdateQuantity, 
  onRemoveItem,
  onSubmit, 
  onClear, 
  isSubmitting = false, 
  selectedOrder, 
  notes, 
  setNotes, 
  isEditMode = false, 
  disabled = false,
  hasSubmitted = false,
  onEdit,
  onDelete
}: OrderSummaryProps) {
  // When the component receives an existing order for editing, update the notes field.
  useEffect(() => {
      if (isEditMode && order.length > 0 && order[0].notes) {
          setNotes(order[0].notes);
      }
  }, [isEditMode, order, setNotes]);

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
    if (order.length === 0 || disabled) return;
    
    const finalOrder: Omit<FinalOrder, 'dailyOrderId'> = {
      username,
      vendorId: order[0].vendorId,
      vendorName: order[0].vendorName,
      notes: notes.trim(),
      items: order.map(({ vendorName, vendorId, username, ...item }) => ({
        ...item,
        notes: notes.trim()
      }))
    };
    
    onSubmit(finalOrder);
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <Card className={cn("shadow-xl bg-background/80 backdrop-blur-sm transform transition-all duration-300 lg:-rotate-1 lg:hover:rotate-0", disabled && "bg-muted/80 lg:rotate-0")}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                {isEditMode ? <Edit className="h-7 w-7 text-accent" /> : <NotebookPen className={cn("h-7 w-7 text-accent", disabled && "text-muted-foreground")} />}
                <CardTitle className="font-headline text-2xl">{isEditMode ? '修改訂單' : '我的訂單'}</CardTitle>
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
              {order.map((item, index) => (
                <div 
                  key={`${item.id}-${index}-${JSON.stringify(item.options)}`} 
                  className="flex items-start justify-between font-body text-sm"
                >
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <p className="font-medium">{item.name}</p>
                      <span className="font-mono ml-2">${item.price.toLocaleString()} x {item.quantity}</span>
                    </div>
                    
                    {Object.keys(item.options).length > 0 && (
                      <div className="mt-1 text-xs text-muted-foreground">
                        {Object.entries(item.options).map(([key, value], optionIndex) => (
                          <div key={`${item.id}-${key}-${optionIndex}`} className="flex">
                            <span className="text-muted-foreground/80">{key}:</span>
                            <span className="ml-1">{value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {item.notes && (
                      <div className="mt-1 text-xs text-muted-foreground italic">
                        備註: {item.notes}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1 ml-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 text-muted-foreground hover:text-foreground" 
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdateQuantity(item.id, item.quantity - 1);
                      }} 
                      aria-label={`減少 ${item.name} 數量`} 
                      disabled={disabled}
                    >
                      <MinusCircle className="h-4 w-4" />
                    </Button>
                    
                    <span className="w-6 text-center font-mono text-sm">
                      {item.quantity}
                    </span>
                    
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 text-muted-foreground hover:text-foreground" 
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdateQuantity(item.id, item.quantity + 1);
                      }} 
                      aria-label={`增加 ${item.name} 數量`} 
                      disabled={disabled}
                    >
                      <PlusCircle className="h-4 w-4" />
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 text-destructive/70 hover:text-destructive" 
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveItem(item.id);
                      }} 
                      aria-label={`移除 ${item.name}`} 
                      disabled={disabled}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-3" />
            
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="order-notes" className="text-sm font-medium">訂單備註 (選填)</Label>
                <Textarea 
                  id="order-notes" 
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)} 
                  placeholder="例如: 不要辣、餐具一份" 
                  disabled={disabled}
                  className="min-h-[80px] text-sm"
                />
              </div>
              
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>小計</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">總計</span>
                  <span className="font-bold text-lg text-foreground">${total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {!hasSubmitted ? (
          <Button
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-6"
            disabled={order.length === 0 || disabled}
            onClick={handleSubmit}
          >
            {disabled ? "已截止" : (isEditMode ? '確認修改' : '送出訂單')}
          </Button>
        ) : (
          <div className="w-full flex gap-2">
            <Button
              variant="outline"
              className="flex-1 bg-background hover:bg-accent/10 text-base py-6 border-2 border-accent/20"
              onClick={handleEdit}
              disabled={disabled}
            >
              編輯訂單
            </Button>
            <Button
              variant="destructive"
              className="flex-1 bg-destructive/90 hover:bg-destructive text-base py-6"
              onClick={handleDelete}
              disabled={disabled}
            >
              刪除訂單
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
