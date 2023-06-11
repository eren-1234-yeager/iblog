import React, { useContext,useEffect } from 'react'
import BlogContext from '../context/blogContext'
import Blogcard from './Blogcard'

export default function Home(props) {
  const { setGenre } = useContext(BlogContext)
  useEffect(() => {
    setGenre(props.category)
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <div className="container">
        <Blogcard />
      </div>
    </>
  )
}
