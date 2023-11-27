"use client";
import React from "react";
import styles from "./RadioQuestion.module.css";
import { useState } from "react";

export default function FadeInRadio({ testName, questionIndex }) {
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="radioForm">
      <form action="">
        <h2>{testName[questionIndex].question}</h2>
        {testName[questionIndex].answers.map((answer, index, points) => (
          <label key={index} htmlFor={`answer${index}`}>
            <input
              type="radio"
              name={"answer"}
              id={`answer${index}`}
              value={answer.label}
              onChange={(event) => {
                setAnswer(event.target.value);
              }}
            />
            {answer.label}
          </label>
        ))}
      </form>
    </div>
  );
}
