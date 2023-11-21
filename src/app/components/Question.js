"use client";
import React from "react";
import styles from "./Question.module.css";

export default function Question({
  question,
  options,
  score,
  setScore,
  isVisible,
  onNextQuestion,
}) {
  const handleOptionClick = (optionScore) => {
    setScore(score + optionScore);
    onNextQuestion();
  };

  return (
    <div
      className={`${styles.questionContainer} ${
        isVisible ? "" : styles["question-hidden"]
      }`}
    >
      <h2>{question}</h2>
      <form
        action=""
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {options.map((option, index) => (
          <button key={index} onClick={() => handleOptionClick(option.score)}>
            {option.label}
          </button>
        ))}
      </form>
    </div>
  );
}
