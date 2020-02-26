import React from 'react'
import { mount } from 'enzyme'
import Loading from './Loading'

const container = mount(<Loading />)

it('renders correctly', () => {
  expect(container).toBeDefined()
})
