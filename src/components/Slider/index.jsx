import React from 'react'

import styles from './styles.css'

function Slider({ min, max, getvalueCallback }) {
  return (
    <input
      className={styles.slider}
      type='range'
      name='Slider'
      onChange={(e) => getvalueCallback(e.target.value)}
      min={min}
      max={max}
      tooltip={min}
      defaultValue={min}
    />
  )
}

export default Slider
