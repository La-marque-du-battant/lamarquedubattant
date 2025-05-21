"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CollectionCard({ collection }: any) {
  const router = useRouter();
  return (
    <div className="w-full h-[28rem] bg-gradient-to-t from-gray-400 to-gray-50 flex flex-col justify-center items-center relative">
      <div className="w-full h-full overflow-hidden">
        <Image
          src={collection.image ? collection.image : "defaultImage.png"}
          alt="Collection Image"
          width={800}
          height={800}
          className="object-cover w-full h-full transition duration-700 ease-in-out transform hover:scale-110 cursor-pointer"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-6">
        <h1 className="uppercase text-white text-center text-lg font-extrabold my-2">
          {collection.name}
        </h1>
        <Button
          onClick={() => router.push("/products?category=tous")}
          className="bg-white text-nowrap rounded-full px-1 py-2 text-black w-full hover:text-white"
        >
          Achetez maintenant
        </Button>
      </div>
    </div>
  );
}
