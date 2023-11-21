"use client";
import React, { useState } from "react";
import Question from "./Question";
import { questions } from "../assets/questions";

export default function Quiz() {
  const [score, setScore] = useState(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          options={question.options}
          score={score}
          setScore={setScore}
          isVisible={index === currentQuestionIndex}
          onNextQuestion={handleNextQuestion}
        />
      ))}

      <div>
        <br />
        {currentQuestionIndex === questions.length ? <p>Score: {score}</p> : ""}
      </div>
    </div>
  );
}
