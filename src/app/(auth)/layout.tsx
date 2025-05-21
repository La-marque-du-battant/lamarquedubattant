import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { ToasterProvider } from "@/lib/ToasterProvider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LBM - Admin Login Page",
  description: "Admin login page to manage LBM data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <div>{children}</div>
      </body>
    </html>
  );
}
