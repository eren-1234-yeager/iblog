import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
function Blogs() {
    const { slug } = useParams()
    const [blog, setBlog] = useState({})
    useEffect(() => {
        const find_by_slug = async () => {
            let url=`${process.env.REACT_APP_HOST}/api/blog/${slug}`
            let response=await fetch(url)
            let jsonData=await response.json()
            setBlog(jsonData.blog)
        }
        find_by_slug()
    }, [])

    return (
        <>
        <div className="container">
            <h1 className='text-center'>{blog.title}</h1>
            <p>{blog.description}</p>
        </div>
        </>
    )
}

export default Blogs