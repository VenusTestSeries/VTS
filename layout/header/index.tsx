import React from "react";
import Link from "next/link";
import Image from "next/image";
import css from "../../layout/css/header.module.scss";
import useOnClickOutside from "hooks/useclick";
import Add from "lib/icons/Add";
import useNavbar from "store/hooks/use-navbar";
import SearchIcon from "lib/icons/SearchIcon";
import UserIcon from "lib/icons/UserIcon";
import HeartOutlineIcon from "lib/icons/HeartOutlineIcon";

interface HeaderProps {
  state: boolean;
  dispatch?: any;
}

/**************************
Header
***************************/
const Header = () => {
  const { navBarState, toggleNavbar } = useNavbar();

  const containerRef = useOnClickOutside(() => toggleNavbar(false));
  return (
    <header className={css.midheader}>
      <div className={css.logowithnav}>
        <div className={css.logo}>Logo</div>

        <div className={css.navlink}>
          <ul>
            <li>
              <a href="#">menu1</a>
            </li>
            <li>
              <a href="#">menu2</a>
            </li>
            <li>
              <a href="#">menu3</a>
            </li>
            <li>
              <a href="#">menu3</a>
            </li>
            <li>
              <a href="#">menu3</a>
            </li>
            <li>
              <a href="#">menu3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.searchwithaction}>
        <div className={css.headersearchbar}>
          <input type="text" placeholder="Search for anything" />
          <button>
            <SearchIcon color="#e6e6e6"></SearchIcon>
          </button>
        </div>
        <div className={css.siteaction}>
          <ul>
            <li className={css.loginlink}>
              <a href="#">
                <UserIcon />
                <span>Login</span>
              </a>
              <div className={css.login}>
                <h4> Welcome</h4>
                <p>To access account and manage orders</p>
                <button>LOGIN / SIGNUP</button>
              </div>
            </li>

            <li>
              <a href="#">
                <HeartOutlineIcon />
                <span>Wishlist</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    // <header ref={containerRef} className={css["container"]}>
    //   <section className={css["backdrop"]}>
    //     <div className={css["menubar"]}>
    //       <div className={css["navbutton"]}>
    //         <Link href="/">
    //           <button aria-label="go to home" className={css["logo"]}>
    //             <CircleDotted />
    //           </button>
    //         </Link>
    //         <MenuBar
    //           dispatch={() => toggleNavbar(!navBarState.isNav)}
    //           state={navBarState.isNav}
    //         />
    //       </div>
    //     </div>
    //     <NavigationBar state={navBarState.isNav} />
    //   </section>
    // </header>
  );
};

export default Header;

const NavigationBar = ({ state }: HeaderProps) => {
  return (
    <nav className={`${css["navigation"]} ${state ? css["mobile"] : ""}`}>
      <div className={css["navbar"]}>
        {navigationdata.map((l, i) => (
          <Link key={i} href={l.path} className={css["links"]}>
            {l.title}
          </Link>
        ))}
      </div>
      <div className={css["login"]}>
        {/* <p>Hii, Simple</p> */}
        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  );
};

const MenuBar = ({ state, dispatch }: HeaderProps) => {
  return (
    <i onClick={dispatch}>
      <Add
        size={20}
        style={{
          transform: `rotate(${state ? 45 : 0}deg)`,
          transition: "transform 100ms ease-in-out",
        }}
      />
    </i>
  );
};

const navigationdata = [
  {
    title: "Features",
    path: "/features",
  },
  {
    title: "Showcase",
    path: "/showcase",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];