import React from "react";
import styles from "./page.module.css";
import Quiz from "../components/quizTypes/Quiz";

export default function page() {
  return (
    <div className="test-page">
      <h1>Am I a Degenerate?</h1>
      <Quiz />
    </div>
  );
}
