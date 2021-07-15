import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postMessage, postMessageToStore } from "../store/messages";
import { io } from 'socket.io-client';

let socket;

const Chat = ({ sender_id, recipient_id, messages, setMessages }) => {
    // const [chatInput, setChatInput] = useState("");
    // const [messages, setMessages] = useState([]);
    const user = useSelector(state => state.session.user)
    const [content, setChatInput] = useState("");

    useEffect(() => {
        // open socket connection
        // create websocket
        socket = io();
        let channel_id;
        console.log(sender_id, recipient_id?.id, 'SENDERS AND RECIPIENTS');
        if (sender_id < recipient_id?.id) {
            channel_id = `${sender_id}_${recipient_id?.id}`
        } else {
            channel_id = `${recipient_id?.id}_${sender_id}`
        }
        socket.on(channel_id, (chat) => {
            console.log(chat, 'CHAT');
            // setMessages(messages => [...messages, chat])
            dispatch(postMessageToStore(chat))
        })
        console.log(channel_id, 'FRONTEND CHANNEL_ID');
        // when component unmounts, disconnect
        return (() => {
            socket.disconnect()
        })
    }, [])

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(postMessage(sender_id, recipient_id.id, content));
    // }, [dispatch, user])

    const updateChatInput = (e) => {
        setChatInput(e.target.value)
    };

    // const sendChat = (e) => {
    //     e.preventDefault()
    //     socket.emit("chat", { user: user.username, msg: chatInput });
    //     setChatInput("")
    // }
    const sendChat = (e) => {
        e.preventDefault();
        console.log('Entered sendChat', { sender_id: sender_id, recipient_id: recipient_id.id, content: content });
        // dispatch(postMessage(sender_id, recipient_id.id, content));
        socket.emit('chat', { sender_id: sender_id, recipient_id: recipient_id.id, content: content })
        setChatInput('');
    }

    return (user && (
        <div>
            <div>
                {/* {messages.map((message, ind) => (
                    <div key={ind}>{`${message.user}: ${message.msg}`}</div>
                ))} */}
            </div>
            <form onSubmit={sendChat}>
                <input
                    value={content}
                    onChange={updateChatInput}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
    )
};


export default Chat;
