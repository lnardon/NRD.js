import React, { useRef } from 'react'

import styles from './styles.css'

function Drawer({ title = 'Drawer Header', toggle = true }) {
  const ref = useRef()

  const handleClose = () => {
    ref.current.classList.add(styles.close)
    ref.current.classList.remove(styles.add)
  }

  return (
    <div
      ref={ref}
      className={`${styles.drawerTab} ${toggle ? styles.open : styles.close}`}
    >
      <div className={styles.drawerTabHeader}>
        <h2 className={styles.drawerTitle}>{title}</h2>
        <img
          src='https://image.flaticon.com/icons/svg/748/748122.svg'
          alt='Close Icon'
          className={styles.closeIcon}
          onClick={handleClose}
        />
      </div>
    </div>
  )
}

export default Drawer
