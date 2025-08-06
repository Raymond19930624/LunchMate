
"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import { SiteHeader } from "@/components/SiteHeader";
import { getMenusByVendorId } from '@/ai/flows/menu-flow';
import { MenuEditor } from "@/components/admin/MenuEditor";
import Link from "next/link";
import { ArrowLeft, Loader2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { MenuItem } from '@/ai/flows/menu-flow';

// This is now a Client Component to fetch data on the client-side.
export default function MenuAdminPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  
  const vendorId = (Array.isArray(params.vendorId) ? params.vendorId[0] : params.vendorId) || '';
  const vendorName = searchParams.get('name') ? decodeURIComponent(searchParams.get('name') as string) : '店家';

  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const fetchedMenu = await getMenusByVendorId(vendorId);
        setMenu(fetchedMenu);
      } catch (e) {
        console.error("Failed to fetch menu:", e);
        setError("無法載入菜單資料，請稍後再試。");
      } finally {
        setIsLoading(false);
      }
    };

    if (vendorId) {
      fetchMenu();
    }
  }, [vendorId]);

  const handleMenuUpdate = async () => {
      setIsLoading(true);
      try {
        const fetchedMenu = await getMenusByVendorId(vendorId);
        setMenu(fetchedMenu);
      } catch (e) {
        console.error("Failed to re-fetch menu:", e);
        setError("無法重新整理菜單資料。");
      } finally {
        setIsLoading(false);
      }
  };


  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-6 flex justify-between items-center">
          <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            返回管理介面
          </Link>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleMenuUpdate} 
            disabled={isLoading}
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            重新整理
          </Button>
        </div>
        <h1 className="font-headline text-3xl font-bold mb-2">編輯菜單：{vendorName}</h1>
        <p className="text-muted-foreground mb-8">管理 {vendorName} 的菜單品項。</p>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4 text-muted-foreground">正在載入菜單...</p>
          </div>
        ) : error ? (
          <div className="text-center text-destructive bg-destructive/10 p-4 rounded-md">
            <p>{error}</p>
          </div>
        ) : (
          <MenuEditor 
            vendorId={vendorId} 
            vendorName={vendorName}
            initialMenu={menu}
            onMenuUpdate={handleMenuUpdate}
          />
        )}
      </main>
    </div>
  );
}
