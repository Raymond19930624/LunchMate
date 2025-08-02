
import { SiteHeader } from "@/components/SiteHeader";
import { OrderClient } from "@/components/OrderClient";
import { getAvailableOrders, getExistingOrderForEdit, type AvailableOrder } from "@/ai/flows/order-flow";
import { getMenusByVendorId } from "@/ai/flows/menu-flow";
import type { MenuItem } from "@/ai/flows/menu-flow";
import type { OrderItem } from "@/components/OrderSummary";

type Menu = {
  [key: string]: MenuItem[];
};

type OrderPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function fetchAllMenus(availableOrders: AvailableOrder[]): Promise<Menu> {
  const menuPromises = availableOrders.map(async (order) => {
    const menuItems = await getMenusByVendorId(order.vendor.vendorId);
    return { vendorId: order.vendor.vendorId, items: menuItems };
  });

  const results = await Promise.all(menuPromises);
  
  const menus: Menu = {};
  for (const result of results) {
    if (result) {
      menus[result.vendorId] = result.items;
    }
  }
  
  return menus;
}

export default async function OrderPage({ searchParams }: OrderPageProps) {
  const username = typeof searchParams.username === 'string' ? searchParams.username : undefined;
  const editingOrderId = typeof searchParams.edit === 'string' ? searchParams.edit : undefined;

  let availableOrders = await getAvailableOrders();

  // If in editing mode, filter availableOrders to only include the one being edited.
  if (editingOrderId) {
    availableOrders = availableOrders.filter(order => order.id === editingOrderId);
  }

  const menus = await fetchAllMenus(availableOrders);

  let initialOrderItems: OrderItem[] = [];
  if (editingOrderId && username) {
      initialOrderItems = await getExistingOrderForEdit(decodeURIComponent(username), editingOrderId);
  }
  
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteHeader />
      <main>
        <OrderClient 
          availableOrders={availableOrders} 
          menus={menus} 
          initialOrderItems={initialOrderItems}
        />
      </main>
    </div>
  );
}
