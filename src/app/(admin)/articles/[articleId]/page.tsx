import ProductForm from "@/components/admin/articles/ProductForm";
import React from "react";
import { productsData } from "@/lib/data";

export function generateStaticParams() {
  return productsData.map((item) => ({
    articleId: `${item.id}`,
  }));
}

export default function ArticleDetails({ params }: any) {
  return <ProductForm />;
}
