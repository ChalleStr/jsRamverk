import React, { useEffect, useState } from 'react';
import picture from './charlottestrand.jpg';

const Me = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        //fetch("https://me-api.charlottestrand.me/")
        fetch("http://localhost:1337/")
        .then(res => res.json())
        .then(res => setMessage(res.about));
    });

    return (
        <main>
            <div className="container">
                <img className="img-me" src={picture} alt="Charlotte"/>
                <div className="me-div">
                    <h1>Om mig</h1>
                        <p>{message}</p>
                </div>
            </div>
        </main>
    );
};

export default Me;
