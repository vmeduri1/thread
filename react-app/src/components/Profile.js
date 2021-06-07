import React from 'react'
import './Profile.css';
import LogOutButton from '../components/auth/LogoutButton';

const Profile = () => {
    return (
        <div className="profile-container">
            <h1>My Profile</h1>
            <LogOutButton />
        </div>

    )
}

export default Profile
