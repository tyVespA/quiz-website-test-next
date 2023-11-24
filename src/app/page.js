import styles from "./page.module.css";
import Question from "./components/Question";
import Quiz from "./components/Quiz";

export default function Home() {
  return (
    <main>
      <div className={styles.quizContent}>
        <Quiz />
      </div>
    </main>
  );
}
