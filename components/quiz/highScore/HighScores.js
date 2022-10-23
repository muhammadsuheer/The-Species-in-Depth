import styles from "./highScore.module.css";

const HighScores = ({handleState, highScore, }) => {
  // hadleClearHighScore 
  let sortedList = []
    if(highScore){
      sortedList = highScore.sort((a , b ) => {
        return b.score - a.score;
      })
    }

    return (
        <div>
       <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.firstLetter}>
          Highscores
        </h1>
        {highScore && (
        <>
        {sortedList.map((entry, index) => {
        return (
        <p key={index} className={styles.para1}>
                <span className={styles.name}>{entry.name}</span> Your Score is <span className={styles.score}>{entry.score}</span>
        </p>
        )
        })}
        </>
        )}
        <div className={styles.btnDiv}>
        <button className={styles.btnWithIcon} onClick={() => {handleState("start")}}>
          Go back
        </button>
        {/* <button className={styles.btn2} onClick={() => {hadleClearHighScore();}}>
          Clear Highscores
        </button> */}
      </div>
      </div>
    </div>
        </div>
    )
}

export default HighScores;