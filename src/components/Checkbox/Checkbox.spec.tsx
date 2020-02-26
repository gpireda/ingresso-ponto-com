import { mount } from 'enzyme'
import React from 'react'

import Checkbox from './Checkbox'

const props = {
  checked: false,
  type: {
    alias: '3D',
    id: 1,
    type: '3D',
  },
}

const onChangeMock = jest.fn()
const container = mount(<Checkbox {...props} onChange={onChangeMock} />)

it('renders Checkbox correctly', () => {
  expect(container).toBeDefined()
})

it('renders correct label', () => {
  const label = container.find('span').at(1)
  expect(label.text()).toEqual('3D')
})

it('invokes onChange callback on change', () => {
  container.find('input').simulate('change')

  expect(onChangeMock).toHaveBeenCalled()
})

it('adds correct className when checked', () => {
  const checkedContainer = mount(
    <Checkbox {...props} checked={true} onChange={onChangeMock} />,
  )

  expect(checkedContainer.find('div').prop('className')).toContain('checked')
})
