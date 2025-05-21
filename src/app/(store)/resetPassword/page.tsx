"use client";
import { useParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import toast from "react-hot-toast";
import CustomBlackButton from "@/components/store/CustomBlackButton";
import { resetPassword } from "@/lib/api";
import { setToken, setUserData } from "@/lib/auth";

const formSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
  password_confirmation: z
    .string()
    .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
});

export default function ResetPassword() {
  const { hash } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [toggleInput, setToggleInput] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const res = await resetPassword(
        values.password,
        values.password_confirmation,
        hash
      );
      if (res) {
        setToken(res.access_token);
        setUserData(JSON.stringify(res.data));
        toast.success(res.message);
        router.replace("/account");
      }
    } catch (error) {
      console.log("login", error);
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-[600px] container mx-auto flex justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[400px]">
          <div className="text-center my-4">
            <h1 className="text-xl  font-bold my-2">
              Réinitialiser le mot de passe du compte
            </h1>
            <p className="my-2 text-sm">
              Veuillez entrer le nouveau mot de passe !
            </p>
          </div>
          <div className="relative mb-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type={!toggleInput ? "password" : "text"}
                      placeholder="Mot de passe *"
                      onKeyDown={handleKeyPress}
                      className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-[12px]" />
                </FormItem>
              )}
            />
            <div className="absolute top-0 right-0 px-4 flex justify-center items-center h-10">
              {!toggleInput ? (
                <LuEye
                  onClick={() => setToggleInput(true)}
                  className="cursor-pointer w-6 h-6"
                />
              ) : (
                <LuEyeOff
                  onClick={() => setToggleInput(false)}
                  className="cursor-pointer w-6 h-6"
                />
              )}
            </div>
          </div>

          <div className="relative mb-4">
            <FormField
              control={form.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type={!toggleInput ? "password" : "text"}
                      placeholder="Confirmez le mot de passe *"
                      onKeyDown={handleKeyPress}
                      className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-[12px]" />
                </FormItem>
              )}
            />
            <div className="absolute top-0 right-0 px-4 flex justify-center items-center h-10">
              {!toggleInput ? (
                <LuEye
                  onClick={() => setToggleInput(true)}
                  className="cursor-pointer w-6 h-6"
                />
              ) : (
                <LuEyeOff
                  onClick={() => setToggleInput(false)}
                  className="cursor-pointer w-6 h-6"
                />
              )}
            </div>
          </div>

          <CustomBlackButton
            title="Réinitialiser le mot de passe"
            loading={loading}
          />
        </form>
      </Form>
    </div>
  );
}
