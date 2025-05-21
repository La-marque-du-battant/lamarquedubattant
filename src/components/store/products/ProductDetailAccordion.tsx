import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function ProductDetailAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">
          Composition
        </AccordionTrigger>
        <AccordionContent>Coton 100</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="hover:no-underline">
          Expédition
        </AccordionTrigger>
        <AccordionContent className="leading-7">
          <p>
            Les délais de livraison sont actuellement plus longs en raison du
            grand nombre de commandes.
          </p>
          <p>
            Dès que votre commande est expédiée, vous recevez un e-mail de
            confirmation d&apos;expédition avec un numéro de suivi.
          </p>
          <ul>
            <li className="flex gap-4">
              <h1 className="font-bold">Pays-Bas</h1>
              <p>3 - 7 jours ouvrables Gratuit</p>
            </li>
            <li className="flex gap-4">
              <h1 className="font-bold">Europe Zone 1</h1>
              <p>5 - 9 jours ouvrables Gratuit</p>
            </li>
            <li className="flex gap-4">
              <h1 className="font-bold">Europe Zone 2</h1>
              <p>7 - 10 jours ouvrables € 10,00 (Gratuit à partir de €99)</p>
            </li>
            <li className="flex gap-4">
              <h1 className="font-bold">Hors Europe</h1>
              <p>9 - 12 jours ouvrables € 10,00 (Gratuit à partir de €250)</p>
            </li>
          </ul>
          <p>
            *La zone 1 de l&apos;Europe comprend la Belgique, la France,
            l&apos;Allemagne et le Luxembourg. Pour plus d&apo;sinformations,
            veuillez consulter notre page{" "}
            <span>
              <Link className="underline" href="/">
                Expédition
              </Link>
            </span>
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="hover:no-underline">
          Retour
        </AccordionTrigger>
        <AccordionContent className="leading-7">
          <p>
            Notre politique de retour est très simple - nous acceptons les
            retours pour n&apos;importe quelle raison, et émettons un
            remboursement ou un crédit magasin. Tout ce qui a été acheté en
            ligne peut être retourné à notre entrepôt. <br /> Pour commencer le
            processus de retour, veuillez vous rendre sur notre portail de
            retour. Vous aurez besoin de votre numéro de commande ainsi que de
            l&apos;e-mail que vous avez utilisé lors de votre achat. Veuillez
            remplir le formulaire et suivre les instructions pour effectuer
            votre retour. Par le biais de notre portail de retour, vous pouvez
            acheter une étiquette de retour à un prix réduit. <br />
            Pour plus d&apos;informations, veuillez consulter notre page sur les{" "}
            <span>
              <Link href="/">retours.</Link>
            </span>
          </p>
          <ul className="list-disc list-inside">
            <li>
              Tous les produits doivent être retournés dans les 14 jours suivant
              leur réception.
            </li>
            <li>Tous les produits doivent être non portés et non lavés.</li>
            <li>
              Tous les produits doivent avoir toutes les Daily Paper étiquettes
              d&apos;origine encore attachées.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
