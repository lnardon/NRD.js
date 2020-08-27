import React, { useState } from 'react'

import styles from './styles.css'

function ImageDropzone({ url, getImagesCallback }) {
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
    Array.from(imgs).forEach((img) => {
      const reader = new FileReader()
      reader.readAsDataURL(img)
      reader.onload = () => {
        convertedImages.push({
          base64: reader.result,
          type: img.type,
          name: img.name
        })
      }
    })
    setImages(convertedImages)
    if (getImagesCallback) {
      getImagesCallback(convertedImages)
    }
  }

  return (
    <div className={styles.dropzoneContainer}>
      <input
        type='file'
        name='imageDropzone'
        multiple
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
