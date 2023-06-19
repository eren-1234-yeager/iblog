import React, { useState, useContext } from 'react'
import AuthContext from '../context/authContext'
import Alert from './Alert'

export default function Admin() {
    const [content, setContent] = useState({ title: "", description: "", slug: "", genre: "" })

    const { alert, setAlert, removeAlert } = useContext(AuthContext)

    const onChange = (e) => {
        setContent({ ...content, [e.target.name]: e.target.value })
    }

    const upload_blog = async () => {

        let url = `${process.env.REACT_APP_HOST}/api/blog/post`
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authToken": localStorage.getItem(process.env.REACT_APP_TOKEN)
            },
            body: JSON.stringify(content)
        }
        let response = await fetch(url, options)
        let jsonData = await response.json()
        console.log(jsonData)
        if (response.status !== 200) {
            setAlert({ type: "danger", message: "There was an error in posting blog!" })
            removeAlert()
        } else {
            setAlert({ type: "danger", message: "There was an error in posting blog!" })
            removeAlert()
        }

    }

    const onSubmit = (e) => {
        e.preventDefault()
        upload_blog()
    }
    return (
        <>
            {alert &&
                <Alert type={alert.type} message={alert.message} />
            }
            <h1 className="text-center">Admin Page...</h1>
            <div className="container main">
                <form onSubmit={onSubmit}>
                    <div className="title my-2">
                        <label htmlFor="title" className='form-label'>Title:</label>
                        <input type="text" onChange={onChange} id="title" name='title' className='form-control' />
                    </div>
                    <div className="description my-2">
                        <label htmlFor="description" className='form-label'>Description:</label>
                        <textarea className="form-control" name="description" id="description" onChange={onChange} cols="30" rows="10"></textarea>
                    </div>
                    <div className="slug my-2">
                        <label htmlFor="slug" className='form-label'>Slug:</label>
                        <input type="text" onChange={onChange} id="slug" name='slug' className='form-control' />
                    </div>
                    <div className="genre my-2">
                        <label htmlFor="genre" className='form-label'>Genre:</label>
                        <select name="genre" onChange={onChange} className='form-control' id="genre">
                            <option name="genre" value="general">general</option>
                            <option name="genre" value="science">science</option>
                            <option name="genre" value="programming">programming</option>
                            <option name="genre" value="anime">anime</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" className='btn btn-success'>Add Blog</button>
                    </div>
                </form>
            </div>
        </>
    )
}
