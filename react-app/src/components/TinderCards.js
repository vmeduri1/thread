import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TinderCard from 'react-tinder-card';
import SwipeButtons from '../components/SwipeButtons'
import './TinderCards.css';
import { getAllUsers } from '../store/users';
import { addingSwipe } from '../store/matches';



function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: 'https://battleinvestmentgroup.com/wp-content/uploads/2020/10/Steve_Jobs.jpg'
        },
        {
            name: 'mark zuckerberg',
            url: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401'
        }
    ]);

    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const allUsers = useSelector((state) => Object.values(state.users));
    console.log(allUsers);
    // const allUsersKeyed = Object.values(allUsers[0])
    const onSwipe = (direction, id) => {
        console.log(`Swiped ${direction} for ${id}`);
        if (direction === 'right') {
            dispatch(addingSwipe(id))
        }
    }


    // Piece of codde which runs based on a condition
    useEffect(() => {
        // this is where the code runs..

        // this will run ONCE when the compoonent loads, and never again
    }, [])

    useEffect(() => {
        if (sessionUser) {
            dispatch(getAllUsers());
        }
    }, [dispatch, sessionUser])

    return (
        <div>

            <div className='tinderCards__cardContainer'>
                {allUsers[0]?.users?.map((person, idx) => (
                    <TinderCard
                        className='swipe'
                        key={idx}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => onSwipe(dir, person.id)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.profile_pic})`}}
                            className='card'
                        >
                            <h3>{person.username}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards
