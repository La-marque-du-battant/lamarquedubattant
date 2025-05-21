"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<OrderColumnType>[] = [
  {
    accessorKey: "id",
    header: "Commande",
    cell: ({ row }) => {
      return (
        <Link href={`/orders/${row.original.id}`} className="hover:text-black">
          {row.original.id}
        </Link>
      );
    },
  },
  {
    accessorKey: "customer",
    header: "Client",
  },
  {
    accessorKey: "products",
    header: "Produits",
  },
  {
    accessorKey: "totalAmount",
    header: "Total ($)",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
