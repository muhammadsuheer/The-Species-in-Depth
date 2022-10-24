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
{/* 
    <div class="wrapper">
      <div class="container">
        <img src="https://picsum.photos/300/500" alt="card" />
      </div>
      <div class="container">
        <img src="https://picsum.photos/300/501" alt="card" />
      </div>
      <div class="container">
        <img src="https://picsum.photos/300/502" alt="card" />
      </div>
    </div>
  */}
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
                  href={`/species/${Fishes.link}`}
                >
                  <a  className={styles.card}>
                    <Image
                      width={400}
                      height={450}
                      src={Fishes.image}
                      key={key}
                      className={styles.containerr}
                      alt="fish-images"
                    />
                    <h3 className={styles.cardTitle}>{Fishes.name}</h3>
        
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
