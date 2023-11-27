import React from "react";
import { useState } from "react";
import RadioQuestion from "../components/quizTypes/RadioQuestion/RadioQuestion";

export default function FadeInRadioQuiz({ testName, questionIndex }) {
  const [score, setScore] = useState(0);

  return (
    <>
      <RadioQuestion
        testName={testName}
        questionIndex={questionIndex}
        score={score}
        setScore={setScore}
      />
    </>
  );
}
