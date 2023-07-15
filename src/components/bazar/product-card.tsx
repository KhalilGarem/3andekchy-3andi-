import Link from "next/link";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  owner: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  price,
  owner,
}) => {
  return (
    <Link
      href={`/produit/${id}`}
      className="group rounded-box w-[300px] overflow-hidden border-b-8 border-white shadow-md hover:cursor-pointer hover:border-primary hover:shadow-xl"
    >
      <div>
        <img
          src={image}
          alt={name}
          className="h-[300px] w-[300px] object-cover"
        />
        <div className="space-y-2 p-4">
          <div className="flex items-center justify-between">
            <h1 className=" font-amaranth text-xl font-bold capitalize group-hover:text-primary">
              {name}
            </h1>
            <p className="text-lg font-bold group-hover:text-primary">
              {price} DT.
            </p>
          </div>
          <p className="font-courgette">Brand: {owner}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
