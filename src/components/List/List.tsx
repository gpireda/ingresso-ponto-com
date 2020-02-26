import { MoviePoster } from 'components'
import React from 'react'
import { match, RouteComponentProps } from 'react-router-dom'

import styles from './List.module.scss'

interface ListProps extends RouteComponentProps {
  items: Array<Movie>
  label: string
  match: match
}

const List: React.FC<ListProps> = (props: ListProps) => {
  const {
    items,
    label,
    match: { url },
  } = props

  const renderMoviePoster = (movie: Movie) => (
    <MoviePoster
      key={movie.event.id}
      link={`${url}/filme/${movie.event.urlKey}`}
      movie={movie.event}
    >
      <figcaption className={styles.figcaption}>{movie.event.title}</figcaption>
    </MoviePoster>
  )

  return (
    <section className='movies-list'>
      <h2 className={styles.label}>{label}</h2>

      <div className={styles.listContainer}>{items.map(renderMoviePoster)}</div>
    </section>
  )
}

export default List
