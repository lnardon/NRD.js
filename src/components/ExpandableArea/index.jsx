import React, { useRef, useState } from 'react'

import styles from './styles.css'

function ExpandableArea({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const areaRef = useRef()
  const toggleArea = () => {
    if (!isOpen) {
      areaRef.current.classList.add(`${styles.open}`)
      areaRef.current.classList.remove(`${styles.closed}`)
      console.log(areaRef.current.classList)
    } else {
      areaRef.current.classList.add(`${styles.closed}`)
      areaRef.current.classList.remove(`${styles.open}`)
      console.log(areaRef.current.classList)
    }
    setIsOpen(!isOpen)
  }
  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={toggleArea}>
        {title}
      </div>
      <div className={styles.content} ref={areaRef}>
        {content}
      </div>
    </div>
  )
}

export default ExpandableArea
