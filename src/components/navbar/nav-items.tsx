import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const NavItems = () => {
  return (
    <nav>
      <ul className="menu menu-horizontal space-x-2 px-1 font-semibold">
        <li>
          <Link href="/" className="hover:text-primary">
            Accueil
          </Link>
        </li>
        <li tabIndex={0}>
          <details className="z-10">
            <summary className="hover:text-primary">Produits</summary>
            <ul className="p-2">
              <li>
                <Link
                  href="/produits/habillement"
                  className="hover:text-primary"
                >
                  Habillement
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/alimentaire"
                  className="hover:text-primary"
                >
                  Alimentaire
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/a-propos" className="hover:text-primary">
            A Propos
          </Link>
        </li>
        <li>
          <div
            className="tooltip-primary tooltip tooltip-bottom"
            data-tip="القفة"
          >
            <Link
              href="/9offa"
              className="tooltip flex flex-col items-center justify-center"
            >
              <ShoppingBag className="hover:text-primary" />
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
