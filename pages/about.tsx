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
          <br></br>
          Each work is an exploration of a sound, a style, or an interweaving
          between either sounds, styles, or both.<br></br> I’ve been thinking
          about the practice of listening for some time and have wanted to
          develop it beyond just theory and into a kind of creative
          practice—currently taking the format of the 1 hour mix.<br></br>This
          is out of a love for this mode of presentation, its accessibility, and
          my limited technical skills around internet and web design technology.
          With this limitation and focus in place, this website has been
          developed to host and share my own and invited guests mixes that focus
          on the practice of listening. Each mix is accompanied by a writing
          abstract to give context.
          <br></br>
          <br></br>I will continue to list resources that are informing and
          orienting my thinking and work related to listening here.<br></br>
          <br></br>Quantum Listening By Pauline Oliveros
          <br></br>
          Deep Listening: A Composer's Sound Practice by Pauline Oliveros
        </p>
      </div>
      <div className={styles.listeningPracticeIsAPlace}>
        You can find my portfolio&nbsp;
        <a href="https://www.listening.studio">here</a>
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
