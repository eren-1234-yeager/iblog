import React,{useContext} from 'react'
import BlogContext from '../context/blogContext'
import Blogcard from './Blogcard'
import Login from './Login'

export default function Home(props) {
const {setGenre}=useContext(BlogContext)
setGenre(props.category)
  return (
    <>
      <div className="container">
          <Login />
        <Blogcard />
      </div>
    </>
  )
}
