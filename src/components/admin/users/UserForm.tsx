"use client";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { addUsers, getRoles } from "@/lib/api";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "L'email est requis" })
      .email("Adresse mail invalide"),
    password: z.string().min(4, {
      message: "Le mot de passe doit contenir au moins 4 caractères",
    }),
    password_confirmation: z.string().min(4, {
      message: "Le mot de passe doit contenir au moins 4 caractères",
    }),
    role: z.string().min(1, { message: "Veuillez sélectionner le rôle" }),
  })
  .superRefine(({ password_confirmation, password }, ctx) => {
    if (password_confirmation !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Les mots de passes doivent être identiques",
        path: ["password_confirmation"],
      });
    }
  });

interface UserFormProps {
  initialData?: UserType | null;
}

const UserForm: React.FC<UserFormProps> = ({ initialData }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? initialData
      : {
          email: "",
          password: "",
          password_confirmation: "",
          role: "0",
        },
  });

  const handleKeyPress = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLSelectElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const [roleData, setRoleData] = useState<RoleType[]>([]);

  const fetchRoles = async () => {
    try {
      const res = await getRoles();

      if (res?.data) {
        console.log(res);
        setRoleData(res.data);
        console.log(roleData.length);
      }
    } catch (error) {
      console.log("role", error);
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer.");
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await addUsers(values);
      if (res) {
        toast.success(
          "Utilisateur ajouté avec succès, un lien a été envoyé à l'adresse mail pour vérification"
        );
        console.log(values);
        form.reset();
      }
    } catch (error) {
      console.log("role", error);
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer.");
    }
  };

  return (
    <div className="p-10">
      <p className="text-heading2-bold">Ajouter Utilisateur</p>
      <Separator className="bg-black mt-4 mb-7" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl />
                <Input
                  onKeyDown={handleKeyPress}
                  placeholder="Veuillez entrer l'email de l'utilisateur"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl />
                <Input
                  onKeyDown={handleKeyPress}
                  placeholder="Veuillez entrer le mot de passe de l'utilisateur"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password_confirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl />
                <Input
                  onKeyDown={handleKeyPress}
                  placeholder="Veuillez confirmer le mot de passe de l'utilisateur"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          {roleData.length > 0 && (
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl />
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Veuillez selectionner le rôle de l'utilisateur" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">
                        Veuillez selectionner le rôle de l&apos;utilisateur
                      </SelectItem>
                      {roleData.map((role) => {
                        return (
                          <SelectItem key={role.id} value={role.name}>
                            {role.name.toUpperCase()}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button type="submit" className="w-full">
            Ajouter
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserForm;
