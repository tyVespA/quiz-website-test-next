"use client";
import React from "react";
import { useState } from "react";
import styles from "./Question.module.css";

export default function Question({ question, options, score, setScore }) {
  return (
    <div className={styles.questionContainer}>
      <h2>{question}</h2>
      <form
        action=""
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {options.map((option, index) => (
          <button key={index} onClick={() => setScore(score + option.score)}>
            {option.label}
          </button>
        ))}
      </form>
    </div>
  );
}
