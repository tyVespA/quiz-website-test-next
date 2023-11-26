import React from "react";
import styles from "./ScoreScreen.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function ScoreScreen({ score }) {
  const [result, setResult] = useState("");

  useEffect(() => {
    if (score < 5) {
      setResult("You classify as a normal human being");
    } else if (score >= 5 && score < 7) {
      setResult("You are fairly degen");
    } else if (score >= 7) {
      setResult("You are full degen");
    }
  }, [score]);

  return (
    <div className={styles.scoreScreen}>
      <h2>{`You scored ${score}/10`}</h2>
      <h2>{result}</h2>
    </div>
  );
}
