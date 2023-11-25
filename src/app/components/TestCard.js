import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TestCard.module.css";

export default function TestCard({ imageName, alt, title, description }) {
  return (
    <div className={styles.testCardContainer}>
      <div className={styles.imageContainer}>
        <img src={`/images/${imageName}`} alt={alt} />
      </div>
      <div className={styles.textContainer}>
        <Link href={"/"}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <Link href={"/"}>Take the test →</Link>
      </div>
    </div>
  );
}
