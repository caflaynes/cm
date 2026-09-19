import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "./../../images/logo.svg";

const Navbar: React.FC = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const closeMenu = () => setIsMenuOpen(false);

   return (
      <header className={styles.navbar}>
         <div className={styles.navbar__canvas}>
            <a
               className={styles.navbar__brand}
               href="#home"
               onClick={closeMenu}
               aria-label="ClickMate Rentals home"
            >
               <img src={logo} alt="ClickMate Rentals" />
            </a>

            <button
               className={`${styles.navbar__toggle} ${isMenuOpen ? styles.navbar__toggleOpen : ""}`}
               type="button"
               aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
               aria-expanded={isMenuOpen}
               aria-controls="primary-navigation"
               onClick={() => setIsMenuOpen((open) => !open)}
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
               <a href="#home" onClick={closeMenu}>HOME</a>
               <a href="#cameras" onClick={closeMenu}>CAMERAS</a>
               <a href="#how-it-works" onClick={closeMenu}>HOW IT WORKS</a>
               <a href="#about" onClick={closeMenu}>ABOUT</a>
               <a href="#contact" onClick={closeMenu}>CONTACT</a>
            </nav>

            <div className={styles.navbar__actions}>
               <p className={styles.navbar__location}>
                  Davao City<br />
                  Philippines <span aria-hidden="true">⌖</span>
               </p>
               <a className={styles.navbar__rent} href="#cameras">
                  RENT NOW <span aria-hidden="true">→</span>
               </a>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
