import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMatches } from '../store/matches';
import { getAllUsers } from '../store/users';
import './Matches.css';
import Avatar from "@material-ui/core/Avatar";
import { ContactSupportOutlined } from '@material-ui/icons';

function Matches() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const allMatches = useSelector((state) => Object.values(state.matches))
    const allUsers = useSelector((state) => Object.values(state.users))
    // console.log(allUsers);
    // console.log(allMatches);

    // const [matches, setMatches] = useState([])

    useEffect(() => {
        if (sessionUser) {
            dispatch(getAllMatches());
            dispatch(getAllUsers())
        }
    }, [dispatch, sessionUser])


    // useEffect(() => {
    //     function findAllMatches (allMatches) {
    //         const tempMatches = allMatches[0].map((match) => {
    //             return [match.users_a, match.users_b]
    //         });
    //         // allMatches[0].forEach((match) => {
    //         //         allMatches[0].forEach((match1) => {
    //         //             if (match1.user_a === match.user_b && match1.user_b === match.user_a) tempMatches.push(match)
    //         //         })
    //         //     })
    //         console.log(tempMatches)
    //         const result = tempMatches.filter((match) => {
    //             console.log(tempMatches, "tempMatches")
    //             mirror = [match[1], match[0]]
    //             return tempMatches.includes([match[1], match[0]])
    //         })
    //         console.log(result, "result")
    //     }
    //     if (allMatches[0]) findAllMatches(allMatches)
    // }, [allMatches[0]])

    console.log(sessionUser, "session user")

    function displayMatches(sessionUser) {
        return sessionUser.usersSwipedOn.filter((match) => {
            return sessionUser.swipedOnCurrentUser.includes(match)
        })
    }

    const matches = displayMatches(sessionUser);


    return (
        // <div className="matches">
        //     {allMatches[0]?.map((match, idx) => (
        //         <>
        //             {console.log(match)}
        //             {/* <div>{match.user_a.profile_pic}</div> */}
        //             <div className="matches-div"key={idx}>
        //                 {allUsers[0]?.users?.map((user, idx) => (
        //                     <>
        //                     {console.log(user)}
        //                     <div className="user-matches-div" key={idx}>
        //                         {(sessionUser.id === match.user_b && match.users_b === user.id && !matches.includes(user.id) && match.id !== user.id) ? <div>
        //                             {matches.push(user.id)}
        //                             <img className="img-profile-pic" src={user.profile_pic} />
        //                             <div className="user-details">
        //                                 <h2>{user.phone_number}</h2>
        //                                 <h2>{user.f_name}</h2>
        //                                 <p>{user.username}</p>
        //                             </div>
        //                         </div>
        //                          : null }
        //                     </div>
        //                     </>
        //                 ))}
        //             </div>
        //         </>
        //     ))}
        // </div>
        <>
            <div className="container">

            </div>


            <div className="matches-container">
                {matches?.map((match, idx1) => (
                    <>
                        <div className="user-details" key={idx1}>
                            {allUsers[0]?.users?.map((user, idx2) => (
                                <div className="user-matches-div  " key={idx2}>
                                    {user.id === match && match !== sessionUser.id ? <div>
                                        <>
                                            <img key={user.id} className="img-profile-pic" src={user.profile_pic} />
                                            <p key={user.username}>{user.username}</p>
                                            <h2 key={user.f_name}>{user.f_name}</h2>
                                            <h2 key={user.phone_number}>{user.phone_number}</h2>
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
