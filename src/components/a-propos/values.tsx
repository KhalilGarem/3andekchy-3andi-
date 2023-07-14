import { Gauge, Leaf, Medal, Share2 } from "lucide-react";

const Values = () => {
  return (
    <div className="w-[400px] space-y-2 font-roboto">
      <h1 className="py-4 text-center font-amaranth text-3xl font-bold">
        Nos valeurs
      </h1>
      <div className="flex items-center gap-1 font-amaranth text-xl">
        <Share2 className="-mb-0.5 h-5 w-5" />
        <span>Partage</span>
      </div>
      <p className="text-justify text-lg">
        Partage équitable des richesses, de la valeur ajoutée, partage du
        plaisir de profiter d’un bon produit.
      </p>
      <div className="flex items-center gap-1 font-amaranth text-xl">
        <Leaf className="-mb-0.5 h-5 w-5" />
        <span>Respect</span>
      </div>
      <p className="text-justify text-lg">
        Respect de l’environnement, des ressources naturelles, des partenaires,
        des clients.
      </p>
      <div className="flex items-center gap-1 font-amaranth text-xl">
        <Medal className="-mb-0.5 h-5 w-5" />
        <span>Transparence</span>
      </div>
      <p className="text-justify text-lg">
        Transparence sur les relations commerciales.
      </p>
      <div className="flex items-center gap-1 font-amaranth text-xl">
        <Gauge className="-mb-0.5 h-5 w-5" />
        <span>Passion</span>
      </div>
      <p className="text-justify text-lg">
        Nous faisons notre métier avec passion et nous cherchons à collaborer
        avec des partenaires partageant cette valeur.
      </p>
    </div>
  );
};

export default Values;
