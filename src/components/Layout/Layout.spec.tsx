import React from 'react'
import { mount } from 'enzyme'
import Layout from './Layout'

const container = mount(
  <Layout>
    <></>
  </Layout>,
)

it('renders correctly', () => {
  expect(container).toBeDefined()
})
