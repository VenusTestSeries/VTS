import React from "react";
import Link from "next/link";
import css from "styles/header.module.scss";
import useOnClickOutside from "hooks/useclick";
import CircleDotted from "lib/icons/CircleDotted";
import Add from "lib/icons/Add";
import useNavbar from "store/hooks/use-navbar";
import SearchIcon from "lib/icons/SearchIcon";

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
    <header className="midheader">
      <div className="logo">Logo</div>
      <div className="headersearchbar">
        <input type="text" placeholder="Search for anything" />
        <button>
          <SearchIcon color="#000"></SearchIcon>
        </button>
      </div>
      <div className="navlink">
        <ul>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </div>
      <div className="siteaction">
        <ul>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
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
