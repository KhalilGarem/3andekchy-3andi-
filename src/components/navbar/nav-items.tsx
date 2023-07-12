import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const NavItems = () => {
  return (
    <nav className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal space-x-2 px-1 font-semibold">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>Produits</summary>
            <ul className="p-2">
              <li>
                <Link href="/produits/habillement">Habillement</Link>
              </li>
              <li>
                <Link href="/produits/alimentaire">Alimentaire</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/a-propos">A Propos</Link>
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
              <ShoppingBag />
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
