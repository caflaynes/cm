// export default Hero;

import React from "react";
import Button from "./../../components/Button/Button";
import styles from "./Hero.module.scss";
import hello from "./../../images/hello.svg";

const Hero: React.FC = () => {
   const handleScroll = () => {
      const cameraSection = document.getElementById("cameras");
      if (cameraSection) {
         cameraSection.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <>
         <section className={styles.hero}>
            <div className={styles.hero__layer1}></div>
            <div className={styles.hero__layer2}></div>
            <div className={styles.hero__layer3}></div>

            <div className={styles.hero__wrapper}>
               <div className={styles.hero__content}>
                  <img
                     className={styles.hero__greeting}
                     src={hello}
                     alt="Hello!"
                  />
                  <h2 className={styles.hero__heading}>
                     Welcome to ClickMate Rentals!
                  </h2>
                  <p className={styles.hero__description}>
                     Capture every moment effortlessly with our high-quality,
                     affordable cameras. Our flexible rental options are
                     designed to help you find the perfect camera for your
                     projects and events, allowing you to focus on what truly
                     matters— creating unforgettable memories.
                  </p>
                  <h3 className={styles.hero__subheading}>
                     Ready to capture your shot?
                  </h3>
                  <p className={styles.hero__ctaText}>
                     Click the button below to get started!
                  </p>
                  <Button
                     onClick={handleScroll}
                     variant="primary"
                     size="medium"
                  >
                     View Cameras
                  </Button>
               </div>
            </div>
         </section>
      </>
   );
};

export default Hero;
