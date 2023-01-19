import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/audioPlayer.module.css";

const AudioPlayer = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // references audio component

  useEffect(() => {
    // const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(audioPlayer.current.duration);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes} : ${returnedSeconds}`;
  };

  // toggles
  const toggleDownloadStatus = () => {
    setIsDownloading(!isDownloading);
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
  };
  return (
    <div className={styles.main}>
      <audio
        ref={audioPlayer}
        id="track number 1"
        src="https://res.cloudinary.com/dye2elyds/video/upload/v1673963371/Listening%20Practice/080108-005_fb0pfn.wav"
        preload="metadata"
      ></audio>
      <div className={styles.latestAudioPlayer}>
        <div className={styles.details}>
          <h1 className={styles.latest}>Latest</h1>
          <div className={styles.latestRight}>
            <a className={styles.a}>01/02/2023</a>
            <div className={styles.artist}>Artist</div>
          </div>
        </div>
        <div className={styles.player}>
          <div className={styles.playerTop}>
            <a className={styles.a}>track title</a>
            <a className={styles.artist1}>artist</a>
          </div>
          <div className={styles.playerBottom}>
            <button onClick={togglePlayPause} className={styles.play}>
              {isPlaying ? "pause" : "play"}
            </button>

            <div className={styles.span}>
              {calculateTime(currentTime)} / {calculateTime(duration)}
            </div>

            <button onClick={toggleDownloadStatus} className={styles.pause}>
              {isDownloading ? "downloading" : "download"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AudioPlayer };
