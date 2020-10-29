import React from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
//import { useInput } from "./hooks/input-hook";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        console.log(this.state.email);
        console.log(this.state.password);


        //fetch("https://me-api.charlottestrand.me/register/", {
        fetch("http://localhost:1337/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(data => this.setState)
    }

    render() {
        return (
                <main>
                    <div className="container">
                        <div className="me-div">
                            <h3>Register new user</h3>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>E-mail:</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} required />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} required />
                                </Form.Group>
                                <Button variant="primary" type="submit">Register</Button>
                            </Form>
                        </div>
                    </div>
                </main>
            );
    }

}

export default RegisterForm;
