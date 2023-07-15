import { api } from "~/utils/api";
import ProductCard from "./product-card";

const Alimentaire = () => {
  const { data: products } = api.product.getProducts.useQuery({
    type: "Alimentaire",
  });
  return (
    <div className="flex justify-center bg-white py-12">
      <div className="grid grid-cols-4 gap-12">
        {products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image?.url || ""}
              name={product.name}
              price={product.price}
              owner={product.owner.name || ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Alimentaire;
