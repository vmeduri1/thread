import React from 'react'
import './SplashPage.css';
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm';

function SplashPage() {
    return (
        <>
            <div className='bg'>
                <div className="header">
                    <h1 className="header-name">Welcome to thread!</h1>
                    <h2 className="header-saying">The dating app for friends of friends</h2>
                </div>
            </div>
            <div>
                <LoginForm />
                <SignUpForm />
            </div>
        </>
    )
}

export default SplashPage
