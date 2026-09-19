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

const Botanical = ({ className }: { className: string }) => (
   <svg className={className} viewBox="0 0 140 280" aria-hidden="true">
      <path d="M66 270C65 226 68 180 77 137C85 98 97 61 116 13" />
      <ellipse cx="80" cy="218" rx="27" ry="12" transform="rotate(-35 80 218)" />
      <ellipse cx="55" cy="177" rx="29" ry="13" transform="rotate(34 55 177)" />
      <ellipse cx="91" cy="136" rx="28" ry="12" transform="rotate(-39 91 136)" />
      <ellipse cx="65" cy="96" rx="25" ry="11" transform="rotate(32 65 96)" />
      <ellipse cx="107" cy="59" rx="24" ry="10" transform="rotate(-43 107 59)" />
   </svg>
);

const Cameras: React.FC = () => {
   return (
      <section id="cameras" className={styles.cameras} aria-labelledby="cameras-heading">
         <Botanical className={`${styles.cameras__botanical} ${styles.cameras__botanicalLeft}`} />
         <Botanical className={`${styles.cameras__botanical} ${styles.cameras__botanicalRight}`} />

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
