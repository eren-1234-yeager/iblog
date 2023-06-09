import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/authContext'
import BlogContext from '../context/blogContext'

export default function Navbar(props) {
    const navigate = useNavigate()
    const { loggedin, setLoggedin } = useContext(AuthContext)//Using Auth Context
    const { setSearch, search } = useContext(BlogContext)//Using Blog Context
    const logOut = () => {
        setLoggedin(false)
        localStorage.removeItem(process.env.REACT_APP_TOKEN)//Removing from localStorage
    }
    const searchChange = (e) => {
        setSearch(e.target.value)//Setting Search
    }
    const searchSubmit = (e) => {
        e.preventDefault()// To prevent reloading
        navigate(`/search/${search}`)//Navigating
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/programming">Programming</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/anime">Anime</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search" onSubmit={searchSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={searchChange} />
                            <button className="btn btn-danger" type="submit">Search</button>
                        </form>

                        {!loggedin &&
                            <div className="auth mx-1 my-1">
                                <button className="btn btn-danger mx-1" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                                <button className="btn btn-danger mx-1">Signup</button>
                            </div>
                        }

                        {loggedin &&
                            <div className="auth mx-1 my-1">
                                <button className="btn btn-danger mx-1" onClick={logOut}>Logout</button>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}
