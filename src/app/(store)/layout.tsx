import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import "../globals.css";
import Header from "@/components/store/layouts/Header";
import Footer from "@/components/store/layouts/Footer";
import { ToasterProvider } from "@/lib/ToasterProvider";
import { CartProvider } from "@/context/CartContext";
import { ProductProvider } from "@/context/ProductContext";

const fontSans = FontSans({ subsets: ["latin"] });

export const dynamicParams = true;
export const metadata: Metadata = {
  title: "La marque du battant",
  description: "La marque du battant est une boutique en ligne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-full ${fontSans.className}`}>
        <ProductProvider>
          <CartProvider>
            <ToasterProvider />
            <Header />
            <div className="min-h-[600px]">{children}</div>
            <Footer />
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
