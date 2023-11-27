"use client";
import React from "react";
import { useState } from "react";
import FadeInRadioQuiz from "../components/FadeInRadioQuiz";
import { weebQuestions } from "../assets/weebQuestions";

export default function page() {
  return (
    <div className="test-page">
      <h1>cuck test</h1>
      <div className="quiz-container">
        <FadeInRadioQuiz testName={weebQuestions} questionIndex={0} />
      </div>
      <div>Score: </div>
    </div>
  );
}
