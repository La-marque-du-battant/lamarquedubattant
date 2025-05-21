import Image from "next/image";
import AdminLoginForm from "@/components/auth/AdminLoginForm";
export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="lg:w-[35rem] w-full flex flex-col items-center justify-center gap-8">
        <div className="w-20 h-20">
          <Image
            src="/battant.png"
            alt=""
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div className="text-center text-[14px]">
          <h1 className="text-heading2-bold mb-2 font-bold">Bienvenue</h1>
          <p>Entrez vos informations pour vous connecter</p>
        </div>
        <AdminLoginForm />
      </div>
      <div className="flex-1 bg-gray-50 md:flex hidden justify-center items-center">
        <div className="h-[20rem] w-[30rem] flex justify-center items-center">
          <Image
            src="/login.png"
            alt=""
            width={1000}
            height={1000}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
