import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Search() {
    const { query } = useParams()//getting query froom params
    const [blogs, setBlogs] = useState(null)
    const fetch_search = async () => {
        let url = `${process.env.REACT_APP_HOST}/api/blog/search/${query}`
        let response = await fetch(url)//fetching
        let jsonData = await response.json()
        setBlogs(jsonData.blogs)//setting blogs
    }
    useEffect(() => {
        fetch_search()//Searching
        // eslint-disable-next-line
    }, [blogs])

    return (
        <>
            <div className="container my-4">
                <div className="row">
                    
                    {blogs &&//if blogs is not null or false. 
                     blogs.length>0 ? blogs.map((blog) => {
                        return (
                            <div key={blog._id} className="card mx-2 my-2" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">{blog.description}</p>
                                    <a href="/" className="btn btn-primary">Read More...</a>
                                </div>
                            </div>
                        )
                    }):<h1 className="text-center">No Blogs Found...</h1>
                    }
                </div>
            </div>

        </>
    )
}

export default Search