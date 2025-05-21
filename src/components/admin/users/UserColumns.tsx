import Delete from "@/components/custom ui/Delete";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<UserType>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Rôle",
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete item="user" id={row.original.id} />,
  },
];
