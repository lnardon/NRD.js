import React, { useState } from 'react'

import styles from './styles.css'

function ContactForm({ url }) {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const submitHandler = async () => {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    })
    alert(response)
  }

  return (
    <div className={styles.mainContactForm}>
      <div className={styles.inputFieldDiv}>
        <label htmlFor='Name'>Name:</label>
        <input
          type='text'
          name='userNamename'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.inputFieldDiv}>
        <label htmlFor='Email'>Email:</label>
        <input
          type='email'
          name='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.inputFieldDiv}>
        <label htmlFor='Email'>Message:</label>
        <textarea
          type='email'
          name='Email'
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className={styles.loginBtn} onClick={() => submitHandler()}>
        Send Message
      </button>
    </div>
  )
}

export default ContactForm
