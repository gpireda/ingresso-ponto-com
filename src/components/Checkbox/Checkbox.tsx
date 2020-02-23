import React from 'react'

import styles from './Checkbox.module.scss'

interface ICheckboxProps {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => null
  type: FilterType
}

const Checkbox: React.FC<ICheckboxProps> = ({
  checked,
  onChange,
  type,
}: ICheckboxProps) => (
  <span key={type.id}>
    <label>
      <input
        checked={checked}
        id={type.type}
        type="checkbox"
        onChange={e => onChange(e, type.id)}
        value={type.type}
      />
      <div className={checked ? styles.checked : ''} />
      <span>{type.type}</span>
    </label>
  </span>
)

export default Checkbox
