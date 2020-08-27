import React, { useState } from 'react'

import styles from './styles.css'

function ImageDropzone({ url }) {
  const [images, setImages] = useState([])

  const sendPictures = async () => {
    fetch(url, {
      method: 'POST',
      headers: { contentType: 'application/json' },
      body: JSON.stringify(images)
    })
  }

  const getImages = (imgs) => {
    const convertedImages = []
    console.log(imgs)
    // imgs.forEach((img) => {
    //   convertedImages.push({ img })
    //   console.log(img)
    // })
    setImages(convertedImages)
  }

  return (
    <div className={styles.dropzoneContainer}>
      <input
        type='file'
        name='imageDropzone'
        onChange={(imgs) => getImages(imgs.target.files)}
      />
      {images.forEach((image) => {
        return <img src={image.base64} alt='Preview' />
      })}
      <button onClick={sendPictures}>Send</button>
    </div>
  )
}

export default ImageDropzone
