"use client";
import React from "react";
import { useState } from "react";
import styles from "./Quiz.module.css";
import Question from "./Question";
import { degenQuestions } from "../../assets/degenQuestions";
import ScoreScreen from "../ScoreScreen";

export default function Quiz() {
  const [score, setScore] = useState(0);

  return (
    <div className={styles.quizContainer}>
      {degenQuestions.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          options={question.options}
          score={score}
          setScore={setScore}
          zIndex={50 - index}
        />
      ))}

      <div>
        <br />
        <ScoreScreen score={score} />
      </div>
    </div>
  );
}
