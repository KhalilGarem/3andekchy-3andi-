import { RouterOutputs } from "~/utils/api";
import BaskeRow from "./basket-row";

interface BasketProps {
  basket: RouterOutputs["basket"]["getBasket"];
}

const Basket: React.FC<BasketProps> = ({ basket }) => {
  if (basket?.basketItems.length === 0) {
    return (
      <div className="bg-white px-32 py-32 text-center">
        <p>Panier vide.</p>
      </div>
    );
  }

  return (
    <div className="bg-white px-32 py-12">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-amaranth text-lg text-primary">Image</th>
              <th className="font-amaranth text-lg text-primary">Nom</th>
              <th className="font-amaranth text-lg text-primary">Quantité</th>
              <th className="font-amaranth text-lg text-primary">Prix DT.</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows */}
            {basket?.basketItems.map((basketItem) => (
              <BaskeRow
                image={basketItem.product.image?.url || ""}
                name={basketItem.product.name}
                price={basketItem.product.price}
                quantity={basketItem.quantity}
              />
            ))}
          </tbody>
          {/* foot */}
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default Basket;
