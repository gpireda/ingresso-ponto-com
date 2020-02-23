import React from 'react'

import styles from './MoviePoster.module.scss'

interface IMoviePosterProps {
  movie: Movie
}

const renderTags = (movie: Movie) => (
  <div className={styles.tagsContainer}>
    {movie.completeTags.map((tag: any) => (
      <span
        className={styles.tag}
        style={{ background: tag.background, color: tag.color }}
        key={tag.name}
      >
        {tag.name}
      </span>
    ))}
  </div>
)

const MoviePoster: React.FC<IMoviePosterProps> = ({
  movie,
}: IMoviePosterProps) => {
  const hasTrailer = movie.trailers?.length > 0
  const hasTags = movie.completeTags?.length > 0

  return (
    <picture key={movie.id}>
      <a
        href={hasTrailer ? movie.trailers[0].url : undefined}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={movie.url} alt={movie.title} width="200px" />
        {hasTags && renderTags(movie)}
      </a>

      <figcaption className={styles.figcaption}>{movie.title}</figcaption>
    </picture>
  )
}

export default MoviePoster
