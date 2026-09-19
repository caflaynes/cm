import React from "react";
import styles from "./Cameras.module.scss";

import lumix from "./../../images/cameras/panasonic_lumix_1.avif";
import sony from "./../../images/cameras/panasonic_lumix_3.avif";
import nikon from "./../../images/cameras/panasonic_lumix_4.avif";

const cameraList = [
   {
      id: 1,
      name: "Panasonic Lumix DMC-SZ10",
      description: "Easy to carry, beginner-friendly, and made for everyday memory keeping.",
      price: "₱250/day",
      image: lumix,
   },
   {
      id: 2,
      name: "Samsung S630",
      description: "Compact and nostalgic. A fun pick for casual shoots, dates, and city walks.",
      price: "₱350/day",
      image: sony,
   },
   {
      id: 3,
      name: "Samsung ES90",
      description: "A simple digital companion for trips, portraits, and spontaneous moments.",
      price: "₱400/day",
      image: nikon,
   },
   {
      id: 4,
      name: "Samsung ES28",
      description: "Small, straightforward, and ready for your next little adventure.",
      price: "₱400/day",
      image: nikon,
   },
   {
      id: 5,
      name: "Sony S700",
      description: "For warm, imperfect, memorable photos that feel different from your phone.",
      price: "₱400/day",
      image: nikon,
   },
   {
      id: 6,
      name: "Nikon Coolpix L32",
      description: "A pocketable camera for people, places, food, and everything in between.",
      price: "₱400/day",
      image: nikon,
   },
   {
      id: 7,
      name: "Nikon Coolpix S2600",
      description: "A lightweight option for everyday stories and weekend plans.",
      price: "₱400/day",
      image: nikon,
   },
];

const Cameras: React.FC = () => {
   return (
      <section className={styles.cameras} id="cameras" aria-labelledby="cameras-heading">
         <div className={styles.cameras__wrapper}>
            <div className={styles.cameras__headingBlock}>
               <span className={styles.cameras__kicker}>CAMERAS FOR A BRIGHTER TOMORROW</span>
               <h2 id="cameras-heading">Pick one for your next story.</h2>
               <p>Same people. Same places. A different way to remember them.</p>
            </div>

            <div className={styles.cameras__grid}>
               {cameraList.map((camera, index) => (
                  <article key={camera.id} className={styles.cameras__card}>
                     <div className={styles.cameras__tape} aria-hidden="true" />
                     <div className={styles.cameras__imageContainer}>
                        <img
                           className={styles.cameras__image}
                           src={camera.image}
                           alt={camera.name}
                        />
                     </div>
                     <div className={styles.cameras__content}>
                        <span className={styles.cameras__number}>
                           {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className={styles.cameras__name}>{camera.name}</h3>
                        <p className={styles.cameras__text}>{camera.description}</p>
                        <div className={styles.cameras__footer}>
                           <p className={styles.cameras__price}>{camera.price}</p>
                           <button className={styles.cameras__button} type="button">
                              Rent Now
                           </button>
                        </div>
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Cameras;
