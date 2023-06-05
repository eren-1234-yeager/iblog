import React from 'react'
import AuthContext from './authContext'

export default function AuthProvider(props) {
  return (
    <AuthContext.Provider value={{}}>
        {props.children}
    </AuthContext.Provider>    
  )
}
