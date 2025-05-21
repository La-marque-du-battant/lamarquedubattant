import ItemsCard from "@/components/store/products/ItemsCard";
import { ordersData } from "@/lib/data";
import React from "react";

export function generateStaticParams() {
  return ordersData.map((item) => ({ orderId: item.id }));
}

export default function CustomerOrderDetails({ params }: any) {
  const order = ordersData.find((o) => o.id === params.id);

  return (
    <div className="p-10">
      {order && (
        <div>
          <h1 className="font-semibold text-xl py-4">Commande :</h1>

          <p>Date de commande: </p>
          <p>Prix total: F cfa</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <ItemsCard />;
      </div>
    </div>
  );
}
