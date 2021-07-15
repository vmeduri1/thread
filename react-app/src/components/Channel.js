import React, { Component } from 'react'
import { getAllMessages } from '../store/messages';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Chat from './Chat';

const Channel = function () {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const allMessages = useSelector((state) => state.messages)

    const params = useParams();
    const recipient_id = params;
    // console.log(recipient_id);
    const sender_id = sessionUser.id;

    let messagesArr = [];
    for (let key in allMessages) {
        messagesArr.push(allMessages[key])
    }
    const [messages, setMessages] = useState(messagesArr);

    useEffect(() => {
        if (sessionUser) {
            dispatch(getAllMessages(recipient_id));
        }
    }, [dispatch, sessionUser])

    return (
        <div>
            {messagesArr.map((message, idx) => (
                <p key={idx}>{message.sender_name}:{message.content}</p>
            ))}
            <Chat sender_id={sessionUser.id} recipient_id={recipient_id} messages={messages} setMessages={setMessages}/>
        </div>
    )
}

export default Channel;
