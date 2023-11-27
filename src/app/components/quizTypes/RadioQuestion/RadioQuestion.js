"use client";
import React from "react";
import styles from "./RadioQuestion.module.css";
import { useState } from "react";

export default function FadeInRadio({
  testName,
  questionIndex,
  score,
  setScore,
}) {
  const [answer, setAnswer] = useState("");

  return (
    <div className="radioForm">
      <form action="">
        <h2>{testName[questionIndex].question}</h2>
        {testName[questionIndex].answers.map((option, index) => (
          <label key={index} htmlFor={`answer${index}`}>
            <input
              type="radio"
              name={"answer"}
              id={`answer${index}`}
              value={option.label}
              onChange={(event) => {
                setAnswer(event.target.value);
              }}
            />
            {option.label}
          </label>
        ))}
      </form>
    </div>
  );
}
