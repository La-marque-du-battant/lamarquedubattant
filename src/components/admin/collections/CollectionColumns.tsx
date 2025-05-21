"use client";

import Delete from "@/components/custom ui/Delete";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<CollectionType>[] = [
  {
    accessorKey: "title",
    header: "Titre",
    cell: ({ row }) => (
      <Link
        href={`/collections/${row.original.id}`}
        className="hover:text-black"
      >
        {row.original.name}
      </Link>
    ),
  },
  {
    accessorKey: "products",
    header: "Produits",
    cell: ({ row }) => <p>{row.original.products?.length}</p>,
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete item="collection" id={row.original.id} />,
  },
];
