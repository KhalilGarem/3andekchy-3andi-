import { api } from "~/utils/api";
import ProductCard from "./product-card";
import PageLoader from "../ui/page-loader";

const Alimentaire = () => {
  const { data: products, status } = api.product.getProducts.useQuery({
    type: "Alimentaire",
  });

  if (status === "loading") {
    return <PageLoader />;
  }

  if (products?.length === 0) {
    return (
      <div className="bg-white px-32 py-32 text-center">
        <p>Aucun produit.</p>
      </div>
    );
  }

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
