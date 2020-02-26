import { Checkbox, Heading, List, Loading } from 'components'
import { useCheckbox, useMovies } from 'hooks'
import React from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import { filterTypesPresenter, moviesFilter } from 'utils'
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

  const renderMoviesList = (routeProps: any) => (
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

  const renderMovieDetail = (routeProps: any) => (
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
