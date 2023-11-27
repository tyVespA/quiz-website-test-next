import React from "react";
import { useState } from "react";
import styles from "./RadioQuestion.module.css";

export default function RadioQuestion() {
  const [answer, setAnswer] = useState("");

  // TODO:
  // - split answers in label and score
  // - add score screen
  // - fix radios

  const weebTest = [
    {
      question: "How often do you watch anime?",
      answers: ["1", "2", "3", "4"],
    },
    {
      question: "How often do you cum to hentai?",
      answers: ["q", "w", "e", "r"],
    },
  ];

  return (
    <div className={styles.form}>
      <form action="">
        {weebTest.map((question, index) => (
          <div key={index}>
            <h2>{question.question}</h2>
            {question.answers.map((answer, index) => (
              <label key={index} htmlFor={answer}>
                <input
                  type="radio"
                  name={"answer"}
                  id={answer}
                  value={answer}
                  onChange={(event) => {
                    setAnswer(event.target.value);
                  }}
                />
                {answer}
              </label>
            ))}
          </div>
        ))}
      </form>
      {/* <p>Answer: {answer}</p> */}
    </div>
  );
}
