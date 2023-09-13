import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import MainLayout from "~/layouts/main-layout";

declare global {
  interface Window {
    // Product settings modals
    delete_modal: any;
    edit_name_modal: any;
    edit_description_modal: any;
    edit_price_modal: any;
    edit_quantity_modal: any;
    // Basket models
    add_to_basket_modal: any;
  }
}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
