import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function CartAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">
          Informations sur le paiement
        </AccordionTrigger>
        <AccordionContent>
          <small>
            Nous proposons les différents modes de paiement suivants :
            MobileMoney, MoovMoney, CeltiisCash, OrangeMoney, Visa, Mastercard,
            American Express.
          </small>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="hover:no-underline">
          Expédition et retours
        </AccordionTrigger>
        <AccordionContent>
          <small>
            Veuillez noter que les délais de livraison sont plus longs pendant
            les périodes de vente en raison du volume élevé de commandes.
            <br /> Si vous n&apos;êtes pas satisfait de votre achat, nous
            offrons une généreuse politique de retour de 14 jours sur tous nos
            articles, à l&apos;exception des slips, bodies, maillots de bain,
            masques, bijoux percés et oreillettes. <br /> Pour des raisons
            d&apos;hygiène, ces articles ne peuvent être retournés ou échangés,
            sauf s&apos;ils sont défectueux.
          </small>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
