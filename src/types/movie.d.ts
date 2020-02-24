interface CompleteTag {
  background: string
  color: string
  name: string
}

interface Trailer {
  embeddedUrl: string
  type: string
  url: string
}

interface MovieImage {
  type: string
  url: string
}

interface Movie {
  completeTags: Array<CompleteTag>
  id: number
  images: Array<MovieImage>
  tags: Array<string>
  trailers: Array<Trailer>
  title: string
  url: string
  urlKey: string
}
