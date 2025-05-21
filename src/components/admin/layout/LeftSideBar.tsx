"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex items-center flex-col gap-10 bg-white shadow-xl max-lg:hidden">
      <div className="w-20 h-20 overflow-hidden">
        <Image
          src="/battant.png"
          alt="logo"
          width={150}
          height={70}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-8 overflow-hidden custom-scrollbar">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium pb-2 border-b border-gray-200 ${
              pathname === link.url ? "text-blue-1" : "text-grey-1"
            }`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="flex gap-4 text-body-medium items-center">
        <p>Edit Profile</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
