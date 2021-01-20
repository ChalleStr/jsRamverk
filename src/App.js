import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Me from './Me.js';
import Reports from './Reports.js';
import UpdateReport from './UpdateReport.js';
import RegisterForm from './Register.js';
import LoginForm from './Login.js';
import AddReport from './Addreport.js';
import ShowReport from './ShowReport.js';
import Chat from './Chat/Chat.js';
import ChatJoin from './Chat/ChatJoin.js';

const App = () => (
    <Router>
        <Navbar className="navbar" variant="dark">
            <Navbar.Brand href="/">Charlotte</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar">
                <Nav.Link className="navbar-link" href="/">Hem</Nav.Link>
                <Nav.Link href="/">Me</Nav.Link>
                <Nav.Link href="/reports/show">Reports</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/chat">Chat</Nav.Link>

            </Nav>
            </Navbar.Collapse>
        </Navbar>

    <Route exact path="/" component={Me} />
    <Route path="/reports/show" component={Reports} />
    <Route path="/reports/add" component={AddReport} />
    <Route path="/reports/update" component={UpdateReport} />
    <Route path="/reports/week/:kmom" component={ShowReport} />
    <Route path="/register" component={RegisterForm} />
    <Route path="/login" component={LoginForm} />
    <Route path="/chat/join" component={Chat} />
    <Route path="/chat" component={ChatJoin} />
    </Router>

);

export default App;
