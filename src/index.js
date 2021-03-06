import React from 'react'

// Components Import
import FormComponent from './components/LoginForm'
import ContactFormComponent from './components/ContactForm'
import InputFieldComponent from './components/InputField'
import SelectComponent from './components/Select'
import RatingComponent from './components/Rating'
import SliderComponent from './components/Slider'
import AlertComponent from './components/Alert'
import DrawerComponent from './components/Drawer'
import ProgressComponent from './components/Progress'
import ImageDropzoneComponent from './components/ImageDropzone'
import ExpandableAreaComponent from './components/ExpandableArea'
import SwitchComponent from './components/Switch'

// Hooks Import
import useLoggerHook from './hooks/useLogger'
import useCPFCheckerHook from './hooks/useCPFChecker'
import useLocalStorageHook from './hooks/useLocalStorage'

// Components Export
export const LoginForm = (props) => <FormComponent {...props} />
export const ContactForm = (props) => <ContactFormComponent {...props} />
export const InputField = (props) => <InputFieldComponent {...props} />
export const Select = (props) => <SelectComponent {...props} />
export const Rating = (props) => <RatingComponent {...props} />
export const Slider = (props) => <SliderComponent {...props} />
export const Alert = (props) => <AlertComponent {...props} />
export const Drawer = (props) => <DrawerComponent {...props} />
export const Progress = (props) => <ProgressComponent {...props} />
export const ImageDropzone = (props) => <ImageDropzoneComponent {...props} />
export const ExpandableArea = (props) => <ExpandableAreaComponent {...props} />
export const Switch = (props) => <SwitchComponent {...props} />

// Hooks Export
export const useLogger = (variable) => useLoggerHook(variable)
export const useCPFChecker = (cpf) => useCPFCheckerHook(cpf)
export const useLocalStorage = (key, initialValue) =>
  useLocalStorageHook(key, initialValue)
