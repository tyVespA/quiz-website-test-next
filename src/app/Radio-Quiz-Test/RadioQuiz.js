"use client";
import React from "react";
import { useState } from "react";
import RadioQuestion from "./RadioQuestion";
import styles from "./RadioQuiz.module.css";

export default function RadioQuiz() {
  const quiz = [
    {
      question: "1. QS",
      answers: [
        { label: "qs2", score: 2 },
        { label: "qs3", score: 1 },
        { label: "qs4", score: 4 },
        { label: "qs45", score: 5 },
      ],
    },
    {
      question: "1. what is the asdjasikdha",
      answers: [
        { label: "123", score: 2 },
        { label: "zxcbff", score: 1 },
        { label: "12xzczx3", score: 4 },
        { label: "czxvq123e", score: 5 },
      ],
    },
  ];

  const [scores, setScores] = useState({
    Q1: 0,
    Q2: 0,
    Q3: 0,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitQ1, setSubmitQ1] = useState(false);

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

        <button
          type="submit"
          className={`${styles.submitBtn} ${
            scores.Q2 > 0 ? styles.fadeIn : ""
          }`}
        >
          Calculate Score
        </button>

        <p className={`${styles.score} ${formSubmitted ? styles.fadeIn : ""}`}>
          Score: {scores.Q1 + scores.Q2 + scores.Q3}
        </p>
      </form>
      <br />
      <p>Score Q1: {scores.Q1}</p>
      <p>Score Q2: {scores.Q2}</p>
    </div>
  );
}
