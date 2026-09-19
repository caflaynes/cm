import React from "react";
import styles from "./Details.module.scss";
import logo from "./../../images/logo.svg";

import filmOne from "./../../images/placeholders/Change Your Perspective.jpg";
import filmTwo from "./../../images/placeholders/Green vibes.jpg";
import filmThree from "./../../images/placeholders/Jasmin.jpg";
import landscape from "./../../images/placeholders/ethereal shoot.jpg";

const CameraIcon = () => (
   <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M10 15h8l3-5h7l3 5h7a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V19a4 4 0 0 1 4-4Z" />
      <circle cx="24" cy="28" r="8" />
   </svg>
);

const LeafIcon = () => (
   <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 41V22M24 29c-8 0-12-5-12-12 7 0 12 4 12 12ZM24 24c0-8 5-13 13-13 0 8-5 13-13 13Z" />
   </svg>
);

const HeartIcon = () => (
   <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 40S7 29 7 17c0-6 4-10 9-10 4 0 7 2 8 6 1-4 4-6 8-6 5 0 9 4 9 10 0 12-17 23-17 23Z" />
   </svg>
);

const Botanical = ({ className }: { className: string }) => (
   <svg className={className} viewBox="0 0 150 320" aria-hidden="true">
      <path d="M76 312C72 255 75 204 86 158C96 111 112 69 132 17" />
      <ellipse cx="89" cy="247" rx="29" ry="13" transform="rotate(-35 89 247)" />
      <ellipse cx="59" cy="203" rx="31" ry="14" transform="rotate(34 59 203)" />
      <ellipse cx="101" cy="157" rx="30" ry="13" transform="rotate(-39 101 157)" />
      <ellipse cx="70" cy="111" rx="27" ry="12" transform="rotate(32 70 111)" />
      <ellipse cx="119" cy="67" rx="26" ry="11" transform="rotate(-43 119 67)" />
   </svg>
);

const Details: React.FC = () => {
   return (
      <section className={styles.details}>
         <div id="how-it-works" className={styles.details__benefits}>
            <div className={styles.details__leftFilmstrip} aria-hidden="true">
               <div><img src={filmOne} alt="" /></div>
               <div><img src={filmTwo} alt="" /></div>
               <div><img src={filmThree} alt="" /></div>
            </div>

            <aside className={styles.details__leftNote}>
               More<br />
               Adventures<br />
               Here! ♡
            </aside>

            <Botanical className={`${styles.details__botanical} ${styles.details__botanicalRight}`} />

            <h2>WHY RENT WITH CLICKMATE?</h2>

            <div className={styles.details__benefitGrid}>
               <article>
                  <CameraIcon />
                  <h3>Quality Gear</h3>
                  <p>Well-maintained and ready for your next adventure.</p>
               </article>

               <article>
                  <LeafIcon />
                  <h3>Flexible Rentals</h3>
                  <p>Daily and multi-day options for your plans.</p>
               </article>

               <article>
                  <HeartIcon />
                  <h3>Local and Trusted</h3>
                  <p>Based in Davao City, for creators, travelers, and everyone in between.</p>
               </article>
            </div>

            <aside className={styles.details__worldNote}>
               It’s not just<br />
               a camera.<br /><br />
               It’s a different<br />
               way of seeing<br />
               the world.
               <span>♡</span>
            </aside>
         </div>

         <div id="about" className={styles.details__story}>
            <div className={styles.details__mountains} aria-hidden="true">
               <i /><i /><i />
            </div>

            <div className={styles.details__storyFilmstrip} aria-hidden="true">
               <div><img src={filmOne} alt="" /></div>
               <div><img src={filmTwo} alt="" /></div>
               <div><img src={filmThree} alt="" /></div>
            </div>

            <blockquote className={styles.details__quote}>
               “Some moments<br />
               deserve more<br />
               than a phone camera.”
            </blockquote>

            <figure className={styles.details__landscapeCard}>
               <img src={landscape} alt="" />
            </figure>

            <div className={styles.details__seeDavao}>
               See Davao<br />
               <span>Differently</span>
            </div>

            <div className={styles.details__postmark}>
               DAVAO CITY
               <span>PHILIPPINES</span>
            </div>
         </div>

         <footer id="contact" className={styles.details__footer}>
            <div className={styles.details__footerBrand}>
               <img src={logo} alt="ClickMate Rentals" />
               <span>CLICKMATE RENTALS</span>
            </div>

            <nav aria-label="Footer navigation">
               <a href="#cameras">CAMERAS</a>
               <a href="#home">PEOPLE</a>
               <a href="#about">PLACES</a>
               <a href="#about">STORIES</a>
            </nav>

            <div className={styles.details__social}>
               <span aria-hidden="true">◎</span>
               <span aria-hidden="true">●</span>
               <i />
               <p>Keep shooting ♡</p>
            </div>
         </footer>
      </section>
   );
};

export default Details;
