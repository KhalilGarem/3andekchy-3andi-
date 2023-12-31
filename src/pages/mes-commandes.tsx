import Head from "next/head";
import ArtSection from "~/components/mes-commandes/art-section";
import Dashboard from "~/components/mes-commandes/dashboard";
import PageLoader from "~/components/ui/page-loader";
import { api } from "~/utils/api";

/**
 * Page Mes Commandes
 */
export default function MesCommandes() {
  const { data: orders, status } = api.basket.getUserOrders.useQuery();

  if (status === "loading") {
    return <PageLoader />;
  }

  if (!orders) {
    return null;
  }

  return (
    <>
      <Head>
        <title>3andekchy ? 3andi ?</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-16">
        {/* Art Section */}
        <ArtSection />
        {/* Dashboard */}
        <Dashboard orders={orders} />
      </main>
    </>
  );
}
