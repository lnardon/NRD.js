import React, { useState } from 'react'

import styles from './styles.css'

function Rating({ getvalueCallback }) {
  const icones = [1, 2, 3, 4, 5]
  const [selected, setSelected] = useState(0)

  return (
    <div className={styles.ratingContainer}>
      {icones.map((icone, index) => {
        return (
          <div
            key={icone}
            className={selected > index ? styles.active : styles.disabled}
            onMouseOver={() => setSelected(index + 1)}
            onClick={() => getvalueCallback(index + 1)}
          />
        )
      })}
    </div>
  )
}

export default Rating
