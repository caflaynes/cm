import React from "react";
import styles from "./Cameras.module.scss";

import lumix from "./../../images/cameras/panasonic_lumix_1.avif";
import samsung from "./../../images/cameras/panasonic_lumix_2.avif";
import sony from "./../../images/cameras/panasonic_lumix_3.avif";
import nikon from "./../../images/cameras/panasonic_lumix_4.avif";

const featuredCameras = [
   { id: 1, name: "Panasonic Lumix", type: "Digital Camera", price: "₱250 / day", image: lumix },
   { id: 2, name: "Samsung S630", type: "Digital Camera", price: "₱350 / day", image: samsung },
   { id: 3, name: "Sony S700", type: "Content Camera", price: "₱400 / day", image: sony },
   { id: 4, name: "Nikon Coolpix", type: "Digital Camera", price: "₱400 / day", image: nikon },
];

const Cameras: React.FC = () => {
   return (
      <section id="cameras" className={styles.cameras} aria-labelledby="cameras-heading">
         <div className={styles.cameras__leftDecor} data-media-slot="featured-left-botanical" aria-hidden="true" />
         <div className={styles.cameras__rightDecor} data-media-slot="featured-right-botanical" aria-hidden="true" />

         <aside className={styles.cameras__sideNote}>
            Different<br />
            Cameras.<br />
            Same<br />
            Beautiful<br />
            Stories.
            <span>♡</span>
         </aside>

         <div className={styles.cameras__paper}>
            <div className={styles.cameras__headingRow}>
               <h2 id="cameras-heading">FEATURED CAMERAS</h2>
               <a href="#cameras">View All <span aria-hidden="true">→</span></a>
            </div>

            <div className={styles.cameras__grid}>
               {featuredCameras.map((camera) => (
                  <article key={camera.id} className={styles.cameras__card}>
                     <div className={styles.cameras__imageWrap}>
                        <img src={camera.image} alt={camera.name} />
                     </div>
                     <h3>{camera.name}</h3>
                     <p className={styles.cameras__type}>{camera.type}</p>
                     <p className={styles.cameras__price}>{camera.price}</p>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Cameras;
