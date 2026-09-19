import React from "react";
import styles from "./Hero.module.scss";

import mountainPhoto from "./../../images/placeholders/Green vibes.jpg";
import portraitPhoto from "./../../images/placeholders/ethereal shoot.jpg";
import filmOne from "./../../images/placeholders/Change Your Perspective.jpg";
import filmTwo from "./../../images/placeholders/Jasmin.jpg";
import filmThree from "./../../images/placeholders/Cute (1).jpg";
import camera from "./../../images/cameras/panasonic_lumix_1.avif";

const LeafBranch = ({ className }: { className: string }) => (
   <svg className={className} viewBox="0 0 180 420" aria-hidden="true">
      <path d="M93 415C86 345 82 276 93 211C102 154 118 95 143 20" />
      <ellipse cx="105" cy="339" rx="31" ry="15" transform="rotate(-37 105 339)" />
      <ellipse cx="69" cy="292" rx="33" ry="15" transform="rotate(34 69 292)" />
      <ellipse cx="113" cy="246" rx="34" ry="16" transform="rotate(-39 113 246)" />
      <ellipse cx="76" cy="195" rx="31" ry="14" transform="rotate(32 76 195)" />
      <ellipse cx="129" cy="147" rx="32" ry="14" transform="rotate(-42 129 147)" />
      <ellipse cx="98" cy="101" rx="28" ry="13" transform="rotate(29 98 101)" />
      <ellipse cx="148" cy="61" rx="27" ry="12" transform="rotate(-48 148 61)" />
   </svg>
);

const Hero: React.FC = () => {
   return (
      <section id="home" className={styles.hero} aria-labelledby="hero-heading">
         <div className={styles.hero__canvas}>
            <LeafBranch className={`${styles.hero__leafBranch} ${styles.hero__leafBranchLeft}`} />
            <LeafBranch className={`${styles.hero__leafBranch} ${styles.hero__leafBranchRight}`} />

            <div className={styles.hero__paperPatchOne} />
            <div className={styles.hero__paperPatchTwo} />

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

               <div className={styles.hero__clover} aria-hidden="true">
                  <span>♣</span>
                  <span>♣</span>
                  <span>♣</span>
               </div>

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
