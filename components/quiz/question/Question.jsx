import { useState } from "react";
import styles from './question.module.css';
const Question = ({
  questionText,
  options,
  answer,
  handleQuestion,
  handleScore,
  handleWrongAnswer,
}) => {
  const [isCoreect, setIsCorrect] = useState(null);
  const [score, SetScore] = useState(0);

  const handleAnswer = async (userAnswer) => {
    if (answer === userAnswer) {
      setIsCorrect(true);
      SetScore(score + 10);
    } else {
      setIsCorrect(false);
      handleWrongAnswer();
    }
  };

  try{

    handleScore(score);
  }catch{(err) => {console.log(err)}}

  return (
    <div className={styles.container} >
      <div className={styles.containerr}>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>
            {questionText}
          </h1>
          {options && (
            <div className={styles.options}>
              {options.map((option,index) => {
                
                return (
                  
                  <p key={index}
                    className={styles.para1}
                    onClick={async () => {
                      
                      await handleAnswer(option);
                      handleQuestion();
                    }}
                  >
                    {option}
                  </p>
                );
              })}
            </div>
          )}
          <br />
          <hr />
          <br />
          {isCoreect === null && (
            <p className={styles.para2}>
              Let&apos;s Start Evaluating!
            </p>
          )}
          {isCoreect !== null && (
            <>
              {isCoreect ? (
                <p className={styles.para2}>Correct!</p>
              ) : (
                <p className={styles.para2}>Incorrect!</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;