import React from "react";
import styles from "./Navbar.module.scss";
import logo from './../../images/logo.svg';



const Navbar: React.FC = () => {
   return (
      <>
         <div className={styles.navbar}>
            <div className={styles.navbar__wrapper}>
               <div className={styles.navbar__brand}>
                  <a href="#">
                     <img src={logo} alt="ClickMate Logo" />
                  </a>
               </div>
               <div className={styles.navbar__menu}>
                  <ul className={styles.navbar__list}>
                     <li className={styles.navbar_item}>
                        <a href="#">HOME</a>
                     </li>
                     <li className={styles.navbar_item}>
                        <a href="#">CAMERAS</a>
                     </li>
                     <li className={styles.navbar_item}>
                        <a href="#">PRICING</a>
                     </li>
                     <li className={styles.navbar_item}>
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
