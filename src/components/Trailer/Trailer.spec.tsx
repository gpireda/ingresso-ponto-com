import React from 'react'
import { mount } from 'enzyme'
import Trailer from './Trailer'

const container = mount(
  <Trailer title='some title' url='https://some-url.com' />,
)

it('renders correctly', () => {
  expect(container).toBeDefined()
})
