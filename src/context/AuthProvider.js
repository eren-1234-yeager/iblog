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
  /*
    login_user() function is used to login a user.
    If response is 200 then loggedin to true.
  */
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

      let response = await fetch(url, options)//Fetching url with options
      let jsonData = await response.json()
      if (response.status === 200) {
        localStorage.setItem(process.env.REACT_APP_TOKEN, jsonData.authToken)//Setting AuthToken to localStorage
        setLoggedin(true)
        setAlert({ type: "success", message: "Loggedin Successfully!" })//Alerting the user 
        removeAlert()
      } else {
        setAlert({ type: "danger", message: "Loggedin Unsuccessfull!" })//Alerting the user 
        removeAlert()
      }
    } catch (err) {
      setAlert({ type: "danger", message: "Internal server error!" })//Alerting the user 
      removeAlert()
    }
  }
  const check_User = async () => {
    let url = `${process.env.REACT_APP_HOST}/api/blog/check/user`
    let options={
      method:"GET",
      headers:{
        "authToken":localStorage.getItem(process.env.REACT_APP_TOKEN)
      }
    }
    let response = await fetch(url,options)//Fetching url with options
    if(response.status===200){
      setLoggedin(true)//Setting loggedin
    }
  }
  return (
    <AuthContext.Provider value={{ credentials, setCredentials, login_user, loggedin, setLoggedin, alert, removeAlert, setAlert,check_User }}>
      {props.children}
    </AuthContext.Provider>
  )
}
