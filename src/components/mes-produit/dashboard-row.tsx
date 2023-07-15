import { Settings, Wrench } from "lucide-react";
import Link from "next/link";

interface DashboardRowProps {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
}

const DashboardRow: React.FC<DashboardRowProps> = ({
  id,
  image,
  name,
  price,
  quantity,
  type,
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
      {/* Prix */}
      <td>
        <div className="font-roboto text-lg font-bold capitalize">{price}</div>
      </td>
      {/* Quantité */}
      <td>
        <div className="font-roboto text-lg font-bold capitalize">
          {quantity}
        </div>
      </td>
      {/* Type */}
      <td>
        <div className="font-roboto text-lg font-bold capitalize">{type}</div>
      </td>
      <th>
        <Link href={`/parametres/${id}`} className="btn-ghost btn-sm btn">
          <Settings className="text-primary" />
        </Link>
      </th>
    </tr>
  );
};

export default DashboardRow;
