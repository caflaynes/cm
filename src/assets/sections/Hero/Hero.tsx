import React from "react";
import styles from "./Hero.module.scss";

import mountainPhoto from "./../../images/placeholders/1022317184135886711.jpg";
import portraitPhoto from "./../../images/placeholders/195414071327234887.jpg";
import filmOne from "./../../images/placeholders/2322237303125993.jpg";
import filmTwo from "./../../images/placeholders/3940718421009415.jpg";
import filmThree from "./../../images/placeholders/4503668374211989.jpg";
import foliageOne from "./../../images/placeholders/ivy plant.jpg";
import foliageTwo from "./../../images/placeholders/Planto.jpg";
import camera from "./../../images/cameras/panasonic_lumix_1.avif";

const Hero: React.FC = () => {
   return (
      <section id="home" className={styles.hero} aria-labelledby="hero-heading">
         <div className={styles.hero__canvas}>
            <img className={`${styles.hero__foliage} ${styles.hero__foliageLeft}`} src={foliageOne} alt="" />
            <img className={`${styles.hero__foliage} ${styles.hero__foliageRight}`} src={foliageTwo} alt="" />

            <article className={styles.hero__copy}>
               <p className={styles.hero__kicker}>CAMERAS FOR A MORE</p>
               <h1 id="hero-heading">
                  <span className={styles.hero__serif}>Meaningful</span>
                  <span className={styles.hero__script}>Tomorrow</span>
               </h1>
               <p className={styles.hero__description}>
                  Rent a camera. Keep the moments.<br />
                  High-quality cameras for your trips,<br />
                  dates, events, and everyday stories<br />
                  in Davao City.
               </p>
               <a className={styles.hero__cta} href="#cameras">
                  BROWSE CAMERAS <span aria-hidden="true">→</span>
               </a>
            </article>

            <div className={styles.hero__visual} aria-label="ClickMate memory collage">
               <figure className={`${styles.hero__polaroid} ${styles.hero__mountain}`}>
                  <img src={mountainPhoto} alt="" />
                  <figcaption>Davao, always a<br />good idea.</figcaption>
               </figure>

               <figure className={`${styles.hero__polaroid} ${styles.hero__portrait}`}>
                  <img src={portraitPhoto} alt="" />
               </figure>

               <div className={styles.hero__filmstrip} aria-hidden="true">
                  <div><img src={filmOne} alt="" /></div>
                  <div><img src={filmTwo} alt="" /></div>
                  <div><img src={filmThree} alt="" /></div>
               </div>

               <aside className={styles.hero__note}>
                  Collect<br />
                  Moments.<br />
                  Not Things.
                  <span>♡</span>
               </aside>

               <aside className={styles.hero__memoryNote}>
                  Good<br />
                  Photos.<br />
                  Better<br />
                  Memories.
               </aside>

               <div className={styles.hero__stamp}>
                  <strong>20</strong>
                  <span>POSTAGE</span>
                  <small>✿</small>
               </div>

               <img className={styles.hero__camera} src={camera} alt="" />

               <div className={styles.hero__flowers} aria-hidden="true">
                  <span>✿</span><span>✾</span><span>✿</span>
               </div>
            </div>

            <aside className={styles.hero__sideNote}>
               Same<br />
               Stories.<br />
               Different<br />
               Perspective
               <span>♡</span>
            </aside>
         </div>
      </section>
   );
};

export default Hero;
