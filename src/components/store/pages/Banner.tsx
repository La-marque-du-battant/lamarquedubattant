"use client";
import Image from "next/image";
import Link from "next/link";
import CustomWhiteButton from "../CustomWhiteButton";
import { useState } from "react";

export default function Banner() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="h-screen bg-slate-500">
      <Image
        src="./banner.jpg"
        width={800}
        height={800}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute bg-black opacity-60 top-0 left-0 h-full w-full z-0"></div>
      <div className="absolute bottom-0 flex flex-col items-center w-full pb-10 text-white uppercase">
        <p>Jusqu&apos;à 50% de réduction</p>
        <h1 className="font-extrabold text-lg">Shine in black</h1>
        <div className="block sm:flex gap-6 mt-4">
          <div>
            <CustomWhiteButton title="Hommes" loading={loading} />
          </div>
          <div className="mt-2 sm:mt-0">
            <CustomWhiteButton title="Femmes" loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}
