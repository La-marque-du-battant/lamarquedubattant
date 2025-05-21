"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Loader from "@/components/custom ui/Loader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/custom ui/DataTable";
import { columns } from "@/components/admin/articles/ProductColumns";
import { fetchClient } from "../../../../utils/fetchClient";
import toast from "react-hot-toast";

export default function Articles() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetchClient("/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Erreur lors du chargement des produits:", error);
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Produits</p>
        <Button
          className="bg-black text-white"
          onClick={() => router.push("/articles/new")}
        >
          <Plus className="h-4 w-4 mr-2" />
          Ajouter produit
        </Button>
      </div>
      <Separator className="bg-black my-4" />
      <DataTable columns={columns} data={products} searchKey="title" />
    </div>
  );
}
