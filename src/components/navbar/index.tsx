import { signIn, signOut, useSession } from "next-auth/react";
import NavItems from "./nav-items";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="navbar bg-base-100 px-12">
      {/* LOGO */}
      <div className="navbar-start">
        <a className="t btn-ghost btn font-courgette text-lg normal-case">
          <div className="flex flex-col">
            <span>
              3andekchy <span className="text-primary">?</span>
            </span>
            <span className="-mt-2">3andi</span>
          </div>
        </a>
      </div>
      {/* NAVIGATION */}
      <NavItems />
      {/* PROFILE */}
      <div className="navbar-end">
        {/* Profile Dropdown */}
        {status === "authenticated" ? (
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                {/* USER IMAGE */}
                <img src={session.user.image || ""} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <span onClick={() => void signOut()}>Logout</span>
              </li>
            </ul>
          </div>
        ) : (
          <button onClick={() => void signIn()} className="btn-primary btn">
            Connecter
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
