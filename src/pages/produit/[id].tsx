import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import ArtSection from "~/components/produit/art-section";
import { api } from "~/utils/api";

/**
 * Page Produit
 * Une page static contient les infos du produit
 */
export default function Product() {
  // Get the router object to access the query parameters
  const { query } = useRouter();

  // Session
  const { data: session } = useSession();

  // Fetch the product data based on the provided id
  const { data: product } = api.product.getProductById.useQuery({
    id: query.id as string,
  });

  if (!product) {
    return <div>404 Product not found</div>;
  }

  return (
    <>
      <Head>
        <title>3andekchy ? 3andi</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-16">
        {/* Art Section */}
        <ArtSection />
        <div className="flex justify-center bg-white py-12">
          <div className="flex w-[60%] flex-col gap-12">
            {/* Product Image */}
            <img
              src={product?.image?.url || ""}
              alt={product.name}
              className="rounded-box h-[550px] w-full object-cover"
            />
            {/* Product Name & Type */}
            <div className="flex items-center justify-between px-12">
              {/* Product Name */}
              <h1 className="font-amaranth text-6xl font-bold capitalize">
                {product.name}
              </h1>
              {/* Product Type */}
              <p className="font-courgette text-xl font-bold">{product.type}</p>
            </div>
            {/* Product Description & Info */}
            <div className="flex justify-between gap-32 px-24">
              <div className="space-y-6">
                {/* Product Description */}
                <div className="space-y-2">
                  <h1 className="font-amaranth text-xl font-bold text-primary">
                    Description:{" "}
                  </h1>
                  <p className="font-roboto text-lg font-semibold">
                    {product.description}
                  </p>
                </div>
                {/* Product Owner */}
                <div className="flex gap-2">
                  <h1 className="font-amaranth text-xl font-bold text-primary">
                    Brand:{" "}
                  </h1>
                  <p className="font-roboto text-lg font-semibold">
                    {product.owner.name}
                  </p>
                </div>
              </div>
              {/* Product Info */}
              <div className="space-y-6">
                {/* Product Price */}
                <div className="flex gap-2">
                  <h1 className="font-amaranth text-xl font-bold text-primary">
                    Price:{" "}
                  </h1>
                  <p className="font-roboto text-lg font-semibold">
                    {product.price} DT.
                  </p>
                </div>
                {/* Product Quantity  */}
                <div className="flex gap-2">
                  <h1 className="font-amaranth text-xl font-bold text-primary">
                    Quantity:{" "}
                  </h1>
                  <p className="font-roboto text-lg font-semibold">
                    {product.quantity}
                  </p>
                </div>
              </div>
            </div>
            {/* Order now Button */}
            <div className="flex justify-center">
              {session?.user.role === "admin" ? (
                <button className="btn-primary btn">
                  Supprimer ce produit
                </button>
              ) : (
                <button className="btn-primary btn">إشري تربح</button>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
