import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.logo}>
        <Image
          src={"./images/logo-white.svg"}
          width={65}
          height={65}
          alt={"logo"}
        />
        <p className={styles.title}>DrK Tests</p>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Tests</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
