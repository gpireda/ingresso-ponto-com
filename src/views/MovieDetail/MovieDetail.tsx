import React from 'react'

import { Text, Trailer } from 'components'

import styles from './MovieDetail.module.scss'

interface IMovieDetailProps {
  movie: any
}

const MovieDetail: React.FC<IMovieDetailProps> = ({
  movie,
}: IMovieDetailProps) => {
  return (
    <>
      {movie.trailers.length > 0 && (
        <Trailer url={movie.trailers[0].embeddedUrl} />
      )}

      <div className={styles.movieDetailContainer}>
        <picture>
          <img src={movie.images[0].url} alt={movie.title} width='250px' />
        </picture>

        <section className={styles.description}>
          <Text style={{ color: '#fff', marginBottom: '10px' }}>
            {movie?.title}
          </Text>

          {movie.completeTags && (
            <div className={styles.tags}>
              {movie.completeTags.map((tag: any) => (
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
      </div>
    </>
  )
}

export default MovieDetail
