"use client";
import React from "react";
import { useState } from "react";
import RadioQuestion from "./RadioQuestion";
import styles from "./RadioQuizFadeSideways.module.css";

export default function RadioQuiz({ quiz }) {
  const questionsAmount = quiz.length;
  console.log(questionsAmount);

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
      setResultText("Ur ok");
    } else if (totalScore > 10 && totalScore < 20) {
      setResultText("Uhhh");
    } else if (totalScore >= 20) {
      setResultText("ur gg");
    }

    setFormSubmitted(true);
    window.scrollTo({
      //TO CHANGE AFTER SETTING UP IMAGE
      top: window.scrollY + 500,
      behavior: "smooth",
    });
  }

  const handleAnswerSelect = (questionNumber, newScore) => {
    setScores((prevScores) => ({ ...prevScores, [questionNumber]: newScore }));

    window.scrollTo({
      top: window.scrollY + 154,
      behavior: "smooth",
    });
  };

  return (
    <div className={`quiz-container ${styles.radioQuizTest}`}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.firstQuestionContainer}>
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
          <p className="animatedDots">
            Select an answer to display the next question
          </p>
        )}

        <div
          className={`${styles.questionContainer} ${
            scores.Q1 >= 0 ? styles.fadeIn : styles.hidden
          }  `}
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
            scores.Q2 > 0 ? styles.fadeIn : styles.hidden
          }  `}
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
            scores.Q3 > 0 ? styles.fadeIn : styles.hidden
          }  `}
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
            scores.Q4 > 0 ? styles.fadeIn : styles.hidden
          }  `}
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
            scores.Q5 > 0 ? styles.fadeIn : styles.hidden
          }  `}
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
            scores.Q6 > 0 ? styles.fadeIn : styles.hidden
          }  `}
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
            scores.Q7 > 0 ? styles.fadeIn : styles.hidden
          }  `}
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
            scores.Q8 > 0 ? styles.fadeIn : styles.hidden
          }  `}
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
            scores.Q9 > 0 ? styles.fadeIn : styles.hidden
          }  `}
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
            scores.Q10 > 0 ? styles.fadeIn : styles.hidden
          }`}
        >
          Calculate Result
        </button>

        <div>
          <p
            className={`${styles.score} ${formSubmitted ? styles.fadeIn : ""}`}
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
          <p
            className={`${styles.resultTest} ${
              formSubmitted ? styles.fadeIn : ""
            }`}
          >
            {resultText}
          </p>
        </div>
      </form>
    </div>
  );
}
