import React from 'react'

import { Text } from '../../../../components'

import styles from './Description.module.scss'

interface DescriptionProps {
  movie: Event
}

const Description: React.FC<DescriptionProps> = ({
  movie,
}: DescriptionProps) => (
  <section className={styles.description}>
    <Text style={{ color: '#fff', marginBottom: '10px' }}>{movie?.title}</Text>

    {movie.completeTags && (
      <div className={styles.tags}>
        {movie.completeTags.map((tag: CompleteTag) => (
          <span key={tag.name} style={{ color: tag.color || '#fff' }}>
            {tag.name}
          </span>
        ))}
      </div>
    )}

    <div className={styles.synopsis}>
      <Text style={{ fontSize: 12 }}>{movie.synopsis}</Text>
    </div>
  </section>
)

export default Description
