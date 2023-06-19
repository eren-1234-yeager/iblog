import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import blogContext from '../context/blogContext'

export default function Blogcard() {
    const { blogs,genre } = useContext(blogContext)
    document.title=genre
    return (
        <>
            <div className="my-2 row">
                {blogs && blogs.map((blog) => {
                    return <div className="card mx-1 my-2" key={blog._id} style={{ width: "18rem" }}>
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text">{blog.description}</p>
                            <Link to={`/blogs/${blog.slug}`} className="btn btn-success">Read More...</Link>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}
