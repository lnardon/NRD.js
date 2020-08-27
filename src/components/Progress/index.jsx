import React, { useRef, useEffect } from 'react'

import styles from './styles.css'

function Progress({ maxValue = 100, progressValue = 15 }) {
  const ref = useRef()

  useEffect(() => {
    ref.current.style.width = `${progressValue}%`
  }, [])

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressValue} ref={ref} />
      <h2 className={styles.value}>{progressValue}%</h2>
    </div>
  )
}

export default Progress
