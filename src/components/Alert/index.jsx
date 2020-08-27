import React from 'react'

import styles from './styles.css'

function Alert({ message }) {
  return (
    <div className={styles.alertContainer}>
      <img
        src='https://image.flaticon.com/icons/svg/550/550096.svg'
        alt='Icon'
        className={styles.alertIcon}
      />
      <h3 className={styles.message}>{message}</h3>
    </div>
  )
}

export default Alert
