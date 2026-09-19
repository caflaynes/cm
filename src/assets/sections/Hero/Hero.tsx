import React from "react";
import styles from "./Hero.module.scss";
import camera from "./../../images/cameras/panasonic_lumix_1.avif";

type MediaSlotProps = {
   className: string;
   slot: string;
   caption?: string;
};

const MediaSlot = ({ className, slot, caption }: MediaSlotProps) => (
   <figure className={className} data-media-slot={slot}>
      <div className={styles.hero__mediaFill} aria-hidden="true" />
      {caption ? <figcaption>{caption}</figcaption> : null}
   </figure>
);

const FilmStrip = () => (
   <div className={styles.hero__filmstrip} data-media-slot="hero-film-strip" aria-hidden="true">
      <div className={styles.hero__filmFrame} />
      <div className={styles.hero__filmFrame} />
      <div className={styles.hero__filmFrame} />
   </div>
);

const Hero: React.FC = () => {
   return (
      <section id="home" className={styles.hero} aria-labelledby="hero-heading">
         <div className={styles.hero__canvas}>
            <div className={styles.hero__edgeMassLeft} aria-hidden="true" />
            <div className={styles.hero__edgeMassRight} aria-hidden="true" />
            <div className={styles.hero__texturePatch} aria-hidden="true" />

            <article className={styles.hero__copy}>
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
            </article>

            <div className={styles.hero__visual}>
               <MediaSlot
                  className={`${styles.hero__polaroid} ${styles.hero__landscape}`}
                  slot="hero-landscape"
                  caption="Davao, always a good idea."
               />
               <MediaSlot
                  className={`${styles.hero__polaroid} ${styles.hero__photographer}`}
                  slot="hero-photographer"
               />
               <FilmStrip />

               <aside className={styles.hero__collectNote}>
                  Collect<br />
                  Moments.<br />
                  Not Things.
                  <span>♡</span>
               </aside>

               <aside className={styles.hero__goodPhotos}>
                  Good<br />
                  Photos.<br />
                  Better<br />
                  Memories.
               </aside>

               <div className={styles.hero__stamp} aria-hidden="true">
                  <strong>20</strong>
                  <span>POSTAGE</span>
                  <small>✿</small>
               </div>

               <div className={styles.hero__flowerMass} data-media-slot="hero-flowers" aria-hidden="true" />

               <img className={styles.hero__camera} src={camera} alt="" />
            </div>

            <aside className={styles.hero__perspectiveNote}>
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
