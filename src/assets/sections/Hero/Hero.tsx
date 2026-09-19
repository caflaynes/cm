import React from "react";
import Button from "./../../components/Button/Button";
import styles from "./Hero.module.scss";
import logo from "./../../images/logo.svg";
import photo1 from "./../../images/placeholders/140806235439931.jpg";
import photo2 from "./../../images/placeholders/1970393584334891.jpg";
import photo3 from "./../../images/placeholders/2322237303125993.jpg";
import photo4 from "./../../images/placeholders/3940718421009415.jpg";
import photo5 from "./../../images/placeholders/4503668374211989.jpg";
import photo6 from "./../../images/placeholders/63472675994358110.jpg";
import photo7 from "./../../images/placeholders/63965257213259025.jpg";

const Hero: React.FC = () => {
   const handleScroll = () => {
      document.getElementById("cameras")?.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <section id="home" className={styles.hero} aria-labelledby="hero-heading">
         <div className={styles.hero__collage}>
            <article className={`${styles.scrap} ${styles.hero__headline}`}>
               <p className={styles.hero__headlineText}>Good<br />Cameras.<br />Brighter<br />Stories.</p>
               <span className={styles.hero__rule} />
               <p className={styles.hero__smallCopy}>Rent.<br />Shoot.<br />Explore.<br />Repeat.</p>
            </article>

            <figure className={`${styles.photo} ${styles.hero__leafPhoto}`}>
               <img src={photo1} alt="" />
            </figure>

            <article className={`${styles.scrap} ${styles.hero__mantra}`}>
               <p>Collect<br />Moments.<br /><em>Not Things.</em></p>
               <span>♡</span>
            </article>

            <div className={styles.hero__filmstrip} aria-hidden="true">
               {[photo2, photo3, photo4].map((src, index) => (
                  <div key={src} className={styles.hero__filmFrame}>
                     <img src={src} alt="" />
                     <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
               ))}
            </div>

            <article className={`${styles.scrap} ${styles.hero__location}`}>
               <p className={styles.hero__locationLead}>Some places<br />feel like home.</p>
               <span className={styles.hero__rule} />
               <p>Davao City<br />Philippines</p>
               <span className={styles.hero__pin}>●</span>
            </article>

            <article className={`${styles.scrap} ${styles.hero__adventure}`}>
               <p>Same Cameras.<br /><em>New Adventures.</em></p>
               <span>♡</span>
            </article>

            <figure className={`${styles.photo} ${styles.hero__cameraPhoto}`}>
               <img src={photo5} alt="" />
               <figcaption>Davao looks better through a camera. ♡</figcaption>
            </figure>

            <figure className={`${styles.photo} ${styles.hero__cityPhoto}`}>
               <img src={photo6} alt="" />
            </figure>

            <article className={styles.hero__brandCard}>
               <img src={logo} alt="" className={styles.hero__logo} />
               <p className={styles.hero__eyebrow}>CLICKMATE RENTALS</p>
               <h1 id="hero-heading">For the stories you want to keep.</h1>
               <p className={styles.hero__brandCopy}>
                  Digital cameras for everyday adventures, little trips, and the moments that deserve more than a phone photo.
               </p>
               <Button onClick={handleScroll} variant="primary" size="medium">
                  Browse Cameras
               </Button>
            </article>

            <article className={`${styles.scrap} ${styles.hero__categories}`}>
               <p>Digital Cameras</p>
               <p>Film Cameras</p>
               <p>Action Cameras</p>
               <p>Lenses</p>
               <p>Accessories</p>
               <span>For your next story</span>
            </article>

            <figure className={`${styles.photo} ${styles.hero__memoryPhoto}`}>
               <img src={photo7} alt="" />
               <figcaption>People · Places · Moments</figcaption>
            </figure>

            <article className={`${styles.scrap} ${styles.hero__quote}`}>
               <p>Photographs make time feel slower and life feel fuller.</p>
               <span>♡</span>
            </article>
         </div>
      </section>
   );
};

export default Hero;
