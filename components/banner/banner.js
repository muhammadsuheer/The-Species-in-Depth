import styles from "./banner.module.css";
import Link from "next/link";
import Image from "next/image"
const Banner = () => {
  return (
    <div className={styles.container}>
      
     
   <div className={styles.overlayer}>
   </div>



      <div className={styles.left}>
    
        <div className={styles.nseriesWrapper}>
          
          <p className={styles.series}>THE</p>
          <p className={styles.firstLetter}>Secrets </p>
          <p className={styles.series}>IN THE</p>
          <p className={styles.firstLetter}>OCEAN</p>
        </div>
     
        <div className={styles.heading}>
          <h3 className={styles.title}>The Species Into Depth</h3>
          <h3 className={styles.subTitle}>
          Sea Makes You Feel Small. But Not In a Bad Way. Small Because You Realize You’re Part of Something Bigger.       </h3>
        </div>
        <div className={styles.btnwrapper}>
          <div className={styles.loader}>
            <Link href={"/fishes"}>
              <a>
                <div className={styles.loaderBg}>
                  <span className={styles.playText}>See Fishes</span>
                </div>
              </a>
            </Link>

            <div className={styles.drops}>
              <div classNameass={styles.drop1}></div>
              <div className={styles.drop2}></div>
            </div>
          </div>
          <Image src="/static/fishy.gif" width={240} height={240} alt="" />
          <div className={styles.loader}>

            <Link href={"/quiz"}>
              <a>
                <div className={styles.loaderBg}>
                  <span className={styles.playText}>Take a Quiz</span>
                </div>
              </a>
            </Link>
            <div className={styles.drops}>
              <div classNameass={styles.drop3}></div>
              <div className={styles.drop4}></div>
            </div>
          </div>          
        </div>

      </div>
    </div>
  );
};
export default Banner;
