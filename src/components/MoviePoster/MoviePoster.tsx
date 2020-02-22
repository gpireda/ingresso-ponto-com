import React from "react";

import styles from "./MoviePoster.module.css";

interface IMoviePosterProps {
  movie: any;
}

const MoviePoster: React.FC<IMoviePosterProps> = ({ movie }) => (
  <picture
    key={movie.id}
    onClick={() => window.alert(`Clicked on ${movie.title}`)}
  >
    <img src={movie.url} alt={movie.title} width="200px" />
    <div className={styles.genresContainer}>
      <span className={`${styles.genre} ${styles.family}`}>família</span>
      <span className={`${styles.genre} ${styles.highlight}`}>em alta</span>
    </div>
    <figcaption className={styles.figcaption}>{movie.title}</figcaption>
  </picture>
);

export default MoviePoster;
