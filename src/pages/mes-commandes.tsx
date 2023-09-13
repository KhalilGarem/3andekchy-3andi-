import Head from "next/head";
import ArtSection from "~/components/mes-produit/art-section";
import Dashboard from "~/components/mes-produit/dashboard";

/**
 * Page Mes Commandes
 * Une page dynamic contient les produit alimentaire
 */
export default function MesCommandes() {
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
      </main>
    </>
  );
}
