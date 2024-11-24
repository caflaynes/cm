import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
   return (
      <>
         <section className={styles.hero}>
            <div>
               <h1>Hero Section</h1>
            </div>
         </section>
      </>
   );
};

export default Hero;
