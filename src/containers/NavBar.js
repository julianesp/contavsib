"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.scss";

const NavBar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [imageError, setImageError] = useState({});
  const menuRef = useRef(null);

  // Define unique ID for the logo image
  const logoImageId = "navbar-logo";

  // Solution for hydration errors
  const [isLoaded, setIsLoaded] = useState(false);

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
    setIsLoaded(true);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  if (!isLoaded) return null;

  return (
    <div
      className={`${styles.container}`}
      ref={menuRef}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className={styles.logo}>
        <Link href="/" aria-label="Ir a la página principal">
          <div className={styles.container__principal}>
            <Image
              alt="ContaVsib - Logo de la empresa"
              src="https://firebasestorage.googleapis.com/v0/b/contavsib-b6b5e.appspot.com/o/images%2Fbudget.png?alt=media&token=3cd18cca-2831-4641-9499-216726841fd0"
              width={40}
              height={40}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              loading="lazy"
              quality={85}
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+MTMftoJJoNY6mHQvGgBFO15tquD7xZg="
              onError={() =>
                setImageError((prev) => ({ ...prev, [logoImageId]: true }))
              }
            />
          </div>
        </Link>
      </div>

      <nav className={styles.nav_container}>
        <ul
          className={`${styles.enlaces__menu} ${
            burgerOpen ? styles.open : styles.closed
          }`}
          role="menubar"
        >
          <li role="none">
            <Link
              href="/"
              role="menuitem"
              onClick={handleLinkClick}
              title="Ir a la página principal"
            >
              Inicio
            </Link>
          </li>
          <li role="none">
            <Link
              href="#servicios"
              role="menuitem"
              onClick={handleLinkClick}
              title="Ver servicios contables"
            >
              Servicios
            </Link>
          </li>
          <li role="none">
            <Link
              href="#soluciones"
              role="menuitem"
              onClick={handleLinkClick}
              title="Ver soluciones empresariales"
            >
              Soluciones
            </Link>
          </li>
          <li role="none">
            <Link
              href="#contacto"
              role="menuitem"
              onClick={handleLinkClick}
              title="Información de contacto"
              scroll={false}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.circle}>
        <button
          onClick={menuBurger}
          aria-label={burgerOpen ? "Cerrar menu" : "Abrir menu"}
          aria-controls="mobile-menu"
          aria-expanded={burgerOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
