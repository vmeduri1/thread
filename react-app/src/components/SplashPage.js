import React from 'react'
import { Link } from 'react-router-dom';
import './SplashPage.css'

const SplashPage = () => {
    return (
        <div className="thread-container">
            <div className="thread-logo-div">
                <h1 className="thread-logo">Thread</h1>
                <div className="login">
                    <a className="login-btn" href="/login">Login/Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default SplashPage
