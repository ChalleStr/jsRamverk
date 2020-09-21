import React, { useEffect, useState } from "react";
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
                        <h3>Registrera ny användare</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                E-mail:
                                <input type="email" name="email" onChange={this.handleInputChange} />
                            </label>
                            <label>
                                Password:
                                <input type="password" name="password" onChange={this.handleInputChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}

export default RegisterForm;
