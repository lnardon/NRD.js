import React from 'react'

import { InputField } from 'nrd.js'
import 'nrd.js/dist/index.css'

const App = () => {
  return (
    <InputField
      type='number'
      title='CONTACT ME HERE!'
      getvalueCallback={(val) => console.log(val)}
    />
  )
}

export default App
