import styles from "./startCard.module.css";
import Image from "next/image";
const StartCard = ({handleState, handleTimerStart}) => {
  return (
    <div className={styles.container}>
     
      <div className={styles.wrapper}>
  {/* <Image src="" layout="fill" alt="" /> */}
        <h3 className={styles.heading}>
        <span className={styles.firstLetter}> Let&apos;s See </span> How Much You Know About <span className={styles.firstLetter}>Sea</span> ?
        </h3>
        <p className={styles.subTitle}>
          Try to answer the following Questions related to Sea within time limit.
        </p>
        <p className={styles.subTitle}>
          Keep in mind that incorrect answers will penalize your score/time by
          ten seconds!
        </p>
        <button className={styles.btnWithIcon} onClick={() => {handleState("quiz"); handleTimerStart();}}>
        Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartCard;