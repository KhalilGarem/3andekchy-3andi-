import Head from "next/head";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Courgette&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
