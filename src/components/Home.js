import React from 'react'

import Blogcard from './Blogcard'
import Login from './Login'

export default function Home() {

  return (
    <>
      <div className="container">
          <Login />
        <Blogcard />
      </div>
    </>
  )
}
