"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { fetchClient } from "../../utils/fetchClient";
import toast from "react-hot-toast";
import { productsData } from "@/lib/data";

type ProductContextType = {
  products: ProductType[];
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductType[]>(productsData);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useCart doit être utilisé dans un CartProvider");
  }
  return context;
};
