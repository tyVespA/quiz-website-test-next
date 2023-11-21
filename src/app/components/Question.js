"use client";
import React from "react";
import { useState } from "react";
import styles from "./Question.module.css";

export default function Question({ question, options }) {
  const [score, setScore] = useState(0);

  return (
    <div className={styles.questionContainer}>
      <h2>{question}</h2>
      <form
        action=""
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Score:", score);
        }}
      >
        {options.map((option, index) => (
          <button key={index} onClick={() => setScore(option.score)}>
            {option.label}
          </button>
        ))}
      </form>
    </div>
  );
}
