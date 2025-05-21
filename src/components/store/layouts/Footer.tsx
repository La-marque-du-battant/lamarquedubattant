export default function Footer() {
  return (
    <div className="bg-black pt-10 pb-2 px-6 text-white container mx-auto">
      {/* TOP */}
      <div className="flex max-lg:block">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-xl">Newsletter</h1>
          <p>
            Inscrivez-vous pour être le premier à être informé des baisses, des
            offres spéciales et plus encore.
          </p>
          <p>Je suis intéressé par :</p>
          <form action="" className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2 w-full md:w-[40rem]">
              <div>
                <input type="radio" name="cloths" />{" "}
                <label htmlFor="men">Vêtements pour hommes</label>
              </div>
              <div>
                <input type="radio" name="cloths" />{" "}
                <label htmlFor="women">Vêtements pour femmes</label>
              </div>
              <div>
                <input type="radio" name="cloths" />{" "}
                <label htmlFor="all">Les deux</label>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-[20rem]">
                <input
                  type="text"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 rounded-full bg-gray-600 border-2 border-transparent placeholder:text-white focus:ring-1 focus:border-2 focus:border-white outline-none"
                />
              </div>
              <button className="rounded-full bg-gray-600 text-white px-4 py-2">
                Soumettre
              </button>
            </div>
            <div className="flex gap-2">
              <input type="radio" />
              <label htmlFor="cug">
                J&apos;accepte la politique de confidentialité
              </label>
            </div>
          </form>
        </div>
        {/* RIGHT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full justify-between gap-6 mt-6">
          <ul className="flex flex-col gap-3">
            <li>
              <h1 className="font-bold">La marque du battant</h1>
            </li>
            <li>BLOG</li>
            <li>Evènement</li>
            <li>Collections</li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li>
              <h1 className="font-bold">Obtenir de l&apos;aide</h1>
            </li>
            <li>FAQ</li>
            <li>Expédition</li>
            <li>Paiement</li>
            <li>Nous contacter</li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li>
              <h1 className="font-bold">Mentions légales</h1>
            </li>
            <li>Terms</li>
            <li>Politique de confidentialité</li>
            <li>Politique de cookies</li>
            <li>Garanties</li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li>
              <h1 className="font-bold">Réseaux sociaux</h1>
            </li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Tiktok</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="mt-20 pt-5 text-right">
        <p>© 2024 Copyright La marque du battant®</p>
      </div>
    </div>
  );
}
