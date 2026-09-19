import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "./../../images/logo.svg";

const Navbar: React.FC = () => {
   const [isSticky, setIsSticky] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => setIsSticky(window.scrollY > 24);
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   useEffect(() => {
      if (!isMenuOpen) return;

      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === "Escape") setIsMenuOpen(false);
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
   }, [isMenuOpen]);

   const closeMenu = () => setIsMenuOpen(false);

   return (
      <header className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
         <div className={styles.navbar__wrapper}>
            <a className={styles.navbar__brand} href="#home" onClick={closeMenu}>
               <img src={logo} alt="ClickMate Rentals" />
            </a>

            <button
               className={`${styles.navbar__toggle} ${isMenuOpen ? styles.navbar__toggleOpen : ""}`}
               type="button"
               aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
               aria-expanded={isMenuOpen}
               aria-controls="primary-navigation"
               onClick={() => setIsMenuOpen((current) => !current)}
            >
               <span />
               <span />
               <span />
            </button>

            <nav
               id="primary-navigation"
               className={`${styles.navbar__menu} ${isMenuOpen ? styles.navbar__menuOpen : ""}`}
               aria-label="Primary navigation"
            >
               <ul className={styles.navbar__list} role="list">
                  <li><a href="#home" onClick={closeMenu}>HOME</a></li>
                  <li><a href="#cameras" onClick={closeMenu}>CAMERAS</a></li>
                  <li><a href="#how-it-works" onClick={closeMenu}>HOW IT WORKS</a></li>
                  <li><a href="#pricing" onClick={closeMenu}>PRICING</a></li>
                  <li><a href="#contact" onClick={closeMenu}>CONTACT</a></li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Navbar;
