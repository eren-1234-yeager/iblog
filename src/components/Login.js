import React, { useContext } from 'react'
import AuthContext from '../context/authContext'

export default function Login() {
    const { credentials, setCredentials,login_user } = useContext(AuthContext)

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]:e.target.value })
    }
    

    const onSubmit=(e)=>{
        e.preventDefault()
        login_user()
    }
    
    return (
        <>
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-center" id="heading">Login to iBlog</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username: </label>
                                    <input type="text" className="form-control" id="username" name="username" aria-describedby="emailHelp" onChange={onChange} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password: </label>
                                    <input type="password" name="password" className="form-control" onChange={onChange} id="password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
