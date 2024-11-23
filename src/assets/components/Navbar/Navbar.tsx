import React from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
  brandName: string;
}

const Navbar: React.FC<NavbarProps> = ({ brandName }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <h1>{brandName}</h1>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>About</li>
        <li className={styles.navItem}>Services</li>
        <li className={styles.navItem}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
