import { render } from 'enzyme'
import React from 'react'

import App from './App'

const container = render(<App />)

test('renders learn react link', () => {
  expect(container).toBeDefined()
})

test('renders Header component', () => {
  const header = container.find('Header')
  expect(header).toBeDefined()
})

test('renders Layout', () => {
  const layout = container.find('Layout')
  expect(layout).toBeDefined()
})
