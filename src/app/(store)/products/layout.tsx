"use client";
import Link from "next/link";
import "../../globals.css";
import { usePathname } from "next/navigation";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <section>
      <nav className="mt-16">
        <ul className="flex gap-4 px-4 border-b border-gray-200">
          <Link
            href="/products?category=tous"
            className={`px-2 py-4 ${
              pathname === "/products?category=tous"
                ? "border-b-2 border-black text-red-500"
                : ""
            }`}
          >
            <li>Tous</li>
          </Link>{" "}
          {/* <Link href="/products" className="px-2 py-4">
            <li>T-shirts</li>
          </Link>
          <Link href="/products" className="px-2 py-4">
            <li>Pull</li>
          </Link>
          <Link href="/products" className="px-2 py-4">
            <li>Culottes</li>
          </Link> */}
        </ul>
      </nav>
      <div>{children}</div>
    </section>
  );
}
