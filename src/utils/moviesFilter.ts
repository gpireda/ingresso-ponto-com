import filterTypes from './filterTypes'

import { removeWhiteSpaces } from './'

const filterBySearchText = (movie: Movie, searchText: string) => {
  if (!searchText) {
    return movie.event
  }

  const normalizedEventTitle = movie.event.title.toLowerCase()
  const normalizedSearchText = searchText.toLowerCase()

  if (
    removeWhiteSpaces(normalizedEventTitle).includes(
      removeWhiteSpaces(normalizedSearchText),
    )
  ) {
    return movie.event
  }
}

const filterByCheckbox = (movie: Movie, selected: Array<string>) => {
  if (selected.length === 1) {
    return movie
  }

  const types = filterTypes(
    movie.showtimes,
  ).filter(({ alias }: { alias: string }) => selected.includes(alias))

  if (types.length >= 1) {
    return movie
  }
}

const moviesFilter = (
  movies: Array<Movie>,
  searchText: string,
  selected: Array<string>,
) =>
  movies
    .filter((movie: Movie) => filterBySearchText(movie, searchText))
    .filter((movie: Movie) => filterByCheckbox(movie, selected))

export default moviesFilter
