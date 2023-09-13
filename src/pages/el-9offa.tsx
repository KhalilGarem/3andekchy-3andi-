import Head from "next/head";
import ArtSection from "~/components/el-9offa/art-section";
import Basket from "~/components/el-9offa/basket";
import PageLoader from "~/components/ui/page-loader";
import { api } from "~/utils/api";

/**
 * Page 9offa
 * Une page dynamic contient les info sur la commande
 */
export default function Qoffa() {
  const { data: basket, status } = api.basket.getBasket.useQuery();

  if (status === "loading") {
    return <PageLoader />;
  }

  return (
    <>
      <Head>
        <title>3andekchy ? 3andi</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen pt-16">
        {/* Art Section */}
        <ArtSection />
        {/* Basket Section */}
        {basket ? (
          <Basket basket={basket} />
        ) : (
          <div className="bg-white px-32 py-32 text-center">
            <p>Panier vide.</p>
          </div>
        )}
      </main>
    </>
  );
}
