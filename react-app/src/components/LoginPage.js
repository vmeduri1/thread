import React, { useState } from 'react'
import './LoginPage.css';
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm';

function LoginPage() {
    const [activeView, setActiveView] = useState('sign-in')

    return (
        <>
                <div className='bg'>
                    <div className='logo'>
                        Thread
                    </div>
                    <div className="login-page-body">
                        <div className="auth-view-switcher">
                            <div className={"auth-view-link " + (activeView === 'sign-in' ? 'active' : '')} onClick={(e) => setActiveView('sign-in')}>Sign In</div>
                            <div className={"auth-view-link " + (activeView === 'sign-up' ? 'active' : '')} onClick={(e) => setActiveView('sign-up')}>Sign Up</div>
                        </div>
                        {activeView === 'sign-in' ? <LoginForm /> : <SignUpForm />}
                    </div>

                </div>




        </>
    )
}

export default LoginPage
