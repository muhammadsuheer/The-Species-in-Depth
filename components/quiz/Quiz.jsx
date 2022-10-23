import  { useState, useRef, useEffect } from "react";
import StartCard from "./startCard/StartCard";
import Question from "./question/Question";
import questions from "../../data/questions"
import HighScores from "./highScore/HighScores"; 
import AllDone from "./allDone/AllDone";
import TimeUp from "./timeUp/TimeUp"; 
import styles from './quiz.module.css';
const Quiz = () => {
  const [state, setState] = useState("start");
  const [questionNo, setQuestionNO] = useState(0);
  const [score, setScore] = useState(0);

  //Handleing the Questions Coming One by One.

  const handleQuestion = () => {
    if (questions.length > questionNo + 1) {
      setQuestionNO(questionNo + 1);
    } else {
      setState("done");
      setTimeout(() => {
        setTimerOn(false);
        setTime(50000);
      }, 900);
    }
  };

  const handleReset = () => {
    setQuestionNO(0);
  };

  //Hnadleing the State of the Application

  const handleState = (newState) => {
    setState(newState);
  };


  //Handleing the Score

  const handleScore = (UserScore) => {
    setScore(UserScore);
  };

  //Handleing the Timer

  const [time, setTime] = useState(50000);
  const [timerOn, setTimerOn] = useState(false);
  const [deduct, setDeduct] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    if (deduct) {
      setTime((prevTime) => prevTime + 10000);
      setDeduct(false);
    }
    return () => clearInterval(interval);
  }, [timerOn, deduct]);

  useEffect(() => {
    if (time <= 0) {
      setTimeout(() => {
        setTimerOn(false);
        setTime(50000);
      }, 900);
      setState("timeup");
    }
  }, [time]);

  //Functions to Start the timer
  const handleTimerStart = () => {
    setTimerOn(true);
  };

  const handleWrongAnswer = () => {
    setDeduct(true);
  };

  //Hanlde The High Scores

  const [highScore, setHighScore] = useState([]);
  const handleHighScore = (newScore) => {
    setHighScore((prevScores) => {
      return [...prevScores, newScore];
    });
  };

  //Clear High Scores
  const hadleClearHighScore = () => {
    setHighScore([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerr}>
       
      <div className={styles.overlay}>
        <div className={styles.centa}>
        <div  className={styles.para2} >
        <p className={styles.para2}>Time: {time  / 200}</p>
        </div>
          {state === "start" && (
            <StartCard
              handleState={handleState}
              handleTimerStart={handleTimerStart}
            />
            
          )}
          
          {state === "quiz" && (
            <Question
              questionText={questions[questionNo].questionText}
              options={questions[questionNo].options}
              answer={questions[questionNo].answer}
              handleQuestion={handleQuestion}
              handleState={handleState}
              handleScore={handleScore}
              handleWrongAnswer={handleWrongAnswer}
            />
          )}
          {state === "highscore" && (
            <HighScores
              handleState={handleState}
              highScore={highScore}
              hadleClearHighScore={hadleClearHighScore}
            />
          )}
          {state === "done" && (
            <AllDone
              score={score}
              handleHighScore={handleHighScore}
              handleState={handleState}
              handleReset={handleReset}
            />
          )}
          {state === "timeup" && (
           <TimeUp 
             handleState ={handleState}
           />
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Quiz;