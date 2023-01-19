import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/about.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.about}>
      <Link href="/">
        <a className={styles.title}>
          <a className={styles.listeningPractice}>Listening Practice</a>
        </a>
      </Link>
      <div className={styles.listeningPracticeIsAPlace}>
        <p className={styles.listeningPracticeIs}>
          Listening practice is a place for gathering mixes and sound pieces.
          Each work is an exploration of a sound, a style, or an interweaving
          between either sounds, styles, or both.
        </p>
      </div>
      <div className={styles.menu}>
        <Link href="/archive">
          <a className={styles.archive}>Archive</a>
        </Link>
        <Link href="/about">
          <a className={styles.about1}>About</a>
        </Link>
      </div>
    </div>
  );
};

export default About;
