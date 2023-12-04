import React from "react";
import styles from "./page.module.css";
import { quiz } from "@/app/assets/quizTemplate";
import RadioQuizFadeSideways from "../../components/QuizComponents/RadioQuizFadeSideways";

export default function page() {
  return (
    <div className={`test-page ${styles.radioQuizTestPage}`}>
      <h1>Degenerate test</h1>
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
