import React, { useState } from 'react'

import styles from './styles.css'

function InputField({ type, getvalueCallback }) {
  const [fieldValue, setFieldValue] = useState('')
  const [timer, setTimer] = useState()

  const changeValue = (val) => {
    setFieldValue(val)
    clearTimeout(timer)
    setTimer(
      setTimeout(() => {
        getvalueCallback(val)
      }, 500)
    )
  }

  const clearFieldValue = () => {
    clearTimeout(timer)
    setFieldValue('')
  }

  return (
    <div className={styles.inputFieldContainer}>
      <input
        type={type}
        name='value'
        className={styles.input}
        value={fieldValue}
        onChange={(e) => changeValue(e.target.value)}
      />
      <button className={styles.inputIcon} onClick={clearFieldValue}>
        {fieldValue.length > 0 ? (
          <img
            src='https://image.flaticon.com/icons/svg/126/126497.svg'
            alt='Close Icon'
            className={styles.clearIcon}
          />
        ) : null}
      </button>
    </div>
  )
}

export default InputField
