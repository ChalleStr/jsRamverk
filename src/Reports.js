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
        //console.log(this.state.kmom)

        this.props.history.push('/reports/week/' + this.state.kmom);
    }


    //     fetch("https://me-api.charlottestrand/reports", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Origin": "*"
    //         },
    //         body: JSON.stringify({
    //             kmom: this.state.kmom,
    //         })
    //     })
    //     .then(res => {
    //
    //         this.props.history.push('/reports/week/' + this.state.kmom);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         console.log("Error getting report.");
    //     })
    //
    // }


// const Reports = ({ match }) => {
//     const kmom = match.params.kmom;
//     //console.log(kmom);
//     const [text, setText] = useState("");
//
//     useEffect(() => {
//         fetch(`http://localhost:1337/reports/week/${kmom}`)
//             .then(res => res.json())
//             .then(res => {
//                 console.log(res.data.kmom_text);
//                 setText(res.data.kmom_text)
//             });
//     });
    //
    // return (
    //     <main>
    //         <div className="container">
    //             <h2>Please choose a report:</h2>
    //             <h2><strong>Week {kmom}</strong></h2>
    //             <div className="content">
    //                 <ReactMarkdown source={text} />
    //             </div>
    //
    //         </div>
    //     </main>
    // );
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
