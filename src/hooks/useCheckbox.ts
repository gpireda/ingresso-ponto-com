import React, { useState } from 'react'

const useCheckbox = () => {
  const [selected, setSelected] = useState([''])

  const handleCheckboxToggle = (
    e: React.ChangeEvent<HTMLInputElement>,
    alias: string,
  ) => {
    if (e.target.checked) {
      setSelected([...selected, alias])
    } else {
      setSelected(selected.filter(item => item !== alias))
    }

    return null
  }

  return { handleCheckboxToggle, selected }
}

export default useCheckbox
