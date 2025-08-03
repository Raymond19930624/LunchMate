
"use client";

import { useState, useTransition } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle, Loader2 } from 'lucide-react';
import { addVendor } from '@/ai/flows/vendor-flow';

interface AddNewVendorCardProps {
    onVendorAdded: () => void;
}

export function AddNewVendorCard({ onVendorAdded }: AddNewVendorCardProps) {
    const { toast } = useToast();
    const [newVendorName, setNewVendorName] = useState('');
    const [newVendorDescription, setNewVendorDescription] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleAddVendor = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newVendorName.trim()) {
            toast({
                variant: "destructive",
                title: "請輸入店家名稱",
            });
            return;
        }

        startTransition(async () => {
            try {
                await addVendor({ name: newVendorName, description: newVendorDescription });
                toast({
                    title: "店家已成功新增",
                    description: `${newVendorName} 已新增到您的店家列表。`,
                });
                setNewVendorName('');
                setNewVendorDescription('');
                onVendorAdded(); // Notify parent to re-fetch
            } catch (error) {
                console.error("新增店家失敗:", error);
                toast({
                    variant: "destructive",
                    title: "新增店家失敗",
                    description: error instanceof Error ? error.message : "無法將店家資料寫入 Google Sheet。",
                });
            }
        });
    };

    return (
        <section>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <PlusCircle className="h-6 w-6" />
                        <span>新增店家</span>
                    </CardTitle>
                    <CardDescription>在這裡建立新的便當店家。</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleAddVendor} className="space-y-4">
                        <Input
                            placeholder="店家名稱"
                            value={newVendorName}
                            onChange={(e) => setNewVendorName(e.target.value)}
                            disabled={isPending}
                        />
                        <Input
                            placeholder="店家描述 (選填)"
                            value={newVendorDescription}
                            onChange={(e) => setNewVendorDescription(e.target.value)}
                            disabled={isPending}
                        />
                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> 新增中...</> : '新增店家'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
}
