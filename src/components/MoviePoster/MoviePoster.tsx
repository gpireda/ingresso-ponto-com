import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'components'

import styles from './MoviePoster.module.scss'

interface IMoviePosterProps {
  children?: React.ReactNode
  link?: string
  movie: Event
  width?: string
}

const renderTags = (movie: Event) => (
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

const renderBanner = (showTags: boolean, movie: Event, width = '200px') => {
  const hasTags = movie.completeTags?.length > 0
  const shouldRenderTags = showTags && hasTags

  return (
    <React.Fragment key={movie.id}>
      <img
        className={!showTags ? styles.static : ''}
        src={movie.images[0].url}
        alt={movie.title}
        width={width}
      />
      {shouldRenderTags && renderTags(movie)}
    </React.Fragment>
  )
}

const MoviePoster: React.FC<IMoviePosterProps> = ({
  children,
  link,
  movie,
  width = '200px',
}: IMoviePosterProps) => (
  <picture className={styles.picture} style={{ width }} key={movie.id}>
    <Link to={link || '#'}>{renderBanner(!!children, movie, width)}</Link>

    {children}
  </picture>
)

export default MoviePoster
