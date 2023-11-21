"use client";
import React from "react";
import { useState } from "react";
import Question from "./Question";
import { questions } from "../assets/questions";

export default function Quiz() {
  const questions = [
    {
      question: "How do you feel about anime?",
      options: [
        { label: "I'm a big fan", score: 4 },
        { label: "I enjoy them", score: 1 },
        { label: "I like a few", score: 0 },
        { label: "I cum to hentai", score: 6 },
        { label: "I don't really like them", score: 0 },
      ],
    },
    {
      question: "How often do you masturbate?",
      options: [
        { label: "Multiple times a day", score: 5 },
        { label: "Once a day", score: 2 },
        { label: "A few times a week", score: 0 },
        { label: "Once a week", score: 0 },
        { label: "A few times per month", score: 2 },
        { label: "Almost never", score: 3 },
      ],
    },
  ];

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
