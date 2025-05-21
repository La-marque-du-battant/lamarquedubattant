"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "@/components/admin/users/UserColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import { useEffect, useState } from "react";
import { getUsers } from "@/lib/api";
import toast from "react-hot-toast";
import Loader from "@/components/custom ui/Loader";

export default function Users() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserType[]>([]);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      if (res?.data) {
        setUsers(res.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Utilisateurs</p>
        <Button
          className="bg-black text-white"
          onClick={() => router.push("/users/new")}
        >
          <Plus className="h-4 w-4 mr-2" />
          Ajouter Utilisateur
        </Button>
      </div>
      <Separator className="bg-black my-4" />
      <DataTable columns={columns} data={users} searchKey="role" />
    </div>
  );
}
