# NRD.js

A React Components/Hooks Library with all the most used components for Front-End Development created by lnardon

[![NPM](https://img.shields.io/npm/v/nrd.js.svg)](https://www.npmjs.com/package/nrd.js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

You can use this React Library to optimize your front-end development or even give it a more complete feel to your functional mockups.

For now all the components have a minimalistic black/white style but in the future new designs will be created

## Available Components:

- [Alert](#Alert)
- [ContactForm](#ContactForm)
- [ExpandableArea](#ExpandableArea)
- [InputField](#InputField)
- [LoginForm](#LoginForm)
- [Progress](#Progress)
- [Rating](#Rating)
- [Select](#Select)
- [Slider](#Slider)
- [Switch](#Switch)

## Available Hooks:

- [useCPFChecker](#useCPFChecker)
- [useLocalStorage](#useLocalStorage)
- [useLogger](#useLogger)

## Install

```bash
npm install nrd.js
```

## Usage

```jsx
import React from 'react'

import { LoginForm } from 'nrd.js'

const App = () => {
  return <Alert message='This is an alert message' />
}
```

## License

Any Contribution is Welcome !!!
MIT © [lnardon](https://github.com/lnardon)

## DOCUMENTATION

</br>

## Components

### Alert

| Prop    | Description     | value/format |
| :------ | :-------------- | :----------- |
| message | Alert's Message | string       |

</br>

### ContactForm

| Prop  | Description                                                               | value/format |
| :---- | :------------------------------------------------------------------------ | :----------- |
| url   | URL of the server to make the POST request with the username and password | string       |
| title | Title to be displayed above the form                                      | string       |

</br>

### ExpandableArea

| Prop      | Description                                 | value/format |
| :-------- | :------------------------------------------ | :----------- |
| title     | Title of the expandalble area               | string       |
| content   | Content hidden by the expandalble area      | string       |
| getStatus | Callback to get the status expandalble area | function     |

</br>

### InputField

| Prop             | Description                                                       | value/format |
| :--------------- | :---------------------------------------------------------------- | :----------- |
| type             | Type of the input field (e.g: string, number, email, password)    | string       |
| getvalueCallback | Callback that returns the value from the input field as parameter | function     |

</br>

### LoginForm

| Prop       | Description                                                               | value/format |
| :--------- | :------------------------------------------------------------------------ | :----------- |
| LoginImage | URL of the image displayed above the form                                 | string       |
| url        | URL of the server to make the POST request with the username and password | string       |

</br>

### Progress

| Prop          | Description                             | value/format |
| :------------ | :-------------------------------------- | :----------- |
| maxValue      | Maximun value of the progress indicator | number       |
| progressValue | Initial value of the progress indicator | number       |

</br>

### Rating

| Prop             | Description                                                            | value/format |
| :--------------- | :--------------------------------------------------------------------- | :----------- |
| getvalueCallback | Callback that returns the value from the Rating Component as parameter | function     |

</br>

### Select

| Prop             | Description                                                                                           | value/format  |
| :--------------- | :---------------------------------------------------------------------------------------------------- | :------------ |
| options          | Array with the options available for the user to select(e.g: {label: OptionTitle, value: InputValue}) | array of JSON |
| getvalueCallback | Callback that returns the selected value from the select as a parameter                               | function      |

</br>

### Slider

| Prop             | Description                                                            | value/format |
| :--------------- | :--------------------------------------------------------------------- | :----------- |
| min              | Minimal value of the slider                                            | number       |
| max              | Maximal value of the slider                                            | number       |
| getvalueCallback | Callback that returns the value from the Select Component as parameter | function     |

</br>

### Switch

| Prop     | Description                                   | value/format |
| :------- | :-------------------------------------------- | :----------- |
| getState | Callback that returns the state of the switch | function     |

</br>
</br>
</br>

## Hooks

### useCPFChecker

Function to check if the CPF Number (Brazilian Social Security) is valid.

</br>

### useLocalStorage

Function to facilitate saving/retrieving local storage values.

</br>

### useLogger

Function to log a given variable every time it changes value.
