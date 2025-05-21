"use client";
import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { useOrder } from "@/context/OrderContext";
import { Eye, FileClock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CustomerOrdersList() {
  const router = useRouter();

  const { orders } = useOrder();

  return (
    <AuthLayout>
      <div className="p-10">
        {" "}
        <h1 className="font-semibold text-xl py-4">Historique des commandes</h1>
        {orders && orders.length > 0 ? (
          <div className="w-full overflow-x-auto">
            <table className="table-fixed w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Commandes</th>
                  <th>Nombres d&apos;articles</th>
                  <th>Statut</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td className="py-4 text-center">{item.order_no}</td>
                      <td className="text-center">{item.cart_items.length}</td>
                      <td className="text-center">
                        {item.status === 1 ? "En cours" : "Livrée"}
                      </td>
                      <td>
                        <div className="flex justify-center items-center">
                          <Link href={`/account/orders/${item.id}`}>
                            <Eye className="w-10 h-10" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="h-80 flex flex-col items-center justify-center gap-4">
            <FileClock className="w-20 h-20" />
            <p>Vous n&apos;avez pas encore passé de commande</p>
            <div>
              <Button
                onClick={() => {
                  router.push("/products");
                }}
                className="bg-black text-nowrap rounded-full px-4 py-2 mt-4 text-white w-full"
              >
                Acheter maintenant
              </Button>
            </div>
          </div>
        )}
      </div>
    </AuthLayout>
  );
}
