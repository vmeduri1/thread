import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMatches } from '../store/matches';
import { getAllUsers } from '../store/users';
import './Matches.css';
import Avatar from "@material-ui/core/Avatar";

function Matches() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const allMatches = useSelector((state) => Object.values(state.matches))
    const allUsers = useSelector((state) => Object.values(state.users))
    console.log(allUsers);
    console.log(allMatches);

    useEffect(() => {
        if (sessionUser) {
            dispatch(getAllMatches());
            dispatch(getAllUsers())
        }
    }, [dispatch, sessionUser])

    return (
        <div className="matches">
            {allMatches[0]?.map((match, idx) => (
                <>
                    {/* <div>{match.user_a.profile_pic}</div> */}
                    <div key={idx}>
                        {allUsers[0]?.users?.map((user, idx) => (
                            <div className="matches" key={idx}>
                                {(match.users_b === user.id) ? <div>
                                    <img className="img-profile-pic" src={user.profile_pic} />
                                    <div className="user-details">
                                        <h2>{user.phone_number}</h2>
                                        <h2>{user.f_name}</h2>
                                        <p>{user.username}</p>
                                    </div>
                                </div>
                                 : <div></div>}
                            </div>
                        ))}
                    </div>
                </>
            ))}
        </div>
    )
}

export default Matches
