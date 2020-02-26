import { filterTypes } from 'utils'

const uniqBy = require('lodash.uniqby')

const filterTypesPresenter = (movies: Array<any>) => {
  const validFilterTypes = filterTypes(
    movies.map(({ showtimes }) => showtimes),
  ).filter(({ display }: { display: boolean }) => display)

  return uniqBy(validFilterTypes, ({ alias }: { alias: string }) => alias)
}

export default filterTypesPresenter
