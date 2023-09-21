import { RouterOutputs } from "~/utils/api";
import DashboardRow from "./dashboard-row";

interface DashboardProps {
  orders: RouterOutputs["basket"]["getUserOrders"];
}

const Dashboard: React.FC<DashboardProps> = ({ orders }) => {
  if (orders?.length === 0) {
    return (
      <div className="bg-white px-32 py-32 text-center">
        <p>Aucun commande.</p>
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
              <th className="font-amaranth text-lg text-primary">
                Nom du produit
              </th>
              <th className="font-amaranth text-lg text-primary">
                Nom du client
              </th>
              <th className="font-amaranth text-lg text-primary">Quantité</th>
              <th className="font-amaranth text-lg text-primary">Télephone</th>
              <th className="font-amaranth text-lg text-primary">Paramètres</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows */}
            {orders?.map((order) => (
              <DashboardRow
                key={order.id}
                id={order.id}
                image={order.product.image?.url || ""}
                productName={order.product.name || ""}
                clientName={order.user.name || ""}
                quantity={order.quantity}
                phone={order.phone || ""}
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

export default Dashboard;
