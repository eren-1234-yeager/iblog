import React, { useContext, useEffect } from 'react'
import BlogContext from '../context/blogContext'
import AuthContext from '../context/authContext'
import Blogcard from './Blogcard'
import Alert from './Alert'

export default function Home(props) {
  const { setGenre } = useContext(BlogContext)
  const { alert } = useContext(AuthContext)
  useEffect(() => {
    setGenre(props.category)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="container">
        {alert &&
          <Alert type={alert.type} message={alert.message} />
        }
        <Blogcard />
      </div>
    </>
  )
}
