import React from 'react'
import { Text } from 'components'
import styles from './Checkbox.module.scss'

interface ICheckboxProps {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>, alias: string) => null
  type: FilterType
}

const Checkbox: React.FC<ICheckboxProps> = ({
  checked,
  onChange,
  type,
}: ICheckboxProps) => (
  <span className={styles.checkbox} key={type.id}>
    <label>
      <input
        checked={checked}
        id={type.type}
        type='checkbox'
        onChange={e => onChange(e, type.alias)}
        value={type.alias}
      />
      <div className={checked ? styles.checked : ''} />
      <Text>{type.alias}</Text>
    </label>
  </span>
)

export default Checkbox
