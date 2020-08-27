import React, { useRef, useEffect } from 'react'

import styles from './styles.css'

function Progress({ maxValue = 100, progressValue = 70 }) {
  const ref = useRef()

  useEffect(() => {
    console.log((progressValue * maxValue) / 100)
    ref.current.style.width = `${(progressValue * 100) / maxValue}%`
  }, [])

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressValue} ref={ref} />
      <h2 className={styles.value}>{`${(progressValue * 100) / maxValue}%`}</h2>
    </div>
  )
}

export default Progress
