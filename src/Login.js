import React from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form"
import { token } from "./Token.js";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const { value, name } = event.target;

        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        console.log(this.state.email);
        console.log(this.state.password);

        fetch("https://me-api.charlottestrand.me/login/", {
        //fetch("http://localhost:1337/login/", {
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
        .then(response => response.json())
        .then(res => {
            console.log(res.data.token);
            token.token = res.data.token;
            this.props.history.push('/reports/add');
        })
        .catch((err) => {
            console.error(err);
            console.log("Error logging in.");
        })

    }

    render() {
        return (
                <main>
                    <div className="container">
                        <div className="me-div">
                            <h3>Admin login</h3>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>E-mail:</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} required />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} required />
                                </Form.Group>
                                <Button variant="primary" type="submit">Login</Button>
                            </Form>
                        </div>
                    </div>
                </main>
            );
    }

    // render() {
    //     return (
    //             <main>
    //                 <div className="container">
    //                     <div className="me-div">
    //                         <h3>Logga in</h3>
    //                         <form onSubmit={this.handleSubmit}>
    //                             <label>
    //                                 E-mail:
    //                                 <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
    //                             </label>
    //                             <label>
    //                                 Password:
    //                                 <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />
    //                             </label>
    //                             <input type="submit" value="Submit" />
    //                         </form>
    //                     </div>
    //                 </div>
    //             </main>
    //         );
    // }
}

export default LoginForm;
