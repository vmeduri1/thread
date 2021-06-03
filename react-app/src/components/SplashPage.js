import React from 'react'
import './SplashPage.css';
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm';

function SplashPage() {
    return (
        <div className='bg'>
            <div className="header">
                <h1>Welcome to second degree!</h1>
                <LoginForm />
                <SignUpForm />
            </div>
        </div>
    )
}

export default SplashPage
