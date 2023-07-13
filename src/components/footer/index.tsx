import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center">
        <div className="h-1 w-[35%] bg-primary"></div>
      </div>
      <div className="flex items-center justify-center gap-72 bg-white py-12">
        {/* Qui Somme nous */}
        <div>
          <h1 className="text-xl font-bold">Qui Somme nous</h1>
          {/* LOGO */}
          <div className="font-courgette text-lg">
            <Link
              href="/"
              className="flex flex-col font-extrabold text-primary"
            >
              <span>
                3andekchy <span className="text-black">?</span>
              </span>
              <span className="-mt-2">3andi</span>
            </Link>
          </div>
          <p className="font-semibold">
            3andekchy 3andi est une plateforme de vente en ligne des produits
            terroir et artisanaux.
          </p>
        </div>
        {/* Contact */}
        <div className="flex flex-col gap-4 font-semibold">
          <h1 className="text-xl font-bold">Contact</h1>
          <div className="space-y-2">
            {/* Addresse */}
            <div className="flex gap-1">
              <MapPin />
              <span>Tunis, Tunisie</span>
            </div>
            {/* Tel */}
            <div className="flex gap-1">
              <Phone />
              <span>29702463</span>
            </div>
            {/* Email */}
            <div className="flex gap-1">
              <Mail />
              <span>garemkhalil@gmail.com</span>
            </div>
            {/* Socials */}
          </div>
          <div className="flex gap-2">
            <Instagram className="text-rose-700" />
            <Facebook className="text-blue-500" />
            <Linkedin className="text-blue-700" />
          </div>
        </div>
      </div>
      <div className="bg-black py-2 text-center text-sm font-semibold text-white">
        Copyright © 2023 3andekchy ? 3andi
      </div>
    </footer>
  );
};

export default Footer;
