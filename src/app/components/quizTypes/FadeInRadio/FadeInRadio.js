"use client";
import React from "react";
import styles from "./FadeInRadio.module.css";
import { useState } from "react";

export default function FadeInRadio({ questionIndex }) {
  const [answer, setAnswer] = useState("");

  const weebTest = [
    {
      question: "How often do you watch anime?",
      answers: [
        { label: "1", points: "0" },
        { label: "1", points: "0" },
        { label: "1", points: "0" },
        { label: "1", points: "0" },
      ],
    },
    {
      question: "How often do you to hentai?",
      answers: ["q", "w", "e", "r"],
    },
  ];

  return (
    <div className="radioForm">
      <form action="">
        <h2>{weebTest[questionIndex].question}</h2>
        {weebTest[questionIndex].answers.map((answer, index, points) => (
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
