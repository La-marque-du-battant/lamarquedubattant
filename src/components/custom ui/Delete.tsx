"use client";

import { useState } from "react";
import { Loader, Trash } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { deleteItem, getUsers } from "@/lib/api";

interface DeleteProps {
  item: string;
  id: string | any;
}

const Delete: React.FC<DeleteProps> = ({ item, id }) => {
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true);
      console.log(id);

      const itemType = `${item}s`;
      const res = await deleteItem(itemType, id);
      setLoading(false);
      toast.success(`${item.toLocaleUpperCase()} supprimé`);
      await getUsers();
    } catch (err) {
      console.log(err);
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="bg-red-600 hover:bg-red-500 text-white">
          <Trash className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white text-grey-1">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-1">
            Êtes vous sûr?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Cette action est irréversible. Vous allez supprimer définitivement
            votre {item}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-500 text-white"
            onClick={onDelete}
          >
            {loading ? <Loader /> : <span>Supprimer</span>}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Delete;
