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

        {quiz.map((question, index) => (
          <div
            key={index}
            className={`${styles.questionContainer} ${
              scores[`Q${index + 1}`] > 0 ? styles.fadeIn : ""
            }  `}
          >
            <RadioQuestion
              question={question.question}
              answers={question.answers}
              name={`Q${index + 1}`}
              score={scores[`Q${index + 1}`]}
              setScore={(newScore) =>
                setScores((prevScores) => ({
                  ...prevScores,
                  [`Q${index + 1}`]: newScore,
                }))
              }
            ></RadioQuestion>
          </div>
        ))}

        <button
          type="submit"
          className={`${styles.submitBtn} ${
            scores.Q2 > 0 ? styles.fadeIn : ""
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
