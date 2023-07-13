import { Award, History, ShieldCheck, ShoppingCart } from "lucide-react";
import FeatureCard from "./feature-card";

const Features = () => {
  return (
    <section className="flex items-center justify-center gap-12 py-10">
      <FeatureCard
        key={1}
        title="Sécurité"
        description="La sécurité des vos données personnelles
        qualité."
        Icon={ShieldCheck}
      />
      <FeatureCard
        key={2}
        title="Qualité"
        description="Nous garantissons la haute qualité de produits."
        Icon={Award}
      />
      <FeatureCard
        key={3}
        title="Livraison"
        description="Reservez en ligne recerver votre commande chez vous
        Disponibilité."
        Icon={ShoppingCart}
      />
      <FeatureCard
        key={4}
        title="Disponibilité"
        description="Notre service est disponible 24heures/24 7jours/7."
        Icon={History}
      />
    </section>
  );
};

export default Features;
