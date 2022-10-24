import styles from "./fishcard.module.css";
import Link from "next/link";
import Image from "next/image";
import fishes from "../../data/fishesData"
import { useState } from "react";

const FishCard = () => {
  const [searchTerm,setSearchTerm] = useState("");
  return (
    <div className={styles.container}>
       
      <div className={styles.left}>
      
        <div className={styles.nseriesWrapper}>
          <p className={styles.series}>THE Popular </p>
          <p className={styles.firstLetter}>Fishes</p>
          <p className={styles.series}>OF </p>
          <p className={styles.firstLetter}> World</p>
</div>

        <div className={styles.form__group}>
  <input type="text" className={styles.formInput} placeholder="Find fishes"  onChange={(event) => {
              setSearchTerm(event.target.value);
            }}/>
</div>
   
      </div>
      <div className={styles.scrollbar}>
  <div className={styles.force}>
      <div>
        <ul  className={styles.cards}>
          {fishes.filter((fishes) => {
            if ((searchTerm == "")) {
              return fishes;
            } else if (
              fishes.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return  fishes;
            }
          }).map((fishes, key) => {
            return (
              <li key={key}>
                <Link
                  href={`/fishes/${fishes.link}`}
                >
                  <a  className={styles.card}>
                    <Image
                      width={400}
                      height={300}
                      src={fishes.image}
                      key={key}
                      className={styles.cardImage}
                      alt="fish-images"
                    />

                    <div className={styles.cardOverlay}>

                      <div className={styles.cardHeader}>

                        <h3 key={key} className={styles.cardTitle}>
                          {fishes.name}
                        </h3>
                      </div>
                      <div className={styles.effect}>

                      <p key={key} className={styles.cardDescription}>
                        {fishes.subTitle}
                      </p>
                      </div>
                    </div>

                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    </div>
   </div>
  );
};

export default FishCard;
