import React from 'react';
import Form from "react-bootstrap/Form"
//import { BrowserRouter as Link, Route } from 'react-router-dom';
//import ReactMarkdown from 'react-markdown/with-html';
//import ReactDOM from 'react-dom';
//import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
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

        fetch("http://localhost:1337/reports/update", {
            method: "PUT",
            headers: {
                "x-access-token": token.token,
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                //this.state
                week_nr: this.state.week_nr,
                kmom_text: this.state.kmom_text
            })
        })
        .then(response => {
            return response.json()
        })
        .then(res => {
            if (res.data) {
                //console.log(res.data.token);
                console.log("Report updated!");
            } else {
                console.log("Funkade ej");
            }
        })
        .catch((error) => {
            console.error("Error: ", error);
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

//     render() {
//         return (
//                 <main>
//                     <div className="container">
//                         <div className="me-div">
//                             <h3>Update report</h3>
//                             <form onSubmit={this.handleSubmit}>
//                                 <label>
//                                     Choose a week (number):
//                                     <input type="number" name="week_nr" onChange={this.handleChange} required />
//                                 </label>
//                                 <label>
//                                     Text:
//                                     <textarea name="kmom_text" onChange={this.handleChange} />
//                                 </label>
//                                 <input type="submit" value="Submit" />
//                             </form>
//                         </div>
//                         <Button variant="primary" onClick={this.handleUpdateClick}>Back</Button>
//                     </div>
//                 </main>
//             );
//     }
// }

export default UpdateReport;
