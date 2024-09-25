"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.scss";

const NavBar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const menuRef = useRef(null);

  const menuBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const handleLinkClick = () => {
    setBurgerOpen(false); // Close the menu when a link is clicked
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setBurgerOpen(false); // Close the menu when clicking outside
    }
  };

  // to hidden menu nav
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={`${styles.container}`} ref={menuRef}>
      <Link href="/">
        <div className={styles["container__principal"]}>
          {/* <Logo /> */}
          <Image
            alt="Logo"
            src="https://firebasestorage.googleapis.com/v0/b/contavsib-b6b5e.appspot.com/o/images%2Fbudget.png?alt=media&token=3cd18cca-2831-4641-9499-216726841fd0"
            width={40}
            height={40}
          />
        </div>
      </Link>

      <div className={styles.circle} onClick={menuBurger}>
        <button>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <menu
        className={`${styles["enlaces__menu"]} ${
          burgerOpen ? styles.open : styles.closed
        }`}
      >
        <Link href="/" onClick={handleLinkClick}>
          Inicio
        </Link>

        <Link href="/Blog" onClick={handleLinkClick}>
          Blog
        </Link>

        <Link href="/Profile" onClick={handleLinkClick}>
          Acerca de
        </Link>
      </menu>
    </div>
  );
};

export default NavBar;
