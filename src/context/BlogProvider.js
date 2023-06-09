import React, { useState, useEffect } from 'react'
import BlogContext from './blogContext'

export default function BlogProvider(props) {
  const host = 'http://localhost:5000';
  const [genre, setGenre] = useState("general")
  const [blogs,setBlogs] =useState(null)

  useEffect(() => {
    const fetch_by_genre = async () => {
      let url = `${host}/api/blog/find/${genre}`
      let response = await fetch(url)
      let jsonData = await response.json()
      setBlogs(jsonData.blogs)
    }
    fetch_by_genre()
  }, [genre])

  return (
    <BlogContext.Provider value={{ genre,blogs,setGenre }}>
      {props.children}
    </BlogContext.Provider>
  )
}
