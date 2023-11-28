"use client";
import React from "react";
import { useState } from "react";
import RadioQuestion from "./RadioQuestion";
import styles from "./RadioQuiz.module.css";

export default function RadioQuiz() {
  const Q1Answers = [
    { label: "123", score: "2" },
    { label: "asdasd", score: "1" },
    { label: "12xzczx3", score: "4" },
    { label: "sadasd", score: "5" },
  ];
  const Q2Answers = [
    { label: "123", score: "2" },
    { label: "zxcbff", score: "1" },
    { label: "12xzczx3", score: "4" },
    { label: "czxvq123e", score: "5" },
  ];

  return (
    <div className={`quiz-container ${styles.radioQuizTest}`}>
      <form action="" className={styles.form}>
        <RadioQuestion answers={Q1Answers} name="Q1">
          1. What&apos;s the better anime asdasdaaaag?
        </RadioQuestion>
        <RadioQuestion answers={Q2Answers} name="Q2">
          1. What&apos;s the better anime asdasdaaaag?
        </RadioQuestion>
      </form>
    </div>
  );
}
