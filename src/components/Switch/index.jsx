import React from 'react'

import styles from './styles.css'

function Switch({ getState }) {
  return (
    <label className={styles.switch}>
      <input className={styles.input} type='checkbox' />
      <span className={styles.slider} />
    </label>
  )
}

export default Switch
