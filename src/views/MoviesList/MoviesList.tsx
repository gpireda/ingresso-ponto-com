import { Checkbox, Heading, List, Loading } from 'components'
import React, { useEffect, useState } from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router-dom'
import { filterTypesPresenter, moviesFilter } from 'utils'
import { client } from 'utils/client'
import MovieDetail from 'views/MovieDetail/MovieDetail'

interface MoviesListRouteProps {
  currentLocation: string
}

interface MoviesListProps extends RouteComponentProps<MoviesListRouteProps> {
  searchText: string
}

const MoviesList: React.FC<MoviesListProps> = ({
  match,
  searchText,
}: MoviesListProps) => {
  const {
    params: { currentLocation },
  } = match

  const [movies, setMovies] = useState<Array<Movie>>([])
  const [selected, setSelected] = useState([''])

  const getMovies = async () =>
    client.getEventsAndShowTimes({
      id: currentLocation === 'sao-paulo' ? '1' : '2',
    })

  useEffect(() => {
    if (movies.length > 0) {
      setMovies([])
    }

    getMovies().then(setMovies)
  }, [currentLocation])

  if (movies.length === 0) {
    return <Loading />
  }

  const handleCheckboxToggle = (
    e: React.ChangeEvent<HTMLInputElement>,
    alias: string,
  ) => {
    if (e.target.checked) {
      setSelected([...selected, alias])
    } else {
      setSelected(selected.filter(item => item !== alias))
    }

    return null
  }

  const renderCheckbox = (type: FilterType) => (
    <Checkbox
      checked={selected.some(item => item === type.alias)}
      key={type.alias}
      onChange={handleCheckboxToggle}
      type={type}
    />
  )

  return (
    <Switch>
      <Route
        path='/:currentLocation/filme/:movie'
        render={(routeProps: any) => (
          <MovieDetail
            movie={
              movies.find(
                (movie: Movie) =>
                  movie.event.urlKey === routeProps.match.params.movie,
              )?.event
            }
            {...routeProps}
          />
        )}
      />

      <Route
        path='/:currentLocation'
        render={(routeProps: any) => (
          <>
            <section className='movies-filters'>
              <Heading>Filmes</Heading>

              {filterTypesPresenter(movies).map(renderCheckbox)}
            </section>

            <List
              items={moviesFilter(movies, searchText, selected)}
              label='Em cartaz'
              {...routeProps}
            />
          </>
        )}
      />
    </Switch>
  )
}

export default MoviesList
