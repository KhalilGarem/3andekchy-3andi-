import { RouterOutputs } from "~/utils/api";

interface TotalSectionProps {
  basket: RouterOutputs["basket"]["getBasket"];
  onOrderBasket: () => void;
}

const TotalSection: React.FC<TotalSectionProps> = ({
  basket,
  onOrderBasket,
}) => {
  const getBaseketTotal = () => {
    return basket?.basketItems.reduce((acc, basketItem) => {
      return acc + basketItem.product.price * basketItem.quantity;
    }, 0);
  };

  return (
    <div className="container grid grid-cols-7 items-center rounded-lg bg-base-100 px-24 py-8">
      <div className="col-span-6 flex gap-24 font-amaranth text-xl font-bold">
        <span className="text-primary">Mantant total: </span>
        <span className="">{getBaseketTotal()} DT.</span>
      </div>
      <div>
        <button className="btn-primary btn" onClick={onOrderBasket}>
          Commander
        </button>
      </div>
    </div>
  );
};

export default TotalSection;
