import React, { useState, useEffect,useContext } from 'react'
import BlogContext from './blogContext'
import AuthContext from './authContext'

export default function BlogProvider(props) {
  const {setLoggedin}=useContext(AuthContext)
  const [genre, setGenre] = useState("general")
  const [blogs,setBlogs] =useState(null)

  useEffect(() => {
    const fetch_by_genre = async () => { 
      let options={
        method:'GET',
        headers:{
          'authToken':localStorage.getItem(process.env.REACT_APP_TOKEN)
        }
      }
      let url = `${process.env.REACT_APP_HOST}/api/blog/find/${genre}`
      let response = await fetch(url,options)
      let jsonData = await response.json()
      if(jsonData.loggedin){
        setLoggedin(true)
      }
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
