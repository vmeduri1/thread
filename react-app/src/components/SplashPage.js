import React from 'react'
import { Link } from 'react-router-dom';
import './SplashPage.css'

const SplashPage = () => {
    return (
        <>
            <div className="thread-container">
                <div className="thread-logo-div">
                    <h1 className="thread-logo">Thread</h1>
                    <div className="login">
                        <a className="login-btn-splash-page" href="/login">Login/Sign up</a>
                    </div>
                    <div className="description">
                        Thread is an app designed around the fact that friends meet friends through friends, so Thread!
                        Welcome to, Thread!
                    </div>
                </div>
            </div>
            <div className="gif-div">
                <img className="gif-img" src='https://media.giphy.com/media/QHsJPP7J09KOBaedPX/giphy.gif'></img>
            </div>
            <div className="tagline">
                Swipe Away
            </div>
        </>
    )
}

export default SplashPage
