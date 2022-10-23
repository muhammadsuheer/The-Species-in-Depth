import React, { useState } from "react";
import styles from "./allDone.module.css";
const AllDone = ({ score, handleHighScore, handleState, handleReset }) => {
  const [name, setName] = useState("");

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.allDone}>
            All Done!
          </h1>
          <p className={styles.firstLetter}>
            Your Final Score is: {score}
          </p>
          <div className={styles.btnInput}>         
           <p className={styles.para2}>
            <span> <p>Your Name</p> </span>
            <input
              className={styles.input}
              placeholder="Full Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
              id="submit"
            />
            {name ? (
            <button
            className={styles.button}
            onClick={() => {
                handleHighScore({name:name ,score:score});
                handleState("highscore");
                handleReset();
              }}
            >
              Submit
            </button>
            ):  (
              <button
              type="submit" id="submit"
              onClick={(e) => {
              }}
            >
              Submit
            </button>
            )}
          </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllDone;