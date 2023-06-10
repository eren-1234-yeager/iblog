import React, { useContext } from 'react'
import blogContext from '../context/blogContext'

export default function Blogcard() {
    const { blogs } = useContext(blogContext)
    return (
        <>
            <div className="my-3 row">
                {blogs && blogs.map((blog) => {
                    return <div className="card mx-1 my-2" key={blog._id} style={{ width: "18rem" }}>
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text">{blog.description}</p>
                            <a href="/" className="btn btn-primary">Read More...</a>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}
