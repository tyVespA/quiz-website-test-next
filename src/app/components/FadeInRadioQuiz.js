import React from "react";
import RadioQuestion from "../components/quizTypes/RadioQuestion/RadioQuestion";

export default function FadeInRadioQuiz({ testName, questionIndex }) {
  return (
    <>
      <RadioQuestion testName={testName} questionIndex={questionIndex} />
      <RadioQuestion testName={testName} questionIndex={questionIndex} />
    </>
  );
}
