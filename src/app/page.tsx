"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { UtensilsCrossed, KeyRound, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getAdminPassword, changeAdminPassword } from '@/ai/flows/config-flow';

export default function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isAdminDialogOpen, setIsAdminDialogOpen] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  
  const [prefetchedPassword, setPrefetchedPassword] = useState<string | null>(null);
  
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    // 在背景預先載入管理者密碼
    const prefetchAdminPassword = async () => {
      try {
        const adminPass = await getAdminPassword();
        setPrefetchedPassword(adminPass);
      } catch (error) {
        console.error("預先載入管理者密碼失敗:", error);
        // 這裡可以選擇不顯示錯誤訊息，避免干擾使用者
      }
    };
    prefetchAdminPassword();
  }, []);
  
  const handleUserLogin = () => {
    if (!name.trim()) {
      toast({
        variant: "destructive",
        title: "輸入錯誤",
        description: "請輸入您的暱稱以開始訂餐。",
      });
      return;
    }
    router.push(`/order?username=${encodeURIComponent(name)}`);
  };

  const handleAdminLogin = async () => {
    if (!password) {
        toast({
            variant: "destructive",
            title: "輸入錯誤",
            description: "請輸入管理者密碼。",
        });
        return;
    }
    setIsLoading(true);
    try {
        // 優先使用預先載入的密碼，如果還沒載入好，則即時抓取
        const correctPassword = prefetchedPassword ?? await getAdminPassword();
        
        if (password === correctPassword) {
            toast({ title: "管理者登入成功" });
            setIsAdminDialogOpen(false);
            router.push('/admin');
        } else {
            toast({
                variant: "destructive",
                title: "密碼錯誤",
                description: "請檢查您的管理者密碼。",
            });
            // 如果比對失敗，重新預載密碼以防萬一
            getAdminPassword().then(setPrefetchedPassword);
        }
    } catch (error) {
        toast({
            variant: "destructive",
            title: "登入失敗",
            description: error instanceof Error ? error.message : "無法驗證管理者密碼",
        });
    } finally {
        setIsLoading(false);
        setPassword('');
    }
  };

  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      toast({ variant: "destructive", title: "輸入錯誤", description: "所有欄位都必須填寫。" });
      return;
    }
    if (newPassword !== confirmNewPassword) {
      toast({ variant: "destructive", title: "輸入錯誤", description: "新密碼與確認密碼不相符。" });
      return;
    }
    setIsLoading(true);
    try {
      await changeAdminPassword({ oldPassword, newPassword });
      toast({ title: "密碼已更新", description: "您的管理者密碼已成功變更。" });
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
      setIsChangingPassword(false);
      // 密碼更新後，重新預載新密碼
      getAdminPassword().then(setPrefetchedPassword);
    } catch (error) {
       toast({
            variant: "destructive",
            title: "密碼更新失敗",
            description: error instanceof Error ? error.message : "發生未知錯誤。",
        });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleUserLogin();
    }
  };
  
  const handleAdminKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !isChangingPassword) {
      handleAdminLogin();
    }
  };
  
  const handlePasswordChangeKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
     if (event.key === 'Enter') {
      handleChangePassword();
    }
  }

  const resetDialogState = () => {
    setPassword('');
    setOldPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setIsLoading(false);
    setIsChangingPassword(false);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm">
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <UtensilsCrossed className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-3xl">餓了嗎？</CardTitle>
            <CardDescription>日常飢餓管理中心</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              id="name"
              type="text"
              placeholder="請輸入您的暱稱"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleUserKeyPress}
              className="h-12 text-center text-lg"
            />
          </CardContent>
          <CardFooter>
            <Button onClick={handleUserLogin} className="w-full text-base py-6 bg-accent text-accent-foreground hover:bg-accent/90">
              開始點餐
            </Button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center">
            <Dialog open={isAdminDialogOpen} onOpenChange={(open) => { setIsAdminDialogOpen(open); if (!open) resetDialogState(); }}>
                <DialogTrigger asChild>
                    <Button variant="link" className="text-muted-foreground text-xs">管理者登入</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <KeyRound className="h-5 w-5" />
                            {isChangingPassword ? '修改管理者密碼' : '管理者登入'}
                        </DialogTitle>
                        <DialogDescription>
                            {isChangingPassword ? '請輸入您的舊密碼與新密碼。' : '請輸入管理者密碼以進入後台管理介面。'}
                        </DialogDescription>
                    </DialogHeader>
                    
                    {isChangingPassword ? (
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="oldPassword" className="text-right">舊密碼</Label>
                          <Input id="oldPassword" type="password" className="col-span-3" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} onKeyPress={handlePasswordChangeKeyPress} disabled={isLoading} />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="newPassword" className="text-right">新密碼</Label>
                          <Input id="newPassword" type="password" className="col-span-3" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} onKeyPress={handlePasswordChangeKeyPress} disabled={isLoading} />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="confirmNewPassword" className="text-right">確認新密碼</Label>
                          <Input id="confirmNewPassword" type="password" className="col-span-3" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} onKeyPress={handlePasswordChangeKeyPress} disabled={isLoading} />
                        </div>
                      </div>
                    ) : (
                      <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="password" className="text-right">
                                  密碼
                              </Label>
                              <Input
                                  id="password"
                                  type="password"
                                  className="col-span-3"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  onKeyPress={handleAdminKeyPress}
                                  disabled={isLoading}
                              />
                          </div>
                      </div>
                    )}

                    <DialogFooter>
                      {isChangingPassword ? (
                        <>
                          <Button variant="outline" onClick={() => setIsChangingPassword(false)} disabled={isLoading}>返回登入</Button>
                          <Button type="button" onClick={handleChangePassword} disabled={isLoading}>
                              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                              確認修改
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button variant="ghost" onClick={() => setIsChangingPassword(true)} disabled={isLoading}>修改密碼</Button>
                          <Button type="button" onClick={handleAdminLogin} disabled={isLoading}>
                              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                              登入
                          </Button>
                        </>
                      )}
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
      </div>
    </div>
  );
}
