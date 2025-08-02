
"use client";

import { useState, useTransition, useEffect, useCallback, useRef } from 'react';
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
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
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

import { PlusCircle, Trash2, Loader2, Edit, X, FilePlus2, Copy } from 'lucide-react';
import { addMenuItem, deleteMenuItem, updateMenuItem, duplicateMenuItem, batchDeleteMenuItems, type MenuItem, type UpdateMenuItemRequest } from '@/ai/flows/menu-flow';
import { type AddMenuItemRequest, AddMenuItemRequestSchema } from '@/lib/schema/menu';

type FormData = AddMenuItemRequest;

interface MenuEditorProps {
    vendorId: string;
    vendorName: string;
    initialMenu: MenuItem[];
    onMenuUpdate: () => void;
}

export function MenuEditor({ vendorId, vendorName, initialMenu, onMenuUpdate }: MenuEditorProps) {
  const { toast } = useToast();
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [isPending, startTransition] = useTransition();
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenu);
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);

  useEffect(() => {
    setMenuItems(initialMenu);
  }, [initialMenu]);

  const form = useForm<FormData>({
    resolver: zodResolver(AddMenuItemRequestSchema),
    defaultValues: {
      vendorId: vendorId,
      name: "",
      description: "",
      price: undefined, // Use undefined for better validation with Zod
      optionGroups: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "optionGroups",
  });
  
  const { reset, clearErrors } = form;

  const resetFormAndDeselect = useCallback(() => {
    reset({
      vendorId: vendorId,
      name: "",
      description: "",
      price: undefined,
      optionGroups: [],
    });
    clearErrors();
    setEditingItem(null);
  }, [vendorId, reset, clearErrors]);
  
  useEffect(() => {
    if (editingItem) {
        const optionGroups = editingItem.options?.map(group => ({
            groupName: group.name,
            choices: group.choices.map(c => c.name).join(','),
            priceDeltas: group.choices.map(c => c.priceDelta).join(','),
        })) || [];
        
        reset({
            vendorId: vendorId,
            name: editingItem.name,
            description: editingItem.description || '',
            price: editingItem.price,
            optionGroups: optionGroups,
        });
        clearErrors();
        nameInputRef.current?.focus();
    } else {
        resetFormAndDeselect();
        nameInputRef.current?.focus();
    }
  }, [editingItem, vendorId, reset, clearErrors, resetFormAndDeselect]);


  const onSubmit = (data: FormData) => {
    startTransition(async () => {
      try {
        if (editingItem) {
          const updateData: UpdateMenuItemRequest = {
            id: editingItem.id,
            vendorId: vendorId,
            ...data
          }
          await updateMenuItem(updateData);
          toast({ title: "品項已更新", description: `${data.name} 已成功更新。` });
        } else {
          await addMenuItem(data);
          toast({ title: "品項已新增", description: `${data.name} 已成功新增到菜單。` });
        }
        resetFormAndDeselect();
        onMenuUpdate(); // Re-fetch menu data
      } catch (error) {
         const action = editingItem ? "新增" : "更新";
         toast({ variant: "destructive", title: `${action}失敗`, description: error instanceof Error ? error.message : "發生未知錯誤" });
      }
    });
  };

  const handleDeleteItem = (itemId: string, itemName: string) => {
    startTransition(async () => {
      try {
        await deleteMenuItem({ id: itemId });
        toast({ title: "品項已刪除", description: `${itemName} 已從菜單移除。`});
        if (editingItem?.id === itemId) {
          resetFormAndDeselect();
        }
        onMenuUpdate();
      } catch (error) {
        toast({ variant: "destructive", title: "刪除失敗", description: error instanceof Error ? error.message : "發生未知錯誤" });
      }
    });
  };

  const handleDuplicateItem = (itemId: string, itemName: string) => {
    startTransition(async () => {
        try {
            await duplicateMenuItem(itemId);
            toast({ title: "品項已複製", description: `${itemName} 已成功複製。` });
            onMenuUpdate();
        } catch (error) {
            toast({ variant: "destructive", title: "複製失敗", description: error instanceof Error ? error.message : "發生未知錯誤" });
        }
    });
  };

  const handleEditClick = (item: MenuItem) => {
    setEditingItem(item);
  };
  
  const handleBatchDelete = () => {
    if (selectedItemIds.length === 0) return;
    startTransition(async () => {
      try {
        await batchDeleteMenuItems({ ids: selectedItemIds });
        toast({ title: "品項已刪除", description: `已成功刪除 ${selectedItemIds.length} 個品項。` });
        setSelectedItemIds([]);
        onMenuUpdate();
      } catch (error) {
        toast({ variant: "destructive", title: "批量刪除失敗", description: error instanceof Error ? error.message : "發生未知錯誤" });
      }
    });
  };

  const toggleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItemIds(menuItems.map(item => item.id));
    } else {
      setSelectedItemIds([]);
    }
  };

  const toggleSelectItem = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedItemIds(prev => [...prev, id]);
    } else {
      setSelectedItemIds(prev => prev.filter(itemId => itemId !== id));
    }
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Add/Edit Form */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
               {editingItem ? <Edit className="h-6 w-6" /> : <FilePlus2 className="h-6 w-6" />}
              <span>{editingItem ? '編輯品項' : '新增品項'}</span>
            </CardTitle>
            <CardDescription>{editingItem ? `正在編輯 ${editingItem.name}。完成後請點擊儲存。` : '在此建立包含多種客製化選項的餐點。'}</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>品項名稱</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="例如: 招牌雞腿飯"
                          {...field}
                          ref={nameInputRef}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>品項描述 (選填)</FormLabel>
                      <FormControl><Textarea placeholder="例如: 本日限定、使用台東池上米..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field: { onChange, ...restField } }) => (
                    <FormItem>
                      <FormLabel>基本價格</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...restField}
                          onChange={e => {
                            const value = e.target.value;
                            onChange(value === '' ? undefined : parseInt(value, 10));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">客製化選項</h3>
                      <Button type="button" variant="outline" size="sm" onClick={() => append({ groupName: '', choices: '', priceDeltas: '' })}>
                        <PlusCircle className="mr-2 h-4 w-4" /> 新增選項群組
                      </Button>
                  </div>
                  
                  {fields.map((field, index) => (
                    <Card key={field.id} className="p-4 bg-muted/50 relative">
                       <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2 h-6 w-6" onClick={() => remove(index)}>
                          <X className="h-4 w-4" />
                       </Button>
                      <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name={`optionGroups.${index}.groupName`}
                            render={({ field }) => (
                              <FormItem><FormLabel>選項群組 {index + 1}</FormLabel><FormControl><Input placeholder="例如: 辣度、飯量" {...field} /></FormControl><FormMessage /></FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`optionGroups.${index}.choices`}
                            render={({ field }) => (
                              <FormItem><FormLabel>選項 (用,分隔)</FormLabel><FormControl><Input placeholder="例如: 正常,飯多,不飯" {...field} /></FormControl><FormDescription>第一個選項為預設選項。</FormDescription><FormMessage /></FormItem>
                            )}
                          />
                           <FormField
                            control={form.control}
                            name={`optionGroups.${index}.priceDeltas`}
                            render={({ field }) => (
                              <FormItem><FormLabel>價格變化 (用,分隔)</FormLabel><FormControl><Input placeholder="例如: 0,10,0 (可留空)" {...field} /></FormControl><FormDescription>請按上方選項順序填寫，留空表示不加價。</FormDescription><FormMessage /></FormItem>
                            )}
                          />
                      </div>
                    </Card>
                  ))}
                </div>
                <div className="flex gap-2">
                    {editingItem && (
                        <Button type="button" variant="secondary" onClick={resetFormAndDeselect} className="w-1/3">
                            取消編輯
                        </Button>
                    )}
                    <Button type="submit" className="w-full" disabled={isPending}>
                      {isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> 處理中...</> : (editingItem ? '儲存變更' : '確認新增')}
                    </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
      
      {/* Menu Item List */}
      <section>
        <Card>
          <CardHeader>
             <div className="flex items-center justify-between">
                <CardTitle>現有品項</CardTitle>
                {selectedItemIds.length > 0 && (
                     <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="sm" disabled={isPending}>
                                <Trash2 className="mr-2 h-4 w-4" />
                                刪除選取 ({selectedItemIds.length})
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader><AlertDialogTitle>確定要批量刪除嗎？</AlertDialogTitle><AlertDialogDescription>此動作將會永久刪除您選取的 {selectedItemIds.length} 個品項及其所有選項，確定嗎？</AlertDialogDescription></AlertDialogHeader>
                            <AlertDialogFooter><AlertDialogCancel>取消</AlertDialogCancel><AlertDialogAction variant="destructive" onClick={handleBatchDelete} disabled={isPending}>確定刪除</AlertDialogAction></AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
            </div>
             <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                 <Checkbox
                     id="select-all"
                     checked={menuItems.length > 0 && selectedItemIds.length === menuItems.length}
                     onCheckedChange={(checked) => toggleSelectAll(Boolean(checked))}
                     disabled={menuItems.length === 0}
                 />
                 <label htmlFor="select-all">全選</label>
             </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {menuItems.length > 0 ? (
              menuItems.map(item => (
                <Card key={item.id} className="p-3">
                    <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                           <Checkbox
                                id={`select-${item.id}`}
                                className="mt-1"
                                checked={selectedItemIds.includes(item.id)}
                                onCheckedChange={(checked) => toggleSelectItem(item.id, Boolean(checked))}
                            />
                           <div>
                              <p className="font-semibold">{item.name}</p>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                              <p className="text-sm text-muted-foreground">${item.price}</p>
                           </div>
                        </div>
                       <div className="flex items-center gap-1">
                         <AlertDialog>
                           <AlertDialogTrigger asChild>
                             <Button variant="ghost" size="icon" disabled={isPending} aria-label={`複製 ${item.name}`}>
                               <Copy className="h-4 w-4 text-green-600" />
                             </Button>
                           </AlertDialogTrigger>
                           <AlertDialogContent>
                             <AlertDialogHeader><AlertDialogTitle>確定要複製品項嗎？</AlertDialogTitle><AlertDialogDescription>此動作將會複製「{item.name}」及其所有選項。</AlertDialogDescription></AlertDialogHeader>
                             <AlertDialogFooter><AlertDialogCancel>取消</AlertDialogCancel><AlertDialogAction onClick={() => handleDuplicateItem(item.id, item.name)} disabled={isPending}>確定複製</AlertDialogAction></AlertDialogFooter>
                           </AlertDialogContent>
                         </AlertDialog>
                         <Button variant="ghost" size="icon" disabled={isPending} aria-label="編輯" onClick={() => handleEditClick(item)}>
                           <Edit className="h-4 w-4 text-blue-600" />
                         </Button>
                         <AlertDialog>
                             <AlertDialogTrigger asChild>
                                 <Button variant="ghost" size="icon" aria-label={`刪除 ${item.name}`} disabled={isPending}>
                                     <Trash2 className="h-4 w-4 text-destructive" />
                                 </Button>
                             </AlertDialogTrigger>
                             <AlertDialogContent>
                                 <AlertDialogHeader><AlertDialogTitle>確定要刪除品項嗎？</AlertDialogTitle><AlertDialogDescription>此動作將會從資料庫中永久刪除此品項及其所有選項，確定嗎？</AlertDialogDescription></AlertDialogHeader>
                                 <AlertDialogFooter><AlertDialogCancel>取消</AlertDialogCancel><AlertDialogAction variant="destructive" onClick={() => handleDeleteItem(item.id, item.name)} disabled={isPending}>確定刪除</AlertDialogAction></AlertDialogFooter>
                             </AlertDialogContent>
                         </AlertDialog>
                       </div>
                    </div>
                    {item.options && item.options.length > 0 && (
                        <div className="mt-2 pt-2 border-t ml-7">
                            {item.options.map((group, gIndex) => (
                                <div key={`${item.id}-${group.name}-${gIndex}`} className="text-xs">
                                    <span className="font-medium">{group.name}: </span>
                                    <span className="text-muted-foreground">
                                        {group.choices.map(c => `${c.name}${c.isDefault ? '(預設)' : ''}`).join(', ')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </Card>
              ))
            ) : (
              <p className="text-sm text-center text-muted-foreground py-4">這個店家還沒有任何菜單品項。</p>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
