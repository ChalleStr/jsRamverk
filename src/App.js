import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//import logo from './logo.svg';

import Me from './Me.js';
import Report from './Report.js';
//import './App.css';
//import './App.scss';

const App = () => (
    <Router>
        <Navbar className="navbar" variant="dark">
            <Navbar.Brand href="/">Charlotte</Navbar.Brand>
            <Nav className="navbar">
                <Nav.Link className="navbar-link" href="/">Hem</Nav.Link>
                <Nav.Link href="/">Me</Nav.Link>
                <Nav.Link href="reports/week/1">Reports</Nav.Link>
            </Nav>
        </Navbar>

    <Route exact path="/" component={Me} />
    <Route path="/reports/week/1" component={Report} />
    </Router>
        // return (<main>
        //         <div>{Me()}</div>
        //         </main>
        //     );

);




export default App;
