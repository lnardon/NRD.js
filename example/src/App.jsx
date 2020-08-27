import React from 'react'

import { ImageDropzone } from 'nrd.js'
import 'nrd.js/dist/index.css'

const App = () => {
  return <ImageDropzone getImagesCallback={(e) => console.log(e)} />
}

export default App
