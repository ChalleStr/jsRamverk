import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Link, Route } from 'react-router-dom';
import ReactMarkdown from 'react-markdown/with-html';
import ReactDOM from 'react-dom';

// const Report = ({ match }) => {
//     const kmom = match.params.kmom;
//     const [text, setText] = useState("");
//
//     useEffect(() => {
//         fetch(`http://localhost:1337/reports/week/${kmom}`)
//         .then(res => res.json())
//         .then(res => setText(res.data));
//     });
//
//     const ShowReport = () =>
//
// }

const readMe = `
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### 'npm start'

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### 'npm test'

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### 'npm run build'

Builds the app for production to the 'build' folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### 'npm run eject'

**Note: this is a one-way operation. Once you 'eject', you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can 'eject' at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except 'eject' will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use 'eject'. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### 'npm run build' fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
`

const Report = () => {
    return (
        <main>
            <div className="container">
                <h2><strong>GitHub</strong></h2>
                <p><a className="ext-link" href="https://github.com/ChalleStr/jsRamverk">Här </a>finns mitt repo på GitHub.</p>
                <div className="content">
                    <h2><strong>ReadMe</strong></h2>
                    <ReactMarkdown source={readMe} />
                </div>
            </div>
        </main>
    );
};

ReactDOM.render(<ReactMarkdown source={readMe} escapeHtml={false} />, document.getElementById("home"));

export default Report;
