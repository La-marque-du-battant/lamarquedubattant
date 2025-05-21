import { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useKKiaPay } from "kkiapay-react";
import { getUserData } from "@/lib/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { fetchClient } from "../../../../utils/fetchClient";
import { Loader } from "lucide-react";

export default function CartCheckout() {
  const { cart, getTotal, clearCart } = useCart();
  const { openKkiapayWidget } = useKKiaPay();
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const total = getTotal().toFixed(2);

  useEffect(() => {
    const userData = getUserData();
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const submitPayment = async (event: any) => {
    event.preventDefault();

    setLoading(true);

    if (cart.length === 0) {
      toast.error("Votre panier est vide.");
      return;
    }

    // Construire le message
    const message = `Bonjour j'aimerais effectuer une nouvelle commande !\n\n${cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.product.name} - ${item.sizeSelected} * ${
            item.quantity
          } = ${item.product.price * item.quantity} FCFA`
      )
      .join(
        "\n"
      )}\n\nTotal : ${getTotal()} FCFA\n\nVeuillez traiter cette commande rapidement.`;

    const encodedMessage = encodeURIComponent(message);

    // Numéro WhatsApp destinataire (format international sans +)
    const phoneNumber = "2290156141438";

    // URL de redirection WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirection
    window.open(whatsappUrl, "_blank");

    clearCart();

    setLoading(false);

    /* const body = {
      cart: cart,
      total: total,
      transaction_id: 123456,
      transaction_status: "approved",
    }; */
  };
  return (
    <Fragment>
      <form
        action=""
        className="flex justify-between w-full gap-2 border-b border-gray-300"
      >
        <div className="w-full">
          <input
            type="text"
            placeholder="Remise..."
            className="w-full placeholder:text-gray-400 py-2 px-6 outline-none"
          />
        </div>
        <button className="">Appliquer</button>
      </form>
      <div className="w-full my-4">
        {/* <form action="">
          <div className="py-4 flex flex-col space-y-4 border-b border-gray-300">
            <Input
              value={user.address}
              type="text"
              placeholder="Adresse de livraison"
              className="bg-slate-100 w-full py-2 px-6 rounded-full outline-none focus:border-none text-black placeholder:text-sm"
            />
            <Input
              value={user.phone}
              type="text"
              placeholder="Numéro de téléphone"
              className="bg-slate-100 w-full py-2 px-6 rounded-full outline-none focus:border-none text-black placeholder:text-sm"
            />
          </div>
        </form> */}
        <Button
          onClick={(event) => submitPayment(event)}
          className="bg-black text-nowrap rounded-full px-1 py-2 mt-4 text-white w-full"
        >
          {loading ? <Loader /> : `Confirmer la commande ${total} F cfa`}
        </Button>
      </div>
      {/* <small className="text-gray-400 text-center">
        Dépenser €178.05 plus pour bénéficier de la livraison gratuite
      </small> */}
    </Fragment>
  );
}
