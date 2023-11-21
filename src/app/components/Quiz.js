"use client";
import React from "react";
import { useState } from "react";
import Question from "./Question";
import { questions } from "../assets/questions";

export default function Quiz() {
  const [score, setScore] = useState(0);

  return (
    <div>
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          options={question.options}
          score={score}
          setScore={setScore}
        />
      ))}

      <div>
        <br />
        <p>Score: {score}</p>
      </div>
    </div>
  );
}
