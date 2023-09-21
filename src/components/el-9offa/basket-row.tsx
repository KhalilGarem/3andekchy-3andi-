import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import React from "react";
import { api } from "~/utils/api";

interface BaskeRowProps {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  confirmDeleteBasketItem: () => void;
}

const BaskeRow: React.FC<BaskeRowProps> = ({
  id,
  image,
  name,
  price,
  quantity,
  confirmDeleteBasketItem,
}) => {
  const ctx = api.useContext();

  const { mutate: increaseBasketItemQuantity } =
    api.basket.increaseBasketItemQuantity.useMutation({
      onSuccess: () => {
        ctx.basket.getBasket.invalidate();
      },
    });
  const { mutate: decreaseBasketItemQuantity } =
    api.basket.decreaseBasketItemQuantity.useMutation({
      onSuccess: () => {
        ctx.basket.getBasket.invalidate();
      },
    });

  return (
    <tr>
      {/* Image */}
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-20 w-20">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      {/* Nom */}
      <td>
        <div className="flex items-center space-x-3">
          <div className="font-roboto text-lg font-bold capitalize">{name}</div>
        </div>
      </td>
      {/* Quantité */}
      <td>
        <div className="flex items-center gap-3 font-roboto text-xl font-bold capitalize">
          <button
            className="btn-ghost btn-sm btn-circle btn"
            onClick={() => decreaseBasketItemQuantity({ id })}
          >
            <MinusCircle className="h-5 w-5 text-primary" />
          </button>
          {quantity}
          <button
            className="btn-ghost btn-sm btn-circle btn"
            onClick={() => increaseBasketItemQuantity({ id })}
          >
            <PlusCircle className="h-5 w-5 text-primary" />
          </button>
        </div>
      </td>
      {/* Prix */}
      <td>
        <div className="font-roboto text-lg font-bold capitalize">
          {price * quantity}
        </div>
      </td>
      {/* Delete basket item */}
      <td>
        <button className="btn-ghost btn" onClick={confirmDeleteBasketItem}>
          <Trash className="text-primary" />
        </button>
      </td>
    </tr>
  );
};

export default BaskeRow;
