import React, { useState } from 'react'
import AuthContext from './authContext'

export default function AuthProvider(props) {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [loggedin, setLoggedin] = useState(false)
  const [alert, setAlert] = useState(null)

  const removeAlert = () => {
    setInterval(() => {
      setAlert(false)
    }, 5000)
  }
  const login_user = async () => {
    try {
      let url = `${process.env.REACT_APP_HOST}/api/auth/login`;

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
        localStorage.setItem(process.env.REACT_APP_TOKEN, jsonData.authToken)
        setLoggedin(true)
        setAlert({ type: "success", message: "Loggedin Successfully!" })
        removeAlert()
      } else {
        setAlert({ type: "danger", message: "Loggedin Unsuccessfull!" })
        removeAlert()
      }
    } catch (err) {
      setAlert({ type: "danger", message: "Internal server error!" })
      removeAlert()
    }
  }
  return (
    <AuthContext.Provider value={{ credentials, setCredentials, login_user, loggedin, setLoggedin, alert, removeAlert, setAlert }}>
      {props.children}
    </AuthContext.Provider>
  )
}
