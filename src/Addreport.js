import React from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form"
import { token } from "./Token.js";


class AddReport extends React.Component {
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
        this.props.history.push("/reports/update");
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        console.log(token.token);

        fetch("https://me-api.charlottestrand.me/reports/add", {
        //fetch("http://localhost:1337/reports/add", {
            method: "POST",
            headers: {
                "x-access-token": token.token,
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",

            },
            body: JSON.stringify({
                week_nr: this.state.week_nr,
                kmom_text: this.state.kmom_text
            })
        })
        .then(res => {
            if (res.status === 201) {
                console.log("Det funkade!");
                this.props.history.push('/reports/week/' + this.state.week_nr);
            } else {
                this.setState({status: "Funkade ej"})
            }
        })
        .catch((error) => {
            window.alert("This week number already exists! Choose another number.")
            console.error("Error: ", error);
        });
    }

    render() {
        return (
                <main>
                    <div className="container">
                        <div className="me-div">
                            <h2>Welcome!</h2>
                            <p>To update an existing report, click here:
                            {"  "}<Button variant="secondary" onClick={this.handleUpdateClick}>Update reports</Button>
                            </p>
                            <h4>New report</h4>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicNumber">
                                    <Form.Label>Week (number):</Form.Label>
                                    <Form.Control type="number" name="week_nr" onChange={this.handleChange} required />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Text:</Form.Label>
                                    <Form.Control as="textarea" rows="30" name="kmom_text" onChange={this.handleChange} required />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </main>
            );
    }

}

export default AddReport;
