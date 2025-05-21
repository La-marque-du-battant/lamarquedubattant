import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { ToasterProvider } from "@/lib/ToasterProvider";
import LeftSideBar from "@/components/admin/layout/LeftSideBar";
import TopBar from "@/components/admin/layout/TopBar";
import { AuthProvider } from "@/context/AuthContext";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LBM - Admin Dashboard",
  description: "Admin dashboard to manage LBM data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ToasterProvider />
          <div className="flex max-lg:flex-col bg-gray-50 text-grey-1">
            <LeftSideBar />
            <TopBar />
            <div className="flex-1 z-0">{children}</div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
