import filterTypes from './filterTypes'

const removeWhiteSpaces = (text: string) => text.replace(/\W/g, '')

const moviesFilter = (
  movies: any,
  searchText: string,
  selected: Array<string>,
) =>
  movies
    .filter((movie: any) => {
      if (!searchText) {
        return movie.event
      }

      if (
        removeWhiteSpaces(movie.event.title.toLowerCase()).includes(
          removeWhiteSpaces(searchText.toLowerCase()),
        )
      ) {
        return movie.event
      }
    })
    .filter((movie: any) => {
      // tem erro aqui: não está considerando todos os tipos
      if (selected.length === 1) {
        return movie
      }

      const types = filterTypes(movie.showtimes).filter(({ alias }: any) =>
        selected.includes(alias),
      )

      if (types.length > 1) {
        return movie
      }
    })

export default moviesFilter
