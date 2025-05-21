"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/custom ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Loader from "@/components/custom ui/Loader";
import { columns } from "@/components/admin/collections/CollectionColumns";
import { fetchClient } from "../../../../utils/fetchClient";
import toast from "react-hot-toast";

export default function Collections() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [collections, setCollections] = useState<CollectionType[]>([]);

  const getCollections = async () => {
    try {
      setLoading(true);
      const res = await fetchClient("/collections");
      if (res) {
        setCollections(res.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCollections();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Collections</p>
        <Button
          className="bg-black text-white"
          onClick={() => router.push("/collections/new")}
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Collection
        </Button>
      </div>
      <Separator className="bg-black my-4" />
      <DataTable columns={columns} data={collections} searchKey="title" />
    </div>
  );
}
