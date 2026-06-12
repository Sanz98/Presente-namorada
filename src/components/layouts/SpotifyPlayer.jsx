import styles from "./SpotifyPlayer.module.css";
import anima from "../../styles/animations.module.css";

function SpotifyPlayer() {
  return (
    <div className={`${styles.spotifyPlayer} ${anima.slideInTop}`}>
      <iframe
        src="https://open.spotify.com/embed/track/3PlKQNlbL4767rND3HnqSI?utm_source=generator&si=d1459c5382064077"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Nossa Música"
      ></iframe>
    </div>
  );
}

export default SpotifyPlayer;