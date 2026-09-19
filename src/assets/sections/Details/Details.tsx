import React from "react";
import styles from "./Details.module.scss";
import memoryPhoto from "./../../images/placeholders/113856696826524513.jpg";

const Details: React.FC = () => {
   return (
      <section className={styles.details} aria-label="Rental information">
         <div className={styles.details__wrapper}>
            <div id="how-it-works" className={styles.details__steps}>
               <div className={styles.details__intro}>
                  <span>HOW IT WORKS</span>
                  <h2>Rent. Shoot. Explore. Repeat.</h2>
                  <p>Keep it simple. Pick a camera, confirm your dates, then go make something worth remembering.</p>
               </div>

               <ol className={styles.details__stepList}>
                  <li>
                     <span>01</span>
                     <strong>Choose</strong>
                     <p>Pick the camera that fits the kind of day you have in mind.</p>
                  </li>
                  <li>
                     <span>02</span>
                     <strong>Book</strong>
                     <p>Send your preferred dates and we’ll confirm availability.</p>
                  </li>
                  <li>
                     <span>03</span>
                     <strong>Create</strong>
                     <p>Take it out, enjoy the moment, then return it after your rental.</p>
                  </li>
               </ol>
            </div>

            <div className={styles.details__bottom}>
               <div id="pricing" className={styles.details__pricing}>
                  <p className={styles.details__handwritten}>Good memories, anywhere.</p>
                  <h3>Simple daily rentals.</h3>
                  <p>Camera rates currently start at <strong>₱250/day</strong>. Exact pricing depends on the camera you choose.</p>
                  <a href="#cameras">See camera rates →</a>
               </div>

               <figure className={styles.details__photo}>
                  <img src={memoryPhoto} alt="" />
                  <figcaption>Different stories. Same magic. ♡</figcaption>
               </figure>

               <div id="contact" className={styles.details__contact}>
                  <span>CLICKMATE RENTALS</span>
                  <h3>Here for the good shots.</h3>
                  <p>Davao City, Philippines</p>
                  <p className={styles.details__contactNote}>
                     Contact details and booking links can be added here once the final rental flow is ready.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Details;
