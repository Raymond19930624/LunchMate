
"use client";

import { useTransition } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Edit, Copy } from 'lucide-react';
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
import { deleteVendor, duplicateVendor, type Vendor } from '@/ai/flows/vendor-flow';
import { EditVendorDialog } from './EditVendorDialog';

interface VendorListCardProps {
    initialVendors: Vendor[];
    onVendorsChange: () => void;
}

export function VendorListCard({ initialVendors, onVendorsChange }: VendorListCardProps) {
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();

    const activeVendors = initialVendors.filter(v => v.isActive);

    const handleDeleteVendor = (vendorId: string, vendorName: string) => {
      startTransition(async () => {
        try {
          await deleteVendor(vendorId);
          toast({
            title: "店家已刪除",
            description: `${vendorName} 及其所有菜單都已從資料庫移除。`,
          });
          onVendorsChange();
        } catch (error) {
          console.error("刪除店家失敗:", error);
          toast({
            variant: "destructive",
            title: "刪除店家失敗",
            description: error instanceof Error ? error.message : "無法刪除店家資料。",
          });
        }
      });
    };

    const handleDuplicateVendor = (vendorId: string, vendorName: string) => {
      startTransition(async () => {
        try {
          await duplicateVendor(vendorId);
          toast({
            title: "店家已複製",
            description: `${vendorName} 已成功複製。`,
          });
          onVendorsChange();
        } catch (error) {
          console.error("複製店家失敗:", error);
          toast({
            variant: "destructive",
            title: "複製店家失敗",
            description: error instanceof Error ? error.message : "無法複製店家。",
          });
        }
      });
    };


    return (
        <section>
            <Card>
                <CardHeader>
                    <CardTitle>店家列表</CardTitle>
                    <CardDescription>管理現有的店家及菜單。</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {activeVendors.length > 0 ? (
                        activeVendors.map(vendor => (
                            <Card key={vendor.vendorId} className="p-4 flex justify-between items-center">
                                <div>
                                    <p className="font-semibold">{vendor.vendorName}</p>
                                    <p className="text-sm text-muted-foreground">{vendor.description}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="ghost" size="icon" aria-label={`複製店家 ${vendor.vendorName}`} disabled={isPending}>
                                                <Copy className="h-4 w-4 text-green-600" />
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>確定要複製店家嗎？</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    此動作將會完整複製「{vendor.vendorName}」的店家資料及其所有的菜單和選項。
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>取消</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDuplicateVendor(vendor.vendorId, vendor.vendorName)} disabled={isPending}>確定複製</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>

                                    <EditVendorDialog vendor={vendor} onVendorUpdated={onVendorsChange} />
                                    
                                    <Button asChild variant="ghost" size="icon" aria-label={`編輯菜單 ${vendor.vendorName}`}>
                                      <Link href={`/admin/menu/${vendor.vendorId}?name=${encodeURIComponent(vendor.vendorName)}`}>
                                        <Edit className="h-4 w-4 text-blue-600" />
                                      </Link>
                                    </Button>
                                    
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="ghost" size="icon" aria-label={`刪除店家 ${vendor.vendorName}`} disabled={isPending}>
                                                <Trash2 className="h-4 w-4 text-destructive" />
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>確定要永久刪除店家嗎？</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    此動作將會永久刪除「{vendor.vendorName}」及其所有的菜單和選項資料，這個操作無法復原。
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>取消</AlertDialogCancel>
                                                <AlertDialogAction variant="destructive" onClick={() => handleDeleteVendor(vendor.vendorId, vendor.vendorName)} disabled={isPending}>確定刪除</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </Card>
                        ))
                    ) : (
                      <p className="text-sm text-center text-muted-foreground py-4">您的美食地圖還是空的，快來插上第一支旗幟吧！</p>
                    )}
                </CardContent>
            </Card>
        </section>
    );
}
