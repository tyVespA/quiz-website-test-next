"use client";
import React from "react";

export default function page() {
  return (
    <div className="test-page">
      <h1>cuck test</h1>
      <div className="quiz-container">
        <FadeInRadioQuiz testName={weebQuestions} questionIndex={0} />
        <FadeInRadioQuiz testName={weebQuestions} questionIndex={1} />
      </div>
      <div>Score: </div>
    </div>
  );
}
