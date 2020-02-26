import React from 'react'

import { MoviePoster, Trailer } from 'components'
import { Description } from './components'

import styles from './MovieDetail.module.scss'
import { Redirect } from 'react-router-dom'

interface MovieDetailProps {
  movie?: MovieEvent
}

const MovieDetail: React.FC<MovieDetailProps> = ({
  movie,
}: MovieDetailProps) => {
  if (!movie) {
    return <Redirect to='/' />
  }

  return (
    <>
      {movie.trailers.length > 0 && (
        <Trailer title={movie.title} url={movie.trailers[0].embeddedUrl} />
      )}

      <div className={styles.movieDetailContainer}>
        <MoviePoster movie={movie} />

        <Description movie={movie} />
      </div>
    </>
  )
}

export default MovieDetail
