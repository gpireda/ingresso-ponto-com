import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'components'

import styles from './MoviePoster.module.scss'

interface IMoviePosterProps {
  link?: string
  movie: any
}

const renderTags = (movie: Movie) => (
  <div className={styles.tagsContainer}>
    {movie.completeTags.map((tag: any) => (
      <Text
        className={styles.tag}
        style={{ background: tag.background, color: tag.color }}
        key={tag.name}
      >
        {tag.name}
      </Text>
    ))}
  </div>
)

const renderBanner = (movie: Movie, width = '200px') => {
  const hasTags = movie.completeTags?.length > 0

  return (
    <React.Fragment key={movie.id}>
      <img src={movie.images[0].url} alt={movie.title} width={width} />
      {hasTags && renderTags(movie)}
    </React.Fragment>
  )
}

const MoviePoster: React.FC<IMoviePosterProps> = ({
  link,
  movie,
}: IMoviePosterProps) => (
  <picture className={styles.picture} key={movie.id}>
    <Link to={link || '#'}>{renderBanner(movie)}</Link>

    <figcaption className={styles.figcaption}>{movie.title}</figcaption>
  </picture>
)

export default MoviePoster
