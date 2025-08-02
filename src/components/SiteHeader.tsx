
"use client";

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { User, UtensilsCrossed, LogOut, NotebookText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export function SiteHeader() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const username = searchParams.get('username');

    const handleLogout = () => {
        router.push('/');
    };
    
    const showAdminSection = pathname.startsWith('/admin');
    const showUserSection = !showAdminSection && username;
    const onMyOrdersPage = pathname.startsWith('/my-orders');

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
                <a href="/" className="flex items-center gap-3">
                    <UtensilsCrossed className="h-7 w-7 text-accent" />
                    <span className="font-headline text-2xl font-bold text-foreground">餓了嗎？</span>
                </a>
                
                <div className="flex items-center gap-2">
                    {showUserSection && (
                        <>
                            <User className="h-5 w-5 text-muted-foreground" />
                            <span className="text-sm font-medium text-foreground">{decodeURIComponent(username!)}</span>
                             
                             {onMyOrdersPage ? (
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/order?username=${username}`}>
                                        <ArrowLeft className="mr-2 h-4 w-4"/>
                                        返回點餐
                                    </Link>
                                </Button>
                             ) : (
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/my-orders?username=${username}`}>
                                        <NotebookText className="mr-2 h-4 w-4"/>
                                        我的訂單
                                    </Link>
                                </Button>
                             )}
                        </>
                    )}
                    {showAdminSection && (
                       <span className="text-sm font-medium text-foreground">管理者</span>
                    )}

                    {(showUserSection || showAdminSection) && (
                         <Button variant="ghost" size="icon" aria-label="登出" onClick={handleLogout}>
                            <LogOut className="h-5 w-5 text-muted-foreground" />
                        </Button>
                    )}
                </div>
            </div>
        </header>
    )
}
