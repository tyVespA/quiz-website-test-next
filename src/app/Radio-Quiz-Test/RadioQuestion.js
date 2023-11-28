"use client";
import React from "react";
import { useState } from "react";
import styles from "./RadioQuestion.module.css";

export default function RadioQuestion({ children, answers, name }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  return (
    <div>
      <h3>{children}</h3>
      {answers.map((answer, index) => (
        <label key={index} htmlFor={`${answer.label}-${name}`}>
          <input
            type="radio"
            name={name}
            id={`${answer.label}-${name}`}
            value={answer.label}
            onChange={(event) => {
              setSelectedAnswer(event.target.value);
            }}
          />{" "}
          {answer.label}
        </label>
      ))}
    </div>
  );
}
