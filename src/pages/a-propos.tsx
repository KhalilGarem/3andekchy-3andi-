import Head from "next/head";
import APropsSection from "~/components/a-propos";

/**
 * Page A Propos
 * Une page static contient les infos du platform
 */
export default function APropos() {
  return (
    <>
      <Head>
        <title>3andekchy ? 3andi</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-16">
        {/* Brand Logo */}
        <div className="flex justify-center py-12">
          <div className="font-courgette text-7xl">
            <div className="flex flex-col items-center font-extrabold text-primary">
              <span>
                3andekchy <span className="text-black">?</span>
              </span>
              <span className="-mt-2">3andi</span>
            </div>
          </div>
        </div>
        {/* A propos section */}
        <APropsSection />
      </main>
    </>
  );
}
