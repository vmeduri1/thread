import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postMessage } from "../store/messages";
import { io } from 'socket.io-client';

let socket;

const Chat = ({ sender_id, recipient_id }) => {
    // const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState([]);
    const user = useSelector(state => state.session.user)
    const [content, setChatInput] = useState("");

    // useEffect(() => {
    //     // open socket connection
    //     // create websocket
    //     socket = io();

    //     socket.on("chat", (chat) => {
    //         setMessages(messages => [...messages, chat])
    //     })
    //     // when component unmounts, disconnect
    //     return (() => {
    //         socket.disconnect()
    //     })
    // }, [])

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
        // console.log(content, 'CCOOOONNNNTTTTEEENNNNTTT');
        dispatch(postMessage(sender_id, recipient_id.id, content));
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
