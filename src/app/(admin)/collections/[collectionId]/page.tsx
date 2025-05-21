import React from "react";
import CollectionForm from "@/components/admin/collections/CollectionForm";
import { collectionsData } from "@/lib/data";

export function generateStaticParams() {
  return collectionsData.map((item) => ({
    collectionId: `${item.id}`,
  }));
}

export default function CollectionDetails({ params }: any) {
  return <CollectionForm />;
}
