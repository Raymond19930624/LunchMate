
"use client";

import { useState, useEffect } from 'react';
import { SiteHeader } from "@/components/SiteHeader";
import { getMenusByVendorId } from '@/ai/flows/menu-flow';
import { MenuEditor } from "@/components/admin/MenuEditor";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import type { MenuItem } from '@/ai/flows/menu-flow';

type MenuAdminPageProps = {
    params: { vendorId: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

// This is now a Client Component to fetch data on the client-side.
export default function MenuAdminPage({ params, searchParams }: MenuAdminPageProps) {
  const { vendorId } = params;
  const vendorName = searchParams.name ? decodeURIComponent(searchParams.name as string) : '店家';

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
      <SiteHeader />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
            <Link href="/admin" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                返回店家列表
            </Link>
        </div>
        <h1 className="font-headline text-3xl font-bold mb-2">編輯菜單：{vendorName}</h1>
        <p className="text-muted-foreground mb-6">管理 {vendorName} 的菜單品項。</p>
        
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
