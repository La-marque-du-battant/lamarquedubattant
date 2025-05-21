import ProductDetail from "@/components/store/products/ProductDetail";
import { productsData } from "@/lib/data";
import React from "react";

export function generateStaticParams() {
  return productsData.map((item) => ({ productId: item.id }));
}

export default function Product({ params }: any) {
  return <ProductDetail params={params} />;
}
