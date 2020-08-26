import React from 'react'

import FormComponent from './components/LoginForm'
import ContactFormComponent from './components/ContactForm'
import InputFieldComponent from './components/InputField'

export const LoginForm = (props) => <FormComponent {...props} />
export const ContactForm = (props) => <ContactFormComponent {...props} />
export const InputField = (props) => <InputFieldComponent {...props} />
