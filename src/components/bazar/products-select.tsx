import { cn } from "~/utils/cn";

interface ProductsSelectProps {
  selctedProductType: boolean;
  selectHabillment: () => void;
  selectAlimentaire: () => void;
}

const ProductsSelect: React.FC<ProductsSelectProps> = ({
  selctedProductType,
  selectHabillment,
  selectAlimentaire,
}) => {
  return (
    <div className="flex justify-center gap-32 bg-white py-12">
      {/* Habillment */}
      <div
        className="flex flex-col items-center justify-center gap-2 hover:cursor-pointer"
        onClick={selectHabillment}
      >
        <img
          src="/images/habillment.jpg"
          alt="habillment"
          className={cn(
            "h-[100px] w-[100px] rounded-full border-4 border-primary",
            selctedProductType ? "border-base-300" : "border-primary"
          )}
        />
        <h1
          className={cn(
            "font-amaranth text-xl font-semibold",
            !selctedProductType &&
              "underline decoration-primary underline-offset-4"
          )}
        >
          Habillment
        </h1>
      </div>
      {/* Alimentaire */}
      <div
        className="group flex flex-col items-center justify-center gap-2 hover:cursor-pointer"
        onClick={selectAlimentaire}
      >
        <img
          src="/images/alimentaire.jpg"
          alt="habillment"
          className={cn(
            "h-[100px] w-[100px] rounded-full border-4 border-primary",
            selctedProductType ? "border-primary" : "border-base-300"
          )}
        />
        <h1
          className={cn(
            "font-amaranth text-xl font-semibold",
            selctedProductType &&
              "underline decoration-primary underline-offset-4"
          )}
        >
          Alimentaire
        </h1>
      </div>
    </div>
  );
};

export default ProductsSelect;
