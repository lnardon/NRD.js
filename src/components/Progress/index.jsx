import React, { useRef, useEffect } from 'react'

import styles from './styles.css'

function Progress({ progressValue = 50 }) {
  const ref = useRef()

  useEffect(() => {
    ref.current.style.width = `${progressValue}%`
  }, [ref])

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressValue} ref={ref} />
    </div>
  )
}

export default Progress
