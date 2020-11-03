import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown/with-html';


const ShowReport = ({ match }) => {
    const kmom = match.params.kmom;
    const [text, setText] = useState("");

    useEffect(() => {
        fetch(`https://me-api.charlottestrand.me/reports/week/${kmom}`)
        //fetch(`http://localhost:1337/reports/week/${kmom}`)
            .then(res => res.json())
            .then(res => {
                setText(res.data.kmom_text)
            }).catch(error => {
                window.alert("There is no report with this week number!");
                console.log("No report data:", error.message);
                });
    });

    return (
        <main>
            <div className="container">
                <h2><strong>Week {kmom}</strong></h2>
                <div className="content">
                    <ReactMarkdown source={text} />
                </div>

            </div>
        </main>
    );
};

export default ShowReport;
