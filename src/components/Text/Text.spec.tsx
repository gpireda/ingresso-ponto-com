import React from 'react'
import { mount } from 'enzyme'
import Text from './Text'

const container = mount(<Text>Ipsum</Text>)

it('renders correctly', () => {
  expect(container).toBeDefined()
})
