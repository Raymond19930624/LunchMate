'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// 動態導入 SiteHeader 組件，確保在客戶端加載
const DynamicSiteHeader = dynamic(
  () => import('./SiteHeader').then(mod => mod.SiteHeader),
  { 
    ssr: false,
    loading: () => (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <div className="h-6 w-24 bg-muted rounded animate-pulse"></div>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-8 h-8 rounded-full bg-muted animate-pulse"></div>
          </div>
        </div>
      </header>
    )
  }
);

export default function ClientSiteHeader() {
  return (
    <Suspense fallback={
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <div className="h-6 w-24 bg-muted rounded animate-pulse"></div>
          </div>
        </div>
      </header>
    }>
      <DynamicSiteHeader />
    </Suspense>
  );
}
