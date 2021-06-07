import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneUserById, updateUser } from '../store/users';
import LogOutButton from '../components/auth/LogoutButton';
import './Profile.css';

const Profile = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    // const oneUser = useSelector((state) => Object.values(state.user))
    // console.log(oneUser);

    const [firstName, setF_name] = useState(sessionUser ? sessionUser.f_name : '')
    const [userName, setUsername] = useState(sessionUser ? sessionUser.username : '')
    const [lastName, setL_name] = useState(sessionUser ? sessionUser.l_name : '')
    const [emailInput, setEmail] = useState(sessionUser ? sessionUser.email : '')
    const [profilePic, setProfilePic] = useState(sessionUser ? sessionUser.profile_pic : '')
    const [phoneNumber, setPhoneNumber] = useState(sessionUser ? sessionUser.phone_number : '')

    useEffect(() => {
        if (sessionUser) {
            dispatch(getOneUserById(sessionUser.id))
        }
    }, [dispatch, sessionUser])

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = sessionUser.id
        const f_name = firstName
        const username = userName
        const l_name = lastName
        const email = emailInput
        const profile_pic = profilePic
        const phone_number = phoneNumber
        dispatch(updateUser({ id, f_name, username, l_name, email, profile_pic, phone_number }))
    }

    return (
        <div className="profile-container">
            <h1>My Profile</h1>
            {sessionUser ?
            <>
                <div>First name: {sessionUser.f_name}</div>
                <div>Username: {sessionUser.username}</div>
                <div>Last name: {sessionUser.l_name}</div>
                <div>Email: {sessionUser.email} </div>
                <div>Profile Pic: {sessionUser.profile_pic}</div>
                <div>Phone Number: {sessionUser.phone_number}</div>
            </>
            :   <div></div> }
            <form>
                <div className="edit-form">
                    <input
                        placeholder='First Name'
                        value={firstName}
                        onChange={e => setF_name(e.target.value)}
                    ></input>
                    <input
                        placeholder='Username'
                        value={userName}
                        onChange={e => setUsername(e.target.value)}
                    ></input>
                    <input
                        placeholder='Last Name'
                        value={lastName}
                        onChange={e => setL_name(e.target.value)}
                    ></input>
                    <input
                        placeholder='Email'
                        value={emailInput}
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                    <input
                        placeholder='Profile Pic'
                        value={profilePic}
                        onChange={e => setProfilePic(e.target.value)}
                    ></input>
                    <input
                        placeholder='Phone Number'
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    ></input>
                </div>
                <div>
                    <button className="edit-button" type="submit" onClick={handleSubmit}>Edit Profile</button>
                </div>
            </form>

            <LogOutButton />
        </div>

    )
}

export default Profile
