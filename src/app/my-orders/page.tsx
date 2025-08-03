'use client';

import { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import ClientSiteHeader from '@/components/ClientSiteHeader';
import { Loader2 } from 'lucide-react';

// 動態導入 MyOrdersClient 組件，確保在客戶端加載
const MyOrdersClient = dynamic(
  () => import('./MyOrdersClient').then(mod => mod.MyOrdersClient),
  { 
    ssr: false,
    loading: () => (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="space-y-4">
            <div className="h-64 bg-muted rounded-lg"></div>
            <div className="h-64 bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    )
  }
);

export default function MyOrdersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get('username');

  useEffect(() => {
    if (!username) {
      router.push('/');
    }
  }, [username, router]);
  
  if (!username) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <ClientSiteHeader />
      <main className="container mx-auto max-w-2xl p-4 sm:p-6 lg:p-8">
        <h1 className="font-headline text-3xl font-bold mb-6">我的訂單</h1>
        <Suspense fallback={
          <div className="container mx-auto px-4 py-8">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-muted rounded w-1/3"></div>
              <div className="space-y-4">
                <div className="h-64 bg-muted rounded-lg"></div>
                <div className="h-64 bg-muted rounded-lg"></div>
              </div>
            </div>
          </div>
        }>
          <MyOrdersClient username={username} />
        </Suspense>
      </main>
    </div>
  );
}
