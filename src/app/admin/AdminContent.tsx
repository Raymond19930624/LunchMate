"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getVendors, type Vendor } from '@/ai/flows/vendor-flow';
import { type DailyOrder, getAllDailyOrders } from '@/ai/flows/order-flow';
import { AddNewVendorCard } from '@/components/admin/AddNewVendorCard';
import { VendorListCard } from '@/components/admin/VendorListCard';
import { PublishOrderCard } from '@/components/admin/PublishOrderCard';
import { PublishedOrdersCard } from '@/components/admin/PublishedOrdersCard';
import { useRouter } from 'next/navigation';

export function AdminContent() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [publishedOrders, setPublishedOrders] = useState<DailyOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

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
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <AddNewVendorCard onVendorAdded={handleDataChange} />
          <VendorListCard 
            initialVendors={vendors} 
            onVendorsChange={handleDataChange}
          />
        </div>
        <div className="space-y-6">
          <PublishOrderCard 
            vendors={vendors.filter(v => v.isActive)} 
            onOrderPublished={handleDataChange} 
          />
          <PublishedOrdersCard 
            initialOrders={publishedOrders} 
            onOrdersChange={handleDataChange}
          />
        </div>
      </div>
    </div>
  );
}
