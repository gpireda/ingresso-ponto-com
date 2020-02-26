import React from 'react'
import { mount } from 'enzyme'
import Heading from './Heading'

const container = mount(<Heading>Lorem</Heading>)

it('renders correctly', () => {
  expect(container).toBeDefined()
})

it('renders correct children', () => {
  expect(container.prop('children')).toEqual('Lorem')
})
