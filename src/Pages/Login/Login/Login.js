import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, registration, emailChange, passwordChange, error, toggoleLogin, isLogin, createNewUser, signInUsingGithub } = useAuth()

    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    const handleGithubLogin = () => {
        signInUsingGithub()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    const handleEmilLogin = () => {
        createNewUser()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div>
            <div className="container mt-4">
                <h2 className="text-center">Please {isLogin ? 'Login' : 'Register'}</h2>
                <div className="justify-content-center row">
                    <form onSubmit={registration} className="col-lg-5">
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={emailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={passwordChange} type="password" className="form-control" id="inputPassword3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input onChange={toggoleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Already Registered?
                                    </label>
                                </div>

                                <div className="mt-3">
                                    <div className="text-danger">{error}</div>
                                    <button onClick={handleEmilLogin} type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
                <div className="text-center mb-4">
                    <button onClick={handleGoogleLogin} className="btn btn-info">Google Sign In</button>
                </div>
                <div className="text-center">
                    <button onClick={handleGithubLogin} className="btn btn-info">Github Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;