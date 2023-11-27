import React from "react";
import FadeInRadio from "../components/quizTypes/FadeInRadio/FadeInRadio";

export default function page() {
  return (
    <div className="test-page">
      <h1>cuck test</h1>
      <div className="quiz-container">
        <FadeInRadio questionIndex={"0"} />
        <FadeInRadio questionIndex={"0"} />
      </div>
    </div>
  );
}
