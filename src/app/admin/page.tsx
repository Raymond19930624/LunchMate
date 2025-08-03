"use client";

import { Suspense } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { AdminContent } from './AdminContent';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteHeader />
      <Suspense fallback={
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-64 bg-muted rounded-lg"></div>
                <div className="h-96 bg-muted rounded-lg"></div>
              </div>
              <div className="space-y-6">
                <div className="h-64 bg-muted rounded-lg"></div>
                <div className="h-96 bg-muted rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      }>
        <AdminContent />
      </Suspense>
    </div>
  );
}
