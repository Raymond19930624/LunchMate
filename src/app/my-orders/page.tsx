'use client';

import { Suspense, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import ClientSiteHeader from '@/components/ClientSiteHeader';
import { Loader2 } from 'lucide-react';

// 創建一個客戶端組件來處理 useSearchParams
function MyOrdersContent() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // 確保在客戶端運行
    setIsClient(true);
    const searchParams = new URLSearchParams(window.location.search);
    const usernameParam = searchParams.get('username');
    
    if (!usernameParam) {
      router.push('/');
    } else {
      setUsername(usernameParam);
    }
  }, [router]);

  if (!isClient || !username) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

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

  return <MyOrdersClient username={username} />;
}

export default function MyOrdersPage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <ClientSiteHeader />
      <main className="container mx-auto max-w-2xl p-4 sm:p-6 lg:p-8">
        <h1 className="font-headline text-3xl font-bold mb-6">我的訂單</h1>
        <Suspense 
          fallback={
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          }
        >
          <MyOrdersContent />
        </Suspense>
      </main>
    </div>
  );
}
