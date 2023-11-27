"use client";
import React from "react";
import { useState } from "react";
import styles from "./Question.module.css";

export default function Question({
  question,
  options,
  score,
  setScore,
  zIndex,
}) {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className={`${styles.questionContainer} ${
        submitted ? styles.fadeAway : ""
      }`}
      style={{ zIndex: zIndex }}
    >
      <h2>{question}</h2>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <button key={index} onClick={() => setScore(score + option.score)}>
            {option.label}
          </button>
        ))}
      </form>
    </div>
  );
}
