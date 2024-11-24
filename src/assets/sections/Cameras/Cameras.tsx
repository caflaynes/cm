import React from "react";
import styles from "./Cameras.module.scss";

const cameraList = [
   {
      id: 1,
      name: "Canon EOS 1500D",
      description: "Perfect for beginners, with stunning image quality and WiFi capabilities.",
      price: "₱250/day",
      image: "./../../images/canon-1500d.jpg", // Replace with actual path
   },
   {
      id: 2,
      name: "Sony Alpha A6400",
      description: "Compact, versatile, and great for vlogging or event photography.",
      price: "₱350/day",
      image: "./../../images/sony-a6400.jpg", // Replace with actual path
   },
   {
      id: 3,
      name: "Nikon D750",
      description: "Professional-grade DSLR with exceptional performance in low light.",
      price: "₱400/day",
      image: "./../../images/nikon-d750.jpg", // Replace with actual path
   },
];

const Cameras: React.FC = () => {
   return (
      <section className={styles.cameras}>
         <div className={styles.cameras__wrapper}>
            <h2 className={styles.cameras__heading}>Our Cameras</h2>
            <p className={styles.cameras__description}>
               Choose from a wide range of cameras tailored to your needs, from casual photography to professional shoots.
            </p>
            <div className={styles.cameras__grid}>
               {cameraList.map((camera) => (
                  <div key={camera.id} className={styles.cameras__card}>
                     <img
                        className={styles.cameras__image}
                        src={camera.image}
                        alt={camera.name}
                     />
                     <h3 className={styles.cameras__name}>{camera.name}</h3>
                     <p className={styles.cameras__text}>{camera.description}</p>
                     <p className={styles.cameras__price}>{camera.price}</p>
                     <button className={styles.cameras__button}>Rent Now</button>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Cameras;
