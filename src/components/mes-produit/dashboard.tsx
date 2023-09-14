import { RouterOutputs } from "~/utils/api";
import DashboardRow from "./dashboard-row";

interface DashboardProps {
  products: RouterOutputs["product"]["getProductsByUser"];
}

const Dashboard: React.FC<DashboardProps> = ({ products }) => {
  if (products?.length === 0) {
    return (
      <div className="bg-white px-32 py-32 text-center">
        <p>Aucun produit.</p>
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
              <th className="font-amaranth text-lg text-primary">Prix DT.</th>
              <th className="font-amaranth text-lg text-primary">Quantité</th>
              <th className="font-amaranth text-lg text-primary">Type</th>
              <th className="font-amaranth text-lg text-primary">Paramètres</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows */}
            {products?.map((product) => (
              <DashboardRow
                key={product.id}
                id={product.id}
                image={product.image?.url || ""}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                type={product.type}
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
