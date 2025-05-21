import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { FileClock } from "lucide-react";
import Link from "next/link";

export default function EventsList() {
  return (
    <AuthLayout>
      <div className="p-10">
        {" "}
        <h1 className="font-semibold text-xl py-4">Mes évenements</h1>
        <div className="h-80 flex flex-col items-center justify-center gap-4">
          <FileClock className="w-20 h-20" />
          <p>Vous n&apos;avez pas encore d&apos;évenements ajoutés</p>
          <div>
            <Link
              href="/events-page"
              className="bg-black text-nowrap rounded-full px-4 py-2 mt-4 text-white w-full"
            >
              Particper à des évenements
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
