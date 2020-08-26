import React from 'react'

import styles from './styles.css'

function Select({ options, getvalueCallback }) {
  return (
    <select
      name='Select'
      className={styles.select}
      onChange={(e) => {
        getvalueCallback(e.target.value)
      }}
    >
      {options.map((option) => {
        return (
          <option
            key={option.value}
            value={option.value}
            className={styles.option}
          >
            {option.label}
          </option>
        )
      })}
    </select>
  )
}

export default Select
