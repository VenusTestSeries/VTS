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
import { useRouter } from "next/router";
import BagIcom from "lib/icons/BagIcom";
import NavBar from "constant/nav-bar";

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

  const { push } = useRouter();

  const [userModel, setUserModel] = React.useState(false);

  const userModelRef = useOnClickOutside(() => setUserModel(false));

  return (
    <header className={css.midheader}>
      <div className="container">
        <div className="d-flex justify-content-spacebetween">
          <div className={css.logowithnav}>
            <div className={css.logo}>
              <Image
                src="./svg/1_Logo-4.svg"
                height={51}
                width={300}
                alt="Logo"
              />
            </div>
          </div>
          <div className={css.searchwithaction}>
            <div className={css.navlink}>
              <ul>
                {NavBar.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item.title}</a>
                  </li>
                ))}
                {/* <li>
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
                </li> */}
              </ul>
            </div>
            <div className={css.siteaction}>
              <ul>
                <li ref={userModelRef} className={css.loginlink}>
                  <a onClick={() => setUserModel(!userModel)}>
                    <UserIcon color="#b3c5ef" />
                    <span>Profile</span>
                  </a>
                  {userModel && (
                    <div className={css.login}>
                      <h4> Welcome</h4>
                      <p>To access account and manage orders</p>
                      <button onClick={() => push("/auth/mobile")}>
                        LOGIN / SIGNUP
                      </button>
                    </div>
                  )}
                </li>

                <li>
                  <a href="#">
                    <HeartOutlineIcon color="#b3c5ef" />
                    <span>Wishlist</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BagIcom color="#b3c5ef" />
                    <span>Bag</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// const NavigationBar = ({ state }: HeaderProps) => {
//   return (
//     <nav className={`${css["navigation"]} ${state ? css["mobile"] : ""}`}>
//       <div className={css["navbar"]}>
//         {navigationdata.map((l, i) => (
//           <Link key={i} href={l.path} className={css["links"]}>
//             {l.title}
//           </Link>
//         ))}
//       </div>
//       <div className={css["login"]}>
//         {/* <p>Hii, Simple</p> */}
//         <Link href="/login">Sign in</Link>
//       </div>
//     </nav>
//   );
// };

// const MenuBar = ({ state, dispatch }: HeaderProps) => {
//   return (
//     <i onClick={dispatch}>
//       <Add
//         size={20}
//         style={{
//           transform: `rotate(${state ? 45 : 0}deg)`,
//           transition: "transform 100ms ease-in-out",
//         }}
//       />
//     </i>
//   );
// };

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
