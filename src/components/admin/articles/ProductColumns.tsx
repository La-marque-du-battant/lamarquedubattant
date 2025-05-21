"use client";

import Delete from "@/components/custom ui/Delete";
import { ColumnDef } from "@tanstack/react-table";

import Link from "next/link";

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link href={`/products/${row.original.id}`} className="hover:text-black">
        {row.original.name}
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Categorie",
  },
  {
    accessorKey: "collections",
    header: "Collections",
    cell: ({ row }) =>
      row.original.collections.map((collection) => collection.name).join(", "),
  },
  {
    accessorKey: "price",
    header: "Prix ($)",
  },
  {
    accessorKey: "expense",
    header: "Frais ($)",
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete item="product" id={row.original.id} />,
  },
];
