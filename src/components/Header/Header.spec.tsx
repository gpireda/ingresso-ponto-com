import React from 'react'
import { mount } from 'enzyme'
import Header from './Header'
import { MemoryRouter } from 'react-router-dom'

const onCurrentLocationToggleMock = jest.fn()
const onSearchChangeMock = jest.fn()

const container = mount(
  <MemoryRouter>
    <Header
      locationSlug='rio-de-janeiro'
      onCurrentLocationToggle={onCurrentLocationToggleMock}
      onSearchChanged={onSearchChangeMock}
      searchText=''
    />
  </MemoryRouter>,
)

it('renders correctly', () => {
  expect(container).toBeDefined()
})

it('invokes onSearchChanged when search text input changes', () => {
  const targetValue = 'bla'
  const event = { target: { value: targetValue } }
  const input = container.find('input')
  input.simulate('change', event)
  container.update()

  expect(onSearchChangeMock).toHaveBeenCalledWith(targetValue)
})

it('invokes onCurrentLocation toggle on location click and sets correct href', () => {
  const targetValue = '/sao-paulo'
  const link = container.find('a').at(1)
  link.simulate('click')

  expect(onSearchChangeMock).toHaveBeenCalled()
  expect(link.prop('href')).toEqual(targetValue)
})
