import { Goal } from "lucide-react";

const NotreBut = () => {
  return (
    <section className="-mt-20 flex items-center justify-center bg-white py-8 text-center font-roboto">
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-1">
          {/* <img src="/icons/but.png" className="-mb-1 w-14" alt="but" /> */}
          <h1 className="font-amaranth text-3xl font-bold text-primary">
            Notre But
          </h1>
        </div>
        <ul className="text-lg font-semibold">
          <li className="flex items-center justify-center gap-2">
            <Goal />
            <p>La digitalisation des produits de terroir et artisanaux.</p>
            <Goal />
          </li>
          <li className="flex items-center justify-center gap-2">
            <Goal />
            <p>La promotion des produits 100% tunisienne.</p>
            <Goal />
          </li>
          <li className="flex items-center justify-center gap-2">
            <Goal />
            <p>L’accompagnement des vendeurs.</p>
            <Goal />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NotreBut;
