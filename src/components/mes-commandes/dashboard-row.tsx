import { Trash } from "lucide-react";
import { api } from "~/utils/api";

interface DashboardRowProps {
  id: string;
  image: string;
  productName: string;
  clientName: string;
  quantity: number;
  phone: string;
}

const DashboardRow: React.FC<DashboardRowProps> = ({
  id,
  image,
  productName,
  clientName,
  quantity,
  phone,
}) => {
  const ctx = api.useContext();

  const { mutate: deleteOrder } = api.basket.deleteOrder.useMutation({
    onSuccess: () => {
      ctx.basket.getUserOrders.invalidate();
    },
  });

  return (
    <tr>
      {/* Image */}
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-20 w-20">
            <img src={image} alt={productName} />
          </div>
        </div>
      </td>
      {/* Product Name */}
      <td>
        <div className="flex items-center space-x-3">
          <div className="font-roboto text-lg font-bold capitalize">
            {productName}
          </div>
        </div>
      </td>
      {/* Client Name */}
      <td>
        <div className="flex items-center space-x-3">
          <div className="font-roboto text-lg font-bold capitalize">
            {clientName}
          </div>
        </div>
      </td>
      {/* Quantité */}
      <td>
        <div className="font-roboto text-lg font-bold capitalize">
          {quantity}
        </div>
      </td>
      {/* Phone */}
      <td>
        <div className="font-roboto text-lg font-bold capitalize">{phone}</div>
      </td>
      <th>
        <button className="btn-ghost btn" onClick={() => deleteOrder({ id })}>
          <Trash className="text-primary" />
        </button>
      </th>
    </tr>
  );
};

export default DashboardRow;
