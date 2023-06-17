import React, { useState, useEffect, useContext } from 'react'
import BlogContext from './blogContext'
import AuthContext from './authContext'

export default function BlogProvider(props) {
  const { setLoggedin } = useContext(AuthContext)
  const [genre, setGenre] = useState("general")
  const [blogs, setBlogs] = useState(null)
  const [search, setSearch] = useState('')
  useEffect(() => {
    const fetch_by_genre = async () => {
      let options = {
        method: 'GET',
        headers: {
          'authToken': localStorage.getItem(process.env.REACT_APP_TOKEN)
        }
      }
      let url = `${process.env.REACT_APP_HOST}/api/blog/find/${genre}`
      let response = await fetch(url, options)
      let jsonData = await response.json()
      if (jsonData.loggedin) {
        setLoggedin(true)
      }
      setBlogs(jsonData.blogs)
    }

    fetch_by_genre()
    // eslint-disable-next-line
  }, [genre])

  return (
    <BlogContext.Provider value={{ genre, blogs, setGenre ,setSearch,search}}>
      {props.children}
    </BlogContext.Provider>
  )
}
