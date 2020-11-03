import React from 'react';
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import { token } from "./Token.js";

class UpdateReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week_nr: "",
            kmom_text: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.type === "number" ? parseInt(event.target.value) : event.target.value
        });
    }

    handleUpdateClick() {
        this.props.history.push("/reports/add");
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        console.log(token.token);

        fetch("https://me-api.charlottestrand.me/reports/update", {
        //fetch("http://localhost:1337/reports/update", {
            method: "PUT",
            headers: {
                "x-access-token": token.token,
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                week_nr: this.state.week_nr,
                kmom_text: this.state.kmom_text
            })
        }).then(response => {
            return response.json();
        }).then(result => {
            if(result.data) {
                console.log("Rapporten är uppdaterad!")
                this.props.history.push("/reports/week/" + this.state.week_nr);
            } else if (result.error) {
                console.log(result.error);
            }
        }).catch(error => {
            window.alert("There is no report with this week number!")
            console.log("Error:", error.message);
        });
    }

    render() {
        return (
                <main>
                    <div className="container">
                        <div className="me-div">
                            <h4>Update report</h4>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicNumber">
                                    <Form.Label>Choose a week (number):</Form.Label>
                                    <Form.Control type="number" name="week_nr" onChange={this.handleChange} required />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Text:</Form.Label>
                                    <Form.Control as="textarea" rows="30" name="kmom_text" onChange={this.handleChange} required />
                                </Form.Group>
                                <Button className="my-button" variant="secondary" onClick={this.handleUpdateClick}>Go back</Button>{" "}
                                <Button variant="primary" type="submit">Update</Button>
                            </Form>
                        </div>

                    </div>
                </main>
            );
    }
}


export default UpdateReport;
