"use client";
import React from "react";
import { useState } from "react";
import styles from "./page.module.css";

export default function page() {
  const [answer, setAnswer] = useState("");
  return (
    <div className={`test-page ${styles.weebTest}`}>
      <h1>Am I a Weeb?</h1>
      <br />
      <form action="">
        <h2>question</h2>
        <input
          type="radio"
          name="answer"
          id="answer1"
          value={answer}
          onChange={(event) => {
            setAnswer(event.target.value);
          }}
        />
        <label htmlFor="answer1">answer1</label>
        <br />
        <input
          type="radio"
          name="answer"
          id="answer2"
          value={answer}
          onChange={(event) => {
            setAnswer(event.target.value);
          }}
        />
        <label htmlFor="answer2">answer2</label>
      </form>
    </div>
  );
}
