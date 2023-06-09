import React, { useContext } from 'react'
import AuthContext from '../context/authContext'

export default function Navbar(props) {
    const { loggedin, setLoggedin } = useContext(AuthContext)
    const logOut = () => {
        setLoggedin(false)
        localStorage.removeItem('iblog_authToken')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">General</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Programming</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Anime</a>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
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
