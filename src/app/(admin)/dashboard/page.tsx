import AuthLayout from "@/components/auth/AuthLayout";
import SalesChart from "@/components/custom ui/SalesChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { CircleDollarSign, ShoppingBag, UserRound } from "lucide-react";

export default async function Dashboard() {
  return (
    <AuthLayout>
      <div className="px-8 py-10">
        <p className="text-heading2-bold">Dashboard</p>
        <Separator className="bg-black my-5" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Total Revenue</CardTitle>
              <CircleDollarSign className="max-sm:hidden" />
            </CardHeader>
            <CardContent>
              <p className="text-body-bold">$ {1000}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Total Orders</CardTitle>
              <ShoppingBag className="max-sm:hidden" />
            </CardHeader>
            <CardContent>
              <p className="text-body-bold">{100}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Total Customer</CardTitle>
              <UserRound className="max-sm:hidden" />
            </CardHeader>
            <CardContent>
              <p className="text-body-bold">{20}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-10">
          <CardHeader>
            <CardTitle>Sales Chart ($)</CardTitle>
          </CardHeader>
          <CardContent>
            <SalesChart data={[10, 50, 60, 30]} />
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
}
