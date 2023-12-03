import React from "react";
import styles from "./page.module.css";
import { quiz } from "./quiz";
import RadioQuizFadeSideways from "../../components/QuizComponents/RadioQuizFadeSideways";

export default function page() {
  return (
    <div className={`test-page ${styles.radioQuizTestPage}`}>
      <h1>Radio Quiz Testing</h1>
      <RadioQuizFadeSideways
        quiz={quiz}
        highPointsText={"highPointsText"}
        highMidPointsText={"highMidPointsText"}
        lowMidPointsText={"lowMidPointsText"}
        lowPointsText={"lowPointsText"}
      />
    </div>
  );
}
