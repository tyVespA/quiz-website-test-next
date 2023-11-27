"use client";
import React from "react";
import FadeInRadio from "../components/quizTypes/FadeInRadio/FadeInRadio";
import { weebQuestions } from "../assets/weebQuestions";

export default function page() {
  return (
    <div className="test-page">
      <h1>cuck test</h1>
      <div className="quiz-container">
        <FadeInRadio testName={weebQuestions} questionIndex={0} />
        <FadeInRadio testName={weebQuestions} questionIndex={1} />
      </div>
      <div>Score: </div>
    </div>
  );
}
