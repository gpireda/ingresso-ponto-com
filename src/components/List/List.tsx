import { MoviePoster } from 'components'
import React from 'react'

import styles from './List.module.scss'

interface IListProps {
  items: any
  label: string
  match: {
    url: string
  }
}

const List: React.FC<IListProps> = ({ items, label, match }: IListProps) => {
  const renderMoviePoster = (movie: any) => (
    <MoviePoster
      key={movie.event.id}
      // eslint-disable-next-line react/prop-types
      link={`${match.url}/filme/${movie.event.urlKey}`}
      movie={movie.event}
    />
  )

  return (
    <section className='movies-list'>
      <h2 className={styles.label}>{label}</h2>

      <div className={styles.listContainer}>{items.map(renderMoviePoster)}</div>
    </section>
  )
}

export default List
