import { Plus } from "lucide-react";
import Link from "next/link";

const ArtSection = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center gap-4 py-16">
        <div className="font-reem text-9xl">
          <div className="font-extrabold text-info-content">
            <span>الدوزان</span>
          </div>
        </div>
        <blockquote className="font-noto text-xl">
          “الارض ارضي و تراب اجدادي”
        </blockquote>
      </div>
      <div className="flex justify-center">
        <div className="h-1 w-[35%] bg-primary"></div>
      </div>
      <div className="absolute bottom-0 right-0 px-8 py-2">
        <Link
          href="/nouveau-produit"
          className="flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-white hover:cursor-pointer hover:bg-primary-focus"
        >
          <Plus className="-mb-0.5" />
          <span className="font-amaranth text-lg font-semibold">
            Nouveau produit
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ArtSection;
