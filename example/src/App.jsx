import React from 'react'

import { Select } from 'nrd.js'
import 'nrd.js/dist/index.css'

const App = () => {
  return (
    <Select
      getvalueCallback={(val) => console.log(val)}
      options={[
        { label: 'First', value: 1 },
        { label: 'Second', value: 2 },
        { label: 'Third', value: 3 }
      ]}
    />
  )
}

export default App
