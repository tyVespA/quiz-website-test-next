import React from "react";
import styles from "./page.module.css";
import RadioQuiz from "./RadioQuiz";

export default function page() {
  return (
    <div className={`test-page ${styles.radioQuizTestPage}`}>
      <h1>Radio Quiz Testing</h1>
      <RadioQuiz></RadioQuiz>
    </div>
  );
}
