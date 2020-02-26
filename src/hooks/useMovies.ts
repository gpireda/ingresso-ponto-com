import { useEffect, useState } from 'react'

import { client } from 'utils/client'

const useMovies = ({ cityId }: { cityId: string }) => {
  const [movies, setMovies] = useState<Array<Movie>>([])

  const getMovies = async () =>
    client.getEventsAndShowTimes({
      id: cityId,
    })

  useEffect(() => {
    getMovies().then(setMovies)

    return () => {
      setMovies([])
    }
  }, [cityId])

  return { movies }
}

export default useMovies
