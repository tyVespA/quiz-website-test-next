"use client";
import React from "react";
import styles from "./Question.module.css";

export default function Question() {
  return (
    <div className={styles.questionContainer}>
      <h2>How do you feel about anime?</h2>
      <form
        action=""
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <button>I'm a huge fan</button>
        <button>I like some</button>
        <button>I cum to hentai</button>
        <button>I don't really like them</button>
      </form>
    </div>
  );
}
