"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function ProductDetailCarrousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="px-6 flex justify-center items-center">
            <small className="text-center">
              Livraison gratuite sur toutes les commandes sur €250.00 !{" "}
            </small>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="px-6 flex justify-center items-center">
            <small className="text-center">
              Les délais de livraison sont actuellement plus long en raison du
              grand nombre de commandes.{" "}
            </small>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="px-6 flex justify-center items-center">
            <small className="text-center">
              Paiement sécurisé avec Mobile Money, Moov Money, Celtiis Cash,
              PayPal, Mastercard, Visa.{" "}
            </small>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
