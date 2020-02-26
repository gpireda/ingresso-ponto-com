import { Checkbox, Heading, List, Loading } from 'components'
import { useCheckbox, useMovies } from 'hooks'
import React from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import { filterTypesPresenter, moviesFilter } from 'utils'
import MovieDetail from 'views/MovieDetail/MovieDetail'

interface CurrentLocation {
  currentLocation: string
}

interface MoviesListProps extends RouteComponentProps<CurrentLocation> {
  searchText: string
}

const MoviesList: React.FC<MoviesListProps> = ({
  match: {
    params: { currentLocation },
  },
  searchText,
}: MoviesListProps) => {
  const { movies } = useMovies({
    cityId: currentLocation === 'sao-paulo' ? '1' : '2',
  })
  const { handleCheckboxToggle, selected } = useCheckbox()

  if (movies.length === 0) {
    return <Loading />
  }

  const renderCheckbox = (type: FilterType) => (
    <Checkbox
      checked={selected.some(item => item === type.alias)}
      key={type.alias}
      onChange={handleCheckboxToggle}
      type={type}
    />
  )

  const renderMoviesList = (
    routeProps: RouteComponentProps<MoviesListRouteProps>,
  ) => (
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
  )

  const renderMovieDetail = (
    routeProps: RouteComponentProps<MovieDetailRouteProps>,
  ) => (
    <MovieDetail
      movie={
        movies.find(
          (movie: Movie) =>
            movie.event.urlKey === routeProps.match.params.movie,
        )?.event
      }
      {...routeProps}
    />
  )

  return (
    <Switch>
      <Route path='/:currentLocation/filme/:movie' render={renderMovieDetail} />

      <Route path='/:currentLocation' render={renderMoviesList} />
    </Switch>
  )
}

export default MoviesList
