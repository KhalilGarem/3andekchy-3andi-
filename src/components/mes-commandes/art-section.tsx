import { Plus } from "lucide-react";
import Link from "next/link";

const ArtSection = () => {
  return (
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
  );
};

export default ArtSection;
