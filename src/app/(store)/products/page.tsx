import Products from "@/components/store/products/ProductsList";
import { Suspense } from "react";

export default function ProductsPage() {
  return (
    <Suspense>
      <Products />
    </Suspense>
  );
}
