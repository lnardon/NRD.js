import React, { useState } from 'react'

import styles from './styles.css'

const LoginForm = ({ loginImage, url }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async () => {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    alert(response)
  }

  return (
    <div className={styles.form}>
      {loginImage ? (
        <img src={loginImage} alt='Logo' className={styles.loginLogo} />
      ) : null}
      <h1>LOGIN</h1>
      <div className={styles.inputFieldDiv}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.inputFieldDiv}>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={styles.loginBtn} onClick={() => submitHandler()}>
        Login
      </button>
    </div>
  )
}

export default LoginForm
