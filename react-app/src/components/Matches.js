import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMatches } from '../store/matches';
import { getAllUsers } from '../store/users';
import './Matches.css';
import Avatar from "@material-ui/core/Avatar";
import { ContactSupportOutlined } from '@material-ui/icons';
import Chat from './Chat';
import Channel from './Channel';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Matches() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const allMatches = useSelector((state) => Object.values(state.matches))
    const allUsers = useSelector((state) => Object.values(state.users))
    console.log(allMatches)

    useEffect(() => {
        if (sessionUser) {
            dispatch(getAllMatches());
            dispatch(getAllUsers())
        }
    }, [dispatch, sessionUser])

    function displayMatches(sessionUser) {
        return sessionUser.usersSwipedOn.filter((match) => {
            return sessionUser.swipedOnCurrentUser.includes(match)
        })
    }

    const matches = displayMatches(sessionUser);


    return (
        <>
            <div className="matches-container">
                {matches?.map((match, idx1) => (
                    <>
                        <div className="user-details" key={idx1}>
                            {allUsers[0]?.users?.map((user, idx2) => (
                                <div className="user-matches-div  " key={idx2}>
                                    {user.id === match && match !== sessionUser.id ? <div key={user.id}>
                                        <>
                                            <Link to={`/messages/${user.id}`}>
                                                <img key={user.id} className="img-profile-pic" src={user.profile_pic} />
                                                <p key={user.f_name}>{user.f_name}</p>
                                                <h2 key={user.username}>{user.username}</h2>
                                                <h2 key={user.phone_number}>{user.phone_number}</h2>
                                                <Chat/>
                                            </Link>
                                        </>
                                        </div>
                                    : null }
                                </div>
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default Matches
