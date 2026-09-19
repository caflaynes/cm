import React from "react";
import styles from "./Hero.module.scss";

import mountainPhoto from "./../../images/placeholders/1022317184135886711.jpg";
import travelPhoto from "./../../images/placeholders/113856696826524513.jpg";
import portraitPhoto from "./../../images/placeholders/195414071327234887.jpg";
import filmPhotoOne from "./../../images/placeholders/2322237303125993.jpg";
import filmPhotoTwo from "./../../images/placeholders/3940718421009415.jpg";
import camera from "./../../images/cameras/panasonic_lumix_1.avif";

const Hero: React.FC = () => {
   return (
      <section id="home" className={styles.hero} aria-labelledby="hero-heading">
         <div className={styles.hero__canvas}>
            <div className={styles.hero__copy}>
               <p className={styles.hero__kicker}>CAMERAS FOR A MORE</p>
               <h1 id="hero-heading">
                  <span className={styles.hero__serif}>Meaningful</span>
                  <span className={styles.hero__script}>Tomorrow</span>
               </h1>
               <p className={styles.hero__description}>
                  Rent a camera. Keep the moments. High-quality cameras for your
                  trips, dates, events, and everyday stories in Davao City.
               </p>
               <a className={styles.hero__cta} href="#cameras">
                  BROWSE CAMERAS <span aria-hidden="true">→</span>
               </a>
            </div>

            <div className={styles.hero__visual} aria-label="ClickMate memory collage">
               <figure className={`${styles.hero__polaroid} ${styles.hero__mountain}`}>
                  <img src={mountainPhoto} alt="" />
                  <figcaption>Davao, always a good idea.</figcaption>
               </figure>

               <figure className={`${styles.hero__polaroid} ${styles.hero__portrait}`}>
                  <img src={portraitPhoto} alt="" />
               </figure>

               <div className={styles.hero__filmstrip} aria-hidden="true">
                  <div><img src={filmPhotoOne} alt="" /></div>
                  <div><img src={filmPhotoTwo} alt="" /></div>
                  <div><img src={travelPhoto} alt="" /></div>
               </div>

               <div className={styles.hero__note}>
                  Collect<br />
                  Moments.<br />
                  Not Things.
                  <span>♡</span>
               </div>

               <div className={styles.hero__memoryNote}>
                  Good<br />
                  Photos.<br />
                  Better<br />
                  Memories.
               </div>

               <img className={styles.hero__camera} src={camera} alt="" />

               <div className={styles.hero__stamp}>
                  <span>20</span>
                  <small>POSTAGE</small>
               </div>

               <div className={styles.hero__flowerCluster} aria-hidden="true">
                  <span>✿</span>
                  <span>✤</span>
                  <span>✿</span>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
