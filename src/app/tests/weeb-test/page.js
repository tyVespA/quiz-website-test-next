"use client";
import React from "react";
import RadioQuestion from "../components/quizTypes/RadioQuestion";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className={`test-page ${styles.weebTest}`}>
      <h1>Am I a Weeb?</h1>
      <br />
      <RadioQuestion />
    </div>
  );
}
