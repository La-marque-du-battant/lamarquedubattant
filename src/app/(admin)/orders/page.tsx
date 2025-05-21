"use client";

import { columns } from "@/components/admin/orders/OrderColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import Loader from "@/components/custom ui/Loader";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { fetchClient } from "../../../../utils/fetchClient";
import toast from "react-hot-toast";

export default function Orders() {
  const [loading, setLoading] = useState(true);

  const [orders, setOrders] = useState<OrderColumnType[]>([]);

  const getOrders = async () => {
    try {
      setLoading(true);
      const res = await fetchClient("/orders");
      if (res) {
        setOrders(res.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  });

  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-5">
      <p className="text-heading2-bold">Commandes</p>
      <Separator className="bg-black my-5" />
      <DataTable columns={columns} data={orders} searchKey="_id" />
    </div>
  );
}

export const dynamic = "force-dynamic";
