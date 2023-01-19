import Head from "next/head";

import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/index.module.css";

import { AudioPlayer } from "../components/AudioPlayer.js";

// import React from "react";
// import ReactPlayer from "react-player";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Listening Practice</title>
        <link ref="icon" href="/favicon.ico" />
      </Head>
      <a className={styles.title}>
        <a className={styles.listeningPractice}>Listening Practice</a>
      </a>
      <AudioPlayer />

      <div className={styles.postDescription}>
        <p className={styles.thisMostRecent}>
          This most recent piece explores [...]. These themes are [of interest
          to me because / for the following reasons [...]]. It features music
          from [...]. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum ornare lorem purus, nec lacinia velit accumsan sed. In et
          tortor diam. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. In tempor elit non dui finibus
          lobortis. Curabitur pretium in lectus quis fringilla. Integer mi eros,
          malesuada nec suscipit eu, ullamcorper venenatis augue. Sed elementum,
          magna sit amet interdum efficitur, nisi nulla ultrices arcu, vel
          feugiat ante magna ac metus. Sed ut ex eget lacus vestibulum accumsan
          sit amet at sem. Maecenas non volutpat nulla, id posuere mauris.
        </p>
      </div>
      <div className={styles.menu}>
        <Link href="/archive">
          <a className={styles.archive}>Archive</a>
        </Link>
        <Link href="/about">
          <a className={styles.about}>About</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
