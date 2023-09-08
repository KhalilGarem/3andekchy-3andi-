import { ShoppingBag } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavItems = () => {
  const { status } = useSession();

  return (
    <nav>
      <ul className="menu menu-horizontal space-x-2 px-1 font-semibold">
        <li>
          <Link href="/" className="hover:text-primary">
            Accueil
          </Link>
        </li>
        <li tabIndex={0}>
          <Link href="/bazar" className="hover:text-primary">
            Bazar
          </Link>
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
        {status === "authenticated" && (
          <li>
            <div
              className="tooltip-primary tooltip tooltip-bottom"
              data-tip="القفة"
            >
              <Link
                href="/el-9offa"
                className="tooltip flex flex-col items-center justify-center"
              >
                <ShoppingBag className="hover:text-primary" />
              </Link>
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavItems;
