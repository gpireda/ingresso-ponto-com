import React from 'react'

import { MoviePoster, Trailer } from 'components'
import { Description } from './components'

import styles from './MovieDetail.module.scss'

interface IMovieDetailProps {
  movie: Event
}

const MovieDetail: React.FC<IMovieDetailProps> = ({
  movie,
}: IMovieDetailProps) => {
  return (
    <>
      {movie.trailers.length > 0 && (
        <Trailer title={movie.title} url={movie.trailers[0].embeddedUrl} />
      )}

      <div className={styles.movieDetailContainer}>
        <MoviePoster movie={movie} width='250px' />

        <Description movie={movie} />
      </div>
    </>
  )
}

export default MovieDetail
