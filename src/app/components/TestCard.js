import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/TestCard.module.css";

export default function TestCard({ imageName, alt, title, description, href }) {
  return (
    <div className={styles.testCardContainer}>
      <Link href={`/${href}`}>
        <div className={styles.imageContainer}>
          <img src={`/images/${imageName}`} alt={alt} />
        </div>
      </Link>
      <div className={styles.textContainer}>
        <Link href={`/${href}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <Link href={`/${href}`}>Take the test →</Link>
      </div>
    </div>
  );
}
