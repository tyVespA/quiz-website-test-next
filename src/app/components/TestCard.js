import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TestCard.module.css";

export default function TestCard({ imageName, alt, title, description }) {
  return (
    <Link href={"/"}>
      <div className={styles.testCardContainer}>
        <div className={styles.imageContainer}>
          <img src={`/images/${imageName}`} alt={alt} />
        </div>
        <div className={styles.textContainer}>
          <h3>{title}</h3>
          <p>{description}</p>
          <Link href={"/"}>Take the test →</Link>
        </div>
      </div>
    </Link>
  );
}
