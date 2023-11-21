import React from "react";
import Question from "./Question";
import { questions } from "../assets/questions";

export default function Quiz() {
  const questions = [
    {
      question: "How do you feel about anime?",
      options: [
        { label: "I'm a huge fan", score: 3 },
        { label: "I enjoy them", score: 1 },
        { label: "I cum to hentai", score: 5 },
        { label: "I don't really like them", score: 0 },
      ],
    },
  ];

  return (
    <div>
      <Question
        question={questions[0].question}
        options={questions[0].options}
      />
    </div>
  );
}
