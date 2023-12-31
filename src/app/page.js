import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/Button";
import TestCard from "./components/TestCard";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div>
            <h1>
              Strength in Every Struggle: <br /> Embrace Mental Illness, Embrace
              Life
            </h1>
            <p>
              Welcome at EMI, a place where we celebrate the strength within
              every struggle. Explore our empowering tests designed to guide you
              in nurturing mental illness.
            </p>
            <Button>Talk to us today</Button>
          </div>
          <Image
            src={"/images/absurd-designs-2.png"}
            width={500}
            height={500}
            alt={"humanoid light bulb"}
          ></Image>
        </div>
        {/* <div className={styles.quizContent}>
          <Quiz />
        </div> */}
        <section className={styles.sectionTests}>
          <h2>Our Tests</h2>
          <div className={styles.testsContainer}>
            <TestCard
              imageName={"degen2.jpg"}
              alt={"man drinking"}
              title={"Am I a Degenerate?"}
              description={"Find out if you're a disgrace to society."}
              href={"tests/degenerate-test"}
            />
            <TestCard
              imageName={"weebCardImg.jpg"}
              alt={"man drinking"}
              title={"Am I a Weeb?"}
              description={"Find out if you're a disgrace to society."}
              href={"tests/weeb-test"}
            />
            <TestCard
              imageName={"cuckholdCardImg.jpg"}
              alt={"man drinking"}
              title={"Am I a Cuck?"}
              description={"Find out if you're a disgrace to society."}
              href={"tests/cuck-test"}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
