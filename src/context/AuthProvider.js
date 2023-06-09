import React, { useState } from 'react'
import AuthContext from './authContext'

export default function AuthProvider(props) {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [loggedin, setLoggedin] = useState(false)

  const login_user = async () => {
    try {
      let url = 'http://localhost:5000/api/auth/login'

      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      }

      let response = await fetch(url, options)
      let jsonData = await response.json()
      if (response.status === 200) {
        localStorage.setItem('iblog_authToken', jsonData.authToken)
        setLoggedin(true)
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <AuthContext.Provider value={{ credentials, setCredentials, login_user, loggedin, setLoggedin }}>
      {props.children}
    </AuthContext.Provider>
  )
}
