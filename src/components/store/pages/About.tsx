import Image from "next/image";

export default function About() {
  return (
    <div className="px-6 gap-5 w-full md:flex">
      <div className="w-full flex justify-center md:w-1/2">
        <div className="h-full md:h-[80%] w-full md:w-[80%] overflow-hidden">
          <Image
            src="./citation.jpg"
            width={800}
            height={800}
            alt=""
            className="w-full h-full object-cover transition duration-700 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
      <div className="pt-10 text-justify md:w-1/2 md:pt-0 flex flex-col gap-6">
        <h1 className="font-bold text-xl">A propos</h1>
        <div>
          <p>
            La Marque des Battants est bien plus qu’une simple boutique en ligne
            : c’est une ode à la persévérance et à l’audace.{" "}
          </p>
          <br />
          <p>
            Fondée avec la conviction que chaque bataille menée avec passion
            mérite d’être célébrée, notre marque incarne l’esprit des battants,
            ceux qui se relèvent face aux défis. Inspirée par les histoires de
            courage et de dépassement, notre collection reflète la force
            intérieure de chacun à travers des créations uniques et
            personnalisées.
          </p>
          <br />
          <p>
            Chez La Marque des Battants, chaque pièce raconte une histoire, la
            vôtre, et célèbre votre parcours. Nous croyons en une mode
            authentique et engagée, où chaque choix est porteur de sens.
            Rejoignez-nous et affichez fièrement vos couleurs : celles de la
            détermination et de la victoire.
          </p>
          <br />
          <span className="font-semibold text-sm">
            La Marque des Battants : parce que chaque battant mérite d’être
            honoré.
          </span>
        </div>
      </div>
    </div>
  );
}
