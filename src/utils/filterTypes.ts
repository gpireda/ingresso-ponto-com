const filterTypes = (showtimes: Array<ShowTime>) =>
  showtimes
    .flat()
    .map(({ rooms }: { rooms: Array<Room> }) => rooms)
    .flat()
    .map(({ sessions }: { sessions: Array<Session> }) => sessions)
    .flat()
    .map(({ types }: { types: Array<SessionType> }) => types)
    .flat()

export default filterTypes
