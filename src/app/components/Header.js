import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <Link href={"/"} className={styles.logo}>
          <Image
            src={"./images/logo-white.svg"}
            width={60}
            height={60}
            alt={"logo"}
          />
          <p className={styles.title}>Embrace Mental Illness</p>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Tests</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
