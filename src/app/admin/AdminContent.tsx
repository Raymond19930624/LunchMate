'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getVendors } from '@/ai/flows/vendor-flow';
import { getAllDailyOrders } from '@/ai/flows/order-flow';
import { AddNewVendorCard } from '@/components/admin/AddNewVendorCard';
import { VendorListCard } from '@/components/admin/VendorListCard';
import { PublishOrderCard } from '@/components/admin/PublishOrderCard';
import { PublishedOrdersCard } from '@/components/admin/PublishedOrdersCard';
import { useRouter } from 'next/navigation';

// 動態導入組件，確保在客戶端加載
import type { Vendor } from '@/ai/flows/vendor-flow';
import type { DailyOrder } from '@/ai/flows/order-flow';

// 定義組件 props 類型
interface VendorListCardProps {
  initialVendors: Vendor[];
  onVendorsChange: () => void;
}

interface PublishedOrdersCardProps {
  initialOrders: DailyOrder[];
  onOrdersChange: () => void;
}

interface PublishOrderCardProps {
  vendors: Vendor[];
  onOrderPublished: () => void;
}

// 使用 dynamic 時指定 props 類型
const DynamicVendorListCard = dynamic<VendorListCardProps>(
  () => import('@/components/admin/VendorListCard').then(mod => ({
    default: (props: VendorListCardProps) => <mod.VendorListCard {...props} />
  })),
  { 
    ssr: false, 
    loading: () => <div className="h-96 bg-muted rounded-lg animate-pulse"></div> 
  }
);

const DynamicPublishedOrdersCard = dynamic<PublishedOrdersCardProps>(
  () => import('@/components/admin/PublishedOrdersCard').then(mod => ({
    default: (props: PublishedOrdersCardProps) => <mod.PublishedOrdersCard {...props} />
  })),
  { 
    ssr: false, 
    loading: () => <div className="h-96 bg-muted rounded-lg animate-pulse"></div> 
  }
);

const DynamicPublishOrderCard = dynamic<PublishOrderCardProps>(
  () => import('@/components/admin/PublishOrderCard').then(mod => ({
    default: (props: PublishOrderCardProps) => <mod.PublishOrderCard {...props} />
  })),
  { 
    ssr: false, 
    loading: () => <div className="h-64 bg-muted rounded-lg animate-pulse"></div> 
  }
);

export function AdminContent() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [publishedOrders, setPublishedOrders] = useState<DailyOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  // Search parameters are now handled by SearchParamsProvider

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

  // 確保在客戶端渲染
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <AddNewVendorCard onVendorAdded={handleDataChange} />
          <DynamicVendorListCard 
            initialVendors={vendors} 
            onVendorsChange={handleDataChange}
          />
        </div>
        <div className="space-y-6">
          <DynamicPublishOrderCard 
            vendors={vendors.filter(v => v.isActive)} 
            onOrderPublished={handleDataChange} 
          />
          <DynamicPublishedOrdersCard 
            initialOrders={publishedOrders} 
            onOrdersChange={handleDataChange}
          />
        </div>
      </div>
    </div>
  );
}
