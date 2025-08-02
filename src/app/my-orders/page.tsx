"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

const MyOrdersClient = dynamic(() => import('./MyOrdersClient'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-64">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="ml-4 text-muted-foreground">正在載入訂單頁面...</p>
    </div>
  )
});

export default function MyOrdersPage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteHeader />
      <main className="container mx-auto max-w-2xl p-4 sm:p-6 lg:p-8">
        <h1 className="font-headline text-3xl font-bold mb-6">我的訂單</h1>
        <MyOrdersClient />
      </main>
    </div>
  );
}
