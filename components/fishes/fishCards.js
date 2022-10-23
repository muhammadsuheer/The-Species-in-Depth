import styles from "./fishcard.module.css";
import Link from "next/link";
import Image from "next/image";
import Fishes from "../../data/fishesdata";
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
  <input type="text" className={styles.formInput} placeholder="Find Fishes"  onChange={(event) => {
              setSearchTerm(event.target.value);
            }}/>
</div>
   
      </div>
      <div className={styles.scrollbar}>
  <div className={styles.force}>
      <div>
        <ul  className={styles.cards}>
          {Fishes.filter((Fishes) => {
            if ((searchTerm == "")) {
              return Fishes;
            } else if (
              Fishes.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return  Fishes;
            }
          }).map((Fishes, key) => {
            return (
              <li key={key}>
                <Link
                  href={`/fishes/${Fishes.link}`}
                >
                  <a  className={styles.card}>
                    <Image
                      width={400}
                      height={300}
                      src={Fishes.image}
                      key={key}
                      className={styles.cardImage}
                      alt="fish-images"
                    />

                    <div className={styles.cardOverlay}>

                      <div className={styles.cardHeader}>

                        <h3 key={key} className={styles.cardTitle}>
                          {Fishes.name}
                        </h3>
                      </div>
                      <div className={styles.effect}>

                      <p key={key} className={styles.cardDescription}>
                        {Fishes.subTitle}
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
