import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ContactCard from "./contact-card";

const ContactInfoSection = () => {
  return (
    <div>
      <div className="bg-white py-4"></div>
      <h1 className="bg-white text-center text-4xl font-bold text-primary">
        Contactez-Nous
      </h1>
      <div className="flex items-center justify-center bg-white py-6">
        <div className="rounded-box relative flex items-center justify-center gap-16 px-24 py-6">
          <ContactCard
            key={1}
            Icon={Mail}
            name="E-mail"
            value="garemkhalil@gmail.com"
            color="text-amber-500"
          />
          <ContactCard
            key={2}
            Icon={MapPin}
            name="Addresse"
            value="Tunis, Tunisie"
            color="text-red-500"
          />
          <ContactCard
            key={3}
            Icon={Phone}
            name="Telephone"
            value="29702463"
            color="text-green-500"
          />
          {/* Socials */}
          <div className="absolute left-0 flex flex-col items-center justify-center gap-6 py-2">
            <Instagram className="h-7 w-7 text-rose-700" />
            <Facebook className="h-7 w-7 text-blue-500" />
            <Linkedin className="h-7 w-7 text-blue-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
