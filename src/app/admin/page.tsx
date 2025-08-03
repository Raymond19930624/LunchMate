
"use client";

import { useState, useEffect } from 'react';
import { getVendors, type Vendor } from '@/ai/flows/vendor-flow';
import { type DailyOrder, getAllDailyOrders } from '@/ai/flows/order-flow';
import { AddNewVendorCard } from '@/components/admin/AddNewVendorCard';
import { VendorListCard } from '@/components/admin/VendorListCard';
import { PublishOrderCard } from '@/components/admin/PublishOrderCard';
import { PublishedOrdersCard } from '@/components/admin/PublishedOrdersCard';
import { useRouter } from 'next/navigation';
import { SiteHeader } from '@/components/SiteHeader';

// This is now a Client Component again to handle state and actions
export default function AdminPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [publishedOrders, setPublishedOrders] = useState<DailyOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [fetchedVendors, fetchedOrders] = await Promise.all([
          getVendors(),
          getAllDailyOrders()
      ]);
      setVendors(fetchedVendors);
      setPublishedOrders(fetchedOrders);
    } catch (error) {
      console.error("讀取店家或訂單資料失敗:", error);
      // Optionally, show a toast message to the user
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDataChange = () => {
    fetchData();
    router.refresh();
  }


  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteHeader />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="font-headline text-3xl font-bold mb-6">管理介面</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <PublishOrderCard vendors={vendors.filter(v => v.isActive)} onOrderPublished={handleDataChange} />
            <PublishedOrdersCard initialOrders={publishedOrders} onOrdersChange={handleDataChange} />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <AddNewVendorCard onVendorAdded={handleDataChange} />
            <VendorListCard initialVendors={vendors} onVendorsChange={handleDataChange} />
          </div>
        </div>
      </main>
    </div>
  );
}
