import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/archive.module.css";

const Archive: NextPage = () => {
  return (
    <div className={styles.archive}>
      <Link href="/">
        <a className={styles.title}>
          <a className={styles.listeningPractice}>Listening Practice</a>
        </a>
      </Link>
      <div className={styles.player}>
        <div className={styles.playerTop}>
          <span className={styles.trackTitle}>track title</span>
          <span className={styles.artist}>artist</span>
        </div>
        <div className={styles.playerBottom}>
          <button className={styles.play}>play</button>
          <span className={styles.trackTitle}>00:00:00</span>
          <button className={styles.pause}>pause</button>
        </div>
      </div>
      <div className={styles.postDescription}>
        <p
          className={styles.thisMostRecent}
        >{`This most recent piece explores [...]. These themes are [of interest to me because / for the following reasons [...]].  It features music from [...]. `}</p>
      </div>
      <div className={styles.player1}>
        <div className={styles.playerTop}>
          <span className={styles.trackTitle}>track title</span>
          <span className={styles.artist}>artist</span>
        </div>
        <div className={styles.playerBottom}>
          <button className={styles.play}>play</button>
          <span className={styles.trackTitle}>00:00:00</span>
          <button className={styles.pause}>pause</button>
        </div>
      </div>
      <div className={styles.postDescription1}>
        <p
          className={styles.thisMostRecent}
        >{`This most recent piece explores [...]. These themes are [of interest to me because / for the following reasons [...]].  It features music from [...]. `}</p>
      </div>
      <div className={styles.player2}>
        <div className={styles.playerTop}>
          <span className={styles.trackTitle}>track title</span>
          <span className={styles.artist}>artist</span>
        </div>
        <div className={styles.playerBottom}>
          <button className={styles.play}>play</button>
          <span className={styles.trackTitle}>00:00:00</span>
          <button className={styles.pause}>pause</button>
        </div>
      </div>
      <div className={styles.postDescription2}>
        <p
          className={styles.thisMostRecent}
        >{`This most recent piece explores [...]. These themes are [of interest to me because / for the following reasons [...]].  It features music from [...]. `}</p>
      </div>
      <div className={styles.menu}>
        <a className={styles.archive1}>Archive</a>
        <Link href="/about">
          <a className={styles.about}>About</a>
        </Link>
      </div>
    </div>
  );
};

export default Archive;
