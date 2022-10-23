import styles from "./timeUp.module.css";
const TimeUp = ({handleState}) => {
    return (
        <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>
            Time Up!
          </h1>
          <p className={styles.firstLetter}>
            Your Score is recorded! 
          </p>
          <p className={styles.firstLetter}>
            Click on Check Score to Check Final Score and Submit it!
          </p>
          <button className={styles.btnWithIcon} onClick={() => {handleState("done");}}>
            Check Score
          </button>
        </div>
      </div>
    )
}

export default TimeUp