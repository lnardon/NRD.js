import React from 'react'

import FormComponent from './components/LoginForm'
import ContactFormComponent from './components/ContactForm'
import InputFieldComponent from './components/InputField'
import SelectComponent from './components/Select'
import RatingComponent from './components/Rating'
import SliderComponent from './components/Slider'

export const LoginForm = (props) => <FormComponent {...props} />
export const ContactForm = (props) => <ContactFormComponent {...props} />
export const InputField = (props) => <InputFieldComponent {...props} />
export const Select = (props) => <SelectComponent {...props} />
export const Rating = (props) => <RatingComponent {...props} />
export const Slider = (props) => <SliderComponent {...props} />
