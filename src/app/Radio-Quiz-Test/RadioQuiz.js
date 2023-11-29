"use client";
import React from "react";
import { useState } from "react";
import RadioQuestion from "./RadioQuestion";
import styles from "./RadioQuiz.module.css";

export default function RadioQuiz({ quiz }) {
  const questionsAmount = quiz.length;
  console.log(questionsAmount);

  const [scores, setScores] = useState({
    Q1: 0,
    Q2: 0,
    Q3: 0,
    Q4: 0,
    Q5: 0,
    Q6: 0,
    Q7: 0,
    Q8: 0,
    Q9: 0,
    Q10: 0,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  // const [submitQ1, setSubmitQ1] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <div className={`quiz-container ${styles.radioQuizTest}`}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <RadioQuestion
          question={quiz[0].question}
          answers={quiz[0].answers}
          name="Q1"
          score={scores.Q1}
          setScore={(newScore) =>
            setScores((prevScores) => ({ ...prevScores, Q1: newScore }))
          }
        ></RadioQuestion>

        {scores.Q1 <= 0 && <p>Select an answer to display the next question</p>}

        <div
          className={`${styles.questionContainer} ${
            scores.Q1 > 0 ? styles.fadeIn : ""
          }  `}
        >
          <RadioQuestion
            question={quiz[1].question}
            answers={quiz[1].answers}
            name="Q2"
            score={scores.Q2}
            setScore={(newScore) =>
              setScores((prevScores) => ({ ...prevScores, Q2: newScore }))
            }
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q2 > 0 ? styles.fadeIn : ""
          }  `}
        >
          <RadioQuestion
            question={quiz[2].question}
            answers={quiz[2].answers}
            name="Q3"
            score={scores.Q3}
            setScore={(newScore) =>
              setScores((prevScores) => ({ ...prevScores, Q3: newScore }))
            }
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q3 > 0 ? styles.fadeIn : ""
          }  `}
        >
          <RadioQuestion
            question={quiz[3].question}
            answers={quiz[3].answers}
            name="Q4"
            score={scores.Q4}
            setScore={(newScore) =>
              setScores((prevScores) => ({ ...prevScores, Q4: newScore }))
            }
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q4 > 0 ? styles.fadeIn : ""
          }  `}
        >
          <RadioQuestion
            question={quiz[4].question}
            answers={quiz[4].answers}
            name="Q5"
            score={scores.Q5}
            setScore={(newScore) =>
              setScores((prevScores) => ({ ...prevScores, Q5: newScore }))
            }
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q5 > 0 ? styles.fadeIn : ""
          }  `}
        >
          <RadioQuestion
            question={quiz[5].question}
            answers={quiz[5].answers}
            name="Q6"
            score={scores.Q6}
            setScore={(newScore) =>
              setScores((prevScores) => ({ ...prevScores, Q6: newScore }))
            }
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q6 > 0 ? styles.fadeIn : ""
          }  `}
        >
          <RadioQuestion
            question={quiz[6].question}
            answers={quiz[6].answers}
            name="Q7"
            score={scores.Q7}
            setScore={(newScore) =>
              setScores((prevScores) => ({ ...prevScores, Q7: newScore }))
            }
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q7 > 0 ? styles.fadeIn : ""
          }  `}
        >
          <RadioQuestion
            question={quiz[7].question}
            answers={quiz[7].answers}
            name="Q8"
            score={scores.Q8}
            setScore={(newScore) =>
              setScores((prevScores) => ({ ...prevScores, Q8: newScore }))
            }
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q8 > 0 ? styles.fadeIn : ""
          }  `}
        >
          <RadioQuestion
            question={quiz[8].question}
            answers={quiz[8].answers}
            name="Q9"
            score={scores.Q9}
            setScore={(newScore) =>
              setScores((prevScores) => ({ ...prevScores, Q9: newScore }))
            }
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q9 > 0 ? styles.fadeIn : ""
          }  `}
        >
          <RadioQuestion
            question={quiz[9].question}
            answers={quiz[9].answers}
            name="Q10"
            score={scores.Q10}
            setScore={(newScore) =>
              setScores((prevScores) => ({ ...prevScores, Q10: newScore }))
            }
          ></RadioQuestion>
        </div>

        <button
          type="submit"
          className={`${styles.submitBtn} ${
            scores.Q10 > 0 ? styles.fadeIn : ""
          }`}
        >
          Calculate Result
        </button>

        <p className={`${styles.score} ${formSubmitted ? styles.fadeIn : ""}`}>
          Score:{" "}
          {scores.Q1 +
            scores.Q2 +
            scores.Q3 +
            scores.Q4 +
            scores.Q5 +
            scores.Q6 +
            scores.Q7 +
            scores.Q8 +
            scores.Q9 +
            scores.Q10}
        </p>
      </form>
      <br />
      <p>Score Q1: {scores.Q1}</p>
      <p>Score Q2: {scores.Q2}</p>
    </div>
  );
}
