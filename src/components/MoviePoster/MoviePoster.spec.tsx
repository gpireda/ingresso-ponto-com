import React from 'react'
import { mount } from 'enzyme'
import MoviePoster from './MoviePoster'
import { MemoryRouter } from 'react-router-dom'

const movie = {
  completeTags: [
    {
      background: '',
      color: '',
      name: 'Em alta',
    },
  ],
  id: 1,
  images: [
    {
      type: '',
      url: 'https:/some-image-url.com',
    },
  ],
  synopsis: 'Lorem ipsum',
  tags: ['3D', 'Em alta'],
  trailers: [],
  title: 'Some title',
  url: 'https://some-url.com',
  urlKey: '/some-title',
}

const container = mount(
  <MemoryRouter>
    <MoviePoster movie={movie} />
  </MemoryRouter>,
)

it('renders correctly', () => {
  expect(container).toBeDefined()
})

it('renders banner with correct css class when no children is present', () => {
  expect(container.find('img').prop('className')).toContain('static')
})

it('renders banner with correct css class when no children is absent', () => {
  const withChildrenContainer = mount(
    <MemoryRouter>
      <MoviePoster movie={movie}>children</MoviePoster>
    </MemoryRouter>,
  )

  expect(container.find('img').prop('className')).toContain('static')
})
