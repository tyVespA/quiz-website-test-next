import React from "react";
import styles from "./page.module.css";
import Quiz from "../components/Quiz";

export default function page() {
  return (
    <div className={styles.page}>
      <h1>Am I a Degenerate?</h1>
      <Quiz />
    </div>
  );
}
