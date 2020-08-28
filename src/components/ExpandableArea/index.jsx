import React, { useRef, useState } from 'react'

import styles from './styles.css'

function ExpandableArea({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const areaRef = useRef()
  const arrowRef = useRef()
  const toggleArea = () => {
    if (!isOpen) {
      areaRef.current.classList.add(`${styles.open}`)
      areaRef.current.classList.remove(`${styles.closed}`)
      arrowRef.current.classList.add(`${styles.downArrow}`)
      arrowRef.current.classList.remove(`${styles.rightArrow}`)
      console.log(areaRef.current.classList)
    } else {
      areaRef.current.classList.add(`${styles.closed}`)
      areaRef.current.classList.remove(`${styles.open}`)
      arrowRef.current.classList.add(`${styles.rightArrow}`)
      arrowRef.current.classList.remove(`${styles.downArrow}`)
      console.log(areaRef.current.classList)
    }
    setIsOpen(!isOpen)
  }
  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={toggleArea}>
        {title}
        <img
          src='https://image.flaticon.com/icons/svg/60/60758.svg'
          alt='Arrow'
          className={styles.arrow}
          ref={arrowRef}
        />
      </div>
      <div className={styles.content} ref={areaRef}>
        {content}
      </div>
    </div>
  )
}

export default ExpandableArea
