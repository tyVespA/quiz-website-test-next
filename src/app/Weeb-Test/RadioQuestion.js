import React from "react";
import { useState } from "react";

export default function RadioQuestion() {
  const [answer, setAnswer] = useState("");

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
    <div>
      <form action="">
        {weebTest.map((question, index) => {
          return (
            <div key={index}>
              <h2>{question.question}</h2>
              {question.answers.map((answer, index) => {
                return (
                  <label key={index} htmlFor={answer}>
                    <input
                      type="radio"
                      name="answer"
                      id={answer}
                      value={answer}
                      onChange={(event) => {
                        setAnswer(event.target.value);
                      }}
                    />
                    {answer}
                  </label>
                );
              })}
            </div>
          );
        })}
      </form>
      {/* <form action="">
        <h2>How often do you watch anime?</h2>
        <label htmlFor="answer1">
          <input
            type="radio"
            name="answer"
            id="answer1"
            value={"Answer 1"}
            onChange={(event) => {
              setAnswer(event.target.value);
            }}
          />
          Answer 1
        </label>
        <label htmlFor="answer2">
          <input
            type="radio"
            name="answer"
            id="answer2"
            value={"Answer 2"}
            onChange={(event) => {
              setAnswer(event.target.value);
            }}
          />
          Answer 2
        </label>
        <label htmlFor="answer3">
          <input
            type="radio"
            name="answer"
            id="answer3"
            value={"Answer 3"}
            onChange={(event) => {
              setAnswer(event.target.value);
            }}
          />
          Answer 3
        </label>
      </form> */}
      <p>Answer: {answer}</p>
    </div>
  );
}
