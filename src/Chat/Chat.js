import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { Redirect } from "react-router";

import TextContainer from "./TextContainer";
import Messages from "./Messages";
import InfoBar from "./InfoBar";
import Input from "./Input";

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [users, setUsers] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [flag, setFlag] = useState(0);

    //const url = "http://localhost:8300";
    const url = "https://socket-server.charlottestrand.me";
    // LOKALT:
    // const socket = io(url, {
    //     withCredentials: true,
    //     extraHeaders: {
    //         "Access-Control-Allow-Origin": "https://socket-server.charlottestrand.me"
    //     }
    // })
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);


        socket = io(url);

        setRoom(room);
        setName(name);

        socket.emit("join", { name, room }, (error) => {
            if (error) {
                setFlag(1);
                alert(error);
            }
        });
    }, [location.search]);

    useEffect(() => {
        socket.on("message", message => {
            setMessages(messages => [ ...messages, message ]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));

        }
    }

    if (flag) {
        console.log("flag");
        return (
            <Redirect to="/chat" />
        )
    }

    return (
        <div className="outerContainer">
            <div className="chatContainer">
                <InfoBar room={room} />
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        <TextContainer users={users} />
        </div>
    );
}

export default Chat;
