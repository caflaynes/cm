import React from "react";
import styles from './Slogan.module.scss';

interface SloganProps {
   slogan: string;
}

const Slogan: React.FC<SloganProps> = ({ slogan }) => {
   return (
      <div className={styles.slogan}>
         <div className={styles.slogan__wrapper}>
            <p className={styles.sloga__text}>{slogan}</p>
         </div>
      </div>
   );
};

export default Slogan;
