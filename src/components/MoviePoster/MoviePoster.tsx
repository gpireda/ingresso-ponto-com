import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'components'

import styles from './MoviePoster.module.scss'

interface MoviePosterProps {
  children?: React.ReactNode
  link?: string
  movie: MovieEvent
}

const renderTags = (movie: MovieEvent) => (
  <div className={styles.tagsContainer}>
    {movie.completeTags.map((tag: CompleteTag) => (
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

const renderBanner = (showTags: boolean, movie: MovieEvent) => {
  const hasTags = movie.completeTags?.length > 0

  return (
    <React.Fragment key={movie.id}>
      <img
        className={!showTags ? styles.static : ''}
        src={movie.images[0].url}
        alt={movie.title}
      />
      {hasTags && renderTags(movie)}
    </React.Fragment>
  )
}

const MoviePoster: React.FC<MoviePosterProps> = ({
  children,
  link,
  movie,
}: MoviePosterProps) => (
  <picture className={styles.picture} key={movie.id}>
    <Link to={link || '#'}>{renderBanner(!!children, movie)}</Link>

    {children}
  </picture>
)

export default MoviePoster
