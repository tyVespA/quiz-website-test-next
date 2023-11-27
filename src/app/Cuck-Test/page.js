"use client";
import React from "react";
import { useState } from "react";
import RadioQuestion from "../components/quizTypes/RadioQuestion/RadioQuestion";
import { weebQuestions } from "../assets/weebQuestions";

export default function page() {
  return (
    <div className="test-page">
      <h1>cuck test</h1>
      <div className="quiz-container">
        <RadioQuestion testName={weebQuestions} questionIndex={0} />
        <RadioQuestion testName={weebQuestions} questionIndex={1} />
      </div>
      <div>Score: </div>
    </div>
  );
}
