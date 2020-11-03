import React from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form"

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kmom: ""
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.type === "number" ? parseInt(event.target.value) : event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.history.push('/reports/week/' + this.state.kmom);
    }

    render() {
        return (
                <main>
                    <div className="container">
                        <div className="me-div">
                            <h3>Show reports</h3>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicNumber">
                                    <Form.Label>Week:</Form.Label>
                                    <Form.Control type="number" name="kmom" onChange={this.handleInputChange} />
                                </Form.Group>
                                <Button variant="primary" type="submit">Get report</Button>
                            </Form>
                        </div>
                    </div>
                </main>
            );
    }
};

export default Reports;
