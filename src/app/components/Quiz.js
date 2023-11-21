"use client";
import React from "react";
import { useState } from "react";
import styles from "./Quiz.module.css";
import Question from "./Question";
import { questions } from "../assets/questions";

export default function Quiz() {
  const [score, setScore] = useState(0);

  return (
    <div className={styles.quizContainer}>
      {questions.map((question, index) => (
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
        <p>Score: {score}</p>
      </div>
    </div>
  );
}
