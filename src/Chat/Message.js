import React from "react";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();
    // const year = new Date().getFullYear();
    // const months
    // const month = new Date().getMonth();
    // const date = new Date().getDate();
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    const timeStamp = "Sent " + hour + ":" + min + ":" + sec;

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser ? (
            <div className="messageContainer">
                <p className="sentText">{trimmedName}</p>
                <div className="messageBox">
                    <p className="messageText">{ReactEmoji.emojify(text)}</p>
                    <p className="timeStamp">{timeStamp}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer">
                <div className="messageBox">
                    <p className="messageText">{ReactEmoji.emojify(text)}</p>

                </div>
                <p className="sentText">{user}</p>
            </div>
        )
    );
}

export default Message;
