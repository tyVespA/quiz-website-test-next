"use client";
import React from "react";
import { useState } from "react";
import styles from "./RadioQuizFadeSideways.module.css";
import RadioQuestion from "./RadioQuestion";

export default function RadioQuizFadeSideways({
  quiz,
  highPointsText,
  highMidPointsText,
  lowMidPointsText,
  lowPointsText,
  highPointsImg,
  highMidPointsImg,
  lowMidPointsImg,
  lowPointsImg,
}) {
  const [scores, setScores] = useState({
    Q1: -1,
    Q2: -1,
    Q3: -1,
    Q4: -1,
    Q5: -1,
    Q6: -1,
    Q7: -1,
    Q8: -1,
    Q9: -1,
    Q10: -1,
  });

  const [resultText, setResultText] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);

  const totalScore =
    scores.Q1 +
    scores.Q2 +
    scores.Q3 +
    scores.Q4 +
    scores.Q5 +
    scores.Q6 +
    scores.Q7 +
    scores.Q8 +
    scores.Q9 +
    scores.Q10;

  function handleSubmit(event) {
    event.preventDefault();

    if (totalScore <= 10) {
      setResultText(lowPointsText);
    } else if (totalScore > 10 && totalScore < 20) {
      setResultText(highMidPointsText);
    } else if (totalScore >= 20) {
      setResultText(highPointsText);
    }

    setFormSubmitted(true);
  }

  const handleAnswerSelect = (questionNumber, newScore) => {
    setScores((prevScores) => ({ ...prevScores, [questionNumber]: newScore }));
  };

  return (
    <div className={`quiz-container ${styles.radioQuizTest}`}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <div
          className={`${styles.firstQuestionContainer} ${
            scores.Q1 >= 0 ? styles.fadeOut : ""
          }`}
        >
          <RadioQuestion
            question={quiz[0].question}
            answers={quiz[0].answers}
            name="Q1"
            score={scores.Q1}
            setScore={(newScore) =>
              setScores((prevScores) => ({ ...prevScores, Q1: newScore }))
            }
          ></RadioQuestion>
        </div>

        {scores.Q1 <= 0 && (
          <p className={`animatedDots ${styles.animatedDots}`}>
            Select an answer to display the next question
          </p>
        )}

        <div
          className={`${styles.questionContainer} ${
            scores.Q1 >= 0 ? styles.fadeIn : ""
          }  ${scores.Q2 >= 0 ? styles.fadeOut : ""} `}
        >
          <RadioQuestion
            question={quiz[1].question}
            answers={quiz[1].answers}
            name="Q2"
            score={scores.Q2}
            setScore={(newScore) => handleAnswerSelect("Q2", newScore)}
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q2 > 0 ? styles.fadeIn : ""
          } ${scores.Q3 >= 0 ? styles.fadeOut : ""}  `}
        >
          <RadioQuestion
            question={quiz[2].question}
            answers={quiz[2].answers}
            name="Q3"
            score={scores.Q3}
            setScore={(newScore) => handleAnswerSelect("Q3", newScore)}
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q3 > 0 ? styles.fadeIn : ""
          }  ${scores.Q4 >= 0 ? styles.fadeOut : ""} `}
        >
          <RadioQuestion
            question={quiz[3].question}
            answers={quiz[3].answers}
            name="Q4"
            score={scores.Q4}
            setScore={(newScore) => handleAnswerSelect("Q4", newScore)}
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q4 > 0 ? styles.fadeIn : ""
          } ${scores.Q5 >= 0 ? styles.fadeOut : ""}  `}
        >
          <RadioQuestion
            question={quiz[4].question}
            answers={quiz[4].answers}
            name="Q5"
            score={scores.Q5}
            setScore={(newScore) => handleAnswerSelect("Q5", newScore)}
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q5 > 0 ? styles.fadeIn : ""
          } ${scores.Q6 >= 0 ? styles.fadeOut : ""}  `}
        >
          <RadioQuestion
            question={quiz[5].question}
            answers={quiz[5].answers}
            name="Q6"
            score={scores.Q6}
            setScore={(newScore) => handleAnswerSelect("Q6", newScore)}
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q6 > 0 ? styles.fadeIn : ""
          } ${scores.Q7 >= 0 ? styles.fadeOut : ""} `}
        >
          <RadioQuestion
            question={quiz[6].question}
            answers={quiz[6].answers}
            name="Q7"
            score={scores.Q7}
            setScore={(newScore) => handleAnswerSelect("Q7", newScore)}
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q7 > 0 ? styles.fadeIn : ""
          } ${scores.Q8 >= 0 ? styles.fadeOut : ""} `}
        >
          <RadioQuestion
            question={quiz[7].question}
            answers={quiz[7].answers}
            name="Q8"
            score={scores.Q8}
            setScore={(newScore) => handleAnswerSelect("Q8", newScore)}
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q8 > 0 ? styles.fadeIn : ""
          } ${scores.Q9 >= 0 ? styles.fadeOut : ""}  `}
        >
          <RadioQuestion
            question={quiz[8].question}
            answers={quiz[8].answers}
            name="Q9"
            score={scores.Q9}
            setScore={(newScore) => handleAnswerSelect("Q9", newScore)}
          ></RadioQuestion>
        </div>

        <div
          className={`${styles.questionContainer} ${
            scores.Q9 > 0 ? styles.fadeIn : ""
          } ${scores.Q10 >= 0 ? styles.fadeOut : ""} `}
        >
          <RadioQuestion
            question={quiz[9].question}
            answers={quiz[9].answers}
            name="Q10"
            score={scores.Q10}
            setScore={(newScore) => handleAnswerSelect("Q10", newScore)}
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

        <div className={styles.results}>
          <p
            className={`${styles.score} ${
              formSubmitted ? styles.fadeInDownwards : ""
            }`}
          >
            You scored:{" "}
            {scores.Q1 +
              scores.Q2 +
              scores.Q3 +
              scores.Q4 +
              scores.Q5 +
              scores.Q6 +
              scores.Q7 +
              scores.Q8 +
              scores.Q9 +
              scores.Q10}{" "}
            / 30
          </p>
          {/* replace scr with prop */}
          <img
            src="./images/degen2.jpg"
            alt="result image"
            className={`${styles.resultTestImg} ${
              formSubmitted ? styles.fadeInDownwards : ""
            }`}
          />
          <p
            className={`${styles.resultTest} ${
              formSubmitted ? styles.fadeInDownwards : ""
            }`}
          >
            {resultText}
          </p>
        </div>
      </form>
    </div>
  );
}
