"use client";
import Link from "next/link";
import { Fragment, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <LuMenu
        className="w-10 h-10 cursor-pointer"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className="fixed z-[9999] top-0 left-0 w-full h-screen backdrop-blur-sm transition"
          onClick={() => setOpen(false)}
        >
          <div
            className={`absolute shadow-lg z-[9999] w-[300px] bg-white h-screen top-0 right-[-16px] px-6 text-black transform transition-transform duration-200 ease-in-out ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="h-20 w-full items-center flex justify-end">
              <LuX
                className="w-10 h-10 cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            <ul className="flex flex-col gap-8 text-[18px] font-semibold">
              <Link
                href="/products?category=Homme"
                onClick={() => setOpen(false)}
              >
                <li>Homme</li>
              </Link>
              <Link
                href="/products?category=Femme"
                onClick={() => setOpen(false)}
              >
                <li>Femme</li>
              </Link>
              <Link
                href="/products?category=Accessoires"
                onClick={() => setOpen(false)}
              >
                <li>Accessoires</li>
              </Link>
              <Link
                href="/products?category=tous"
                onClick={() => setOpen(false)}
              >
                <li>Collections</li>
              </Link>
              <Link href="/events-page">
                <li>Evenements</li>
              </Link>
            </ul>
            <div className="flex flex-col items-end gap-4 mt-6">
              <div>
                <Link href="/auth/login" onClick={() => setOpen(false)}>
                  Connexion
                </Link>
                <span> / </span>
                <Link href="/auth/register" onClick={() => setOpen(false)}>
                  Inscription
                </Link>
              </div>
              <Link href="/">FAQ</Link>
              <Link href="/">Nous contacter</Link>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
