import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Profile.css';
import LogOutButton from '../components/auth/LogoutButton';

const Profile = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const oneUser = useSelector((state) => Object.values(state.user))

    return (
        <div className="profile-container">
            <h1>My Profile</h1>

            <LogOutButton />
        </div>

    )
}

export default Profile
