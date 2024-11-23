import React from "react";
import styles from "./Navbar.module.scss";

// interface NavbarProps {
   
// }

const Navbar: React.FC = () => {
   return (
      <>
         <div className={styles.navbar}>
            <div className={styles.navbar__brand}></div>
         </div>
      </>
   );
};

export default Navbar;
