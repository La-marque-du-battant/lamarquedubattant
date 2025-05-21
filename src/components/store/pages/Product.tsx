"use client";
import Sliders from "@/components/store/products/Sliders";
import { Fragment, useState } from "react";
import CartModal from "../cart/CartModal";

export default function ProductStoreLists() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<ProductType | any>({});
  return (
    <Fragment>
      <div className="h-screen px-6 py-10 overflow-x-hidden">
        <small className="text-gray-400">Achetez les catégories</small>
        <div className=" block sm:flex gap-2 items-center my-[20px]">
          <h1 className="font-bold text-xl">Articles en vedette</h1>
          <div className="h-2 w-2 bg-gray-400 rounded-full my-4 sm:my-0"></div>
          {/* <select name="" id="">
            <option value="tous">Tous</option>
          </select> */}
        </div>
        <Sliders setOpen={setOpen} setProduct={setProduct} />
      </div>
      <CartModal open={open} setOpen={setOpen} product={product} />
    </Fragment>
  );
}
