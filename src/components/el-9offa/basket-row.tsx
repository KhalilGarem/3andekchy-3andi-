import React from "react";

interface BaskeRowProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const BaskeRow: React.FC<BaskeRowProps> = ({
  image,
  name,
  price,
  quantity,
}) => {
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
        <div className="font-roboto text-lg font-bold capitalize">
          {quantity}
        </div>
      </td>
      {/* Prix */}
      <td>
        <div className="font-roboto text-lg font-bold capitalize">
          {price * quantity}
        </div>
      </td>
    </tr>
  );
};

export default BaskeRow;
