import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import styles from "../styles/Home.module.css";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Sign in", href: "/signin" },
  { text: "Sign up", href: "/signup" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <div className={styles.NoPadding}>
      <div className={styles.someCSS}>
        <header>
          <nav>
            <Link href={"/"} className={styles.not_clickable}>
                <h1>Welcome</h1>
            </Link>
            <div
              onClick={() => setNavActive(!navActive)}
              className={styles.nav__menu_bar}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={`${navActive ? styles.nav__menu_list.active : styles.nav__menu_list}`}>
              {MENU_LIST.map((menu, idx) => (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                >
                  <NavItem active={activeIdx === idx} {...menu} />
                </div>
              ))}
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;