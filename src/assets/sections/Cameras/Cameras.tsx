import React from "react";
import styles from "./Cameras.module.scss";

import lumix from "./../../images/cameras/panasonic_lumix_2.avif";
import sony from "./../../images/cameras/panasonic_lumix_3.avif";
import nikon from "./../../images/cameras/panasonic_lumix_4.avif";

const cameraList = [
   {
      id: 1,
      name: "LUMIX Digital Camera DMC-SZ10",
      description:
         "Perfect for beginners, with stunning image quality and WiFi capabilities.",
      price: "₱250/day",
      image: lumix,
   },
   {
      id: 2,
      name: "Sony Alpha A6400",
      description:
         "Compact, versatile, and great for vlogging or event photography.",
      price: "₱350/day",
      image: sony,
   },
   {
      id: 3,
      name: "Nikon D750",
      description:
         "Professional-grade DSLR with exceptional performance in low light.",
      price: "₱400/day",
      image: nikon,
   },
];

const Cameras: React.FC = () => {
   return (
      <>
         <section className={styles.cameras} id="cameras">
            <div className={styles.cameras__wrapper}>
               <h2 className={styles.cameras__heading}>Digital Cameras</h2>
               <p className={styles.cameras__description}>
                  Choose from a wide range of cameras tailored to your needs,
                  from casual photography to professional shoots.
               </p>
               <div className={styles.cameras__grid}>
                  {cameraList.map((camera) => (
                     <div key={camera.id} className={styles.cameras__card}>
                        <img
                           className={styles.cameras__image}
                           src={camera.image}
                           alt={`Image of ${camera.name}`}
                        />
                        <h3 className={styles.cameras__name}>{camera.name}</h3>
                        <p className={styles.cameras__text}>
                           {camera.description}
                        </p>
                        <p className={styles.cameras__price}>
                           <strong>{camera.price}</strong>
                        </p>
                        <button className={styles.cameras__button}>
                           Rent Now
                        </button>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </>
   );
};

export default Cameras;
