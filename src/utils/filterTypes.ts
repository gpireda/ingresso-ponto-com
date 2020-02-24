const filterTypes = (showtimes: any) =>
  showtimes
    .flat()
    .map(({ rooms }: any) => rooms)
    .flat()
    .map(({ sessions }: any) => sessions)
    .flat()
    .map(({ types }: any) => types)
    .flat()

export default filterTypes
