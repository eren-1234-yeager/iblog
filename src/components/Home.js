import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogContext from '../context/blogContext'
import AuthContext from '../context/authContext'
import Blogcard from './Blogcard'
import Alert from './Alert' 

export default function Home(props) {
  const navigate = useNavigate()
  const { setGenre } = useContext(BlogContext)
  const { alert, check_User } = useContext(AuthContext)

  useEffect(() => {
    setGenre(props.category)
    check_User()
    // eslint-disable-next-line
  }, [])
  document.onkeydown = (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === "a" || e.key === "A")) {
      navigate('/anime')
    } else if (e.ctrlKey && e.shiftKey && (e.key === "g" || e.key === "G")) {
      navigate('/general')
    } else if (e.ctrlKey && e.shiftKey && (e.key === "p" || e.key === "P")) {
      navigate('/programming')
    }
  }

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
