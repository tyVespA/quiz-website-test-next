"use client";
import React from "react";
import { useState } from "react";
import styles from "./styles/RadioQuestion.module.css";

export default function RadioQuestion({
  question,
  answers,
  name,
  score,
  setScore,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  function handleOnChange(event) {
    //GPT SOLUTION
    const selectedValue = event.target.value;

    if (selectedValue !== selectedAnswer) {
      setSelectedAnswer(selectedValue);

      const selectedAnswerObject = answers.find(
        (answer) => answer.label === selectedValue
      );
      const selectedScore = selectedAnswerObject
        ? selectedAnswerObject.score
        : 0;
      setScore(selectedScore);
    }
  }

  return (
    <>
      <h3>{question}</h3>
      {answers.map((answer, index) => (
        <label key={index} htmlFor={`${answer.label}-${name}`}>
          <input
            type="radio"
            name={name}
            id={`${answer.label}-${name}`}
            value={answer.label}
            onChange={handleOnChange}
          />{" "}
          {answer.label}
        </label>
      ))}
    </>
  );
}
