import React from "react";
import styles from "./Navbar.module.scss";

interface NavbarProps {
   brandName: string;
}

const Navbar: React.FC<NavbarProps> = ({ brandName }) => {
   return (
      <>
         <div className={styles.navbar}>
            <div className={styles.navbar__brand}>{brandName}</div>
         </div>
      </>
   );
};

export default Navbar;
