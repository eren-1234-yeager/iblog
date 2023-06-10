import React, { useContext,useEffect } from 'react'
import BlogContext from '../context/blogContext'
import Blogcard from './Blogcard'
import Login from './Login'
import AuthContext from '../context/authContext'

export default function Home(props) {
  const { setGenre } = useContext(BlogContext)
  useEffect(() => {
    setGenre(props.category)
    // eslint-disable-next-line
  }, [])
  
  const { credentials, setCredentials, login_user } = useContext(AuthContext)
  return (
    <>
      <div className="container">
        <Login credentials={credentials} setCredentials={setCredentials} login_user={login_user}/>
        <Blogcard />
      </div>
    </>
  )
}
