import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChatJoin = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join chat</h1>
                <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                <input placeholder="Room" className="joinRoom" type="text" onChange={(event) => setRoom(event.target.value)} />
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`chat/join?name=${name}&room=${room}`}>
            <button className={"button-chat"} type="submit">Sign in</button>
            </Link>
            </div>
        </div>
    )
}

export default ChatJoin;
