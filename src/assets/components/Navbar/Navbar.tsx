import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import logo from "./../../images/logo.svg";

const Navbar: React.FC = () => {
   const [isSticky, setIsSticky] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 30) {
            setIsSticky(true);
         } else {
            setIsSticky(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);
   return (
      <>
         <div className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
            <div className={styles.navbar__wrapper}>
               <div className={styles.navbar__brand}>
                  <a href="#">
                     <img src={logo} alt="ClickMate Logo" />
                  </a>
               </div>
               <div className={styles.navbar__menu}>
                  <ul className={styles.navbar__list} role="list">
                     <li className={styles.navbar__item} data-text="HOME">
                        <a href="#">HOME</a>
                     </li>
                     <li className={styles.navbar__item}>
                        <a href="#cameras">DIGITAL CAMERAS</a>
                     </li>
                     <li className={styles.navbar__item}>
                        <a href="#">HOW IT WORKS</a>
                     </li>
                     <li className={styles.navbar__item}>
                        <a href="#">PRICING</a>
                     </li>
                     <li className={styles.navbar__item}>
                        <a href="#">CONTACT US</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
};

export default Navbar;
