import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Invoice = props => (
    <tr style={{margin: 'auto'}}>
        <td style={{margin: 'auto', fontWeight: 'bold'}}>{props.invoice.date}</td>
        <td style={{margin: 'auto', textTransform: 'capitalize', fontWeight: 'bold'}}>{props.invoice.logger_name}</td>
        <td style={{margin: 'auto', fontWeight: 'bold'}}>{props.invoice.tons}</td>
        <td style={{margin: 'auto', textTransform: 'capitalize', fontWeight: 'bold'}}>{props.invoice.species}</td>
        <td style={{margin: 'auto', fontWeight: 'bold'}}>{"$ "+ props.invoice.total}</td>
        <td style={{margin: 'auto', width: 30}}>
            <Link to={"/edit/"+props.invoice._id}>Edit</Link>
        </td>
        <td style={{margin: 'auto', width: 30}}>
            <Link to={"/names/"+props.invoice.name}>Names</Link>
        </td>
    </tr>
)

const Result = props => (
    props.result.name
)

export default class InvoicesList extends Component {

    constructor(props) {
        super(props);
        this.state = {invoices: [], results: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/invoices/')
            .then(response => {
                this.setState({invoices: response.data});
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(axios.get('http://localhost:5000/invoices/sure')
            .then(response => {
                this.setState({results: response.data});
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            }))
    }

    // componentDidUpdate() {
    //     axios.get('http://localhost:5000/invoices/')
    //     .then(response => {
    //         this.setState({invoices: response.data});
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })   
    // }

    invoiceList() {
        return this.state.invoices.map(function(currentInvoice, i) {
            return <Invoice invoice={currentInvoice} key={i} />;
        });
    }

    invoiceResult() {
        return this.state.results.map(function(currentResult, i) {
            return <Result result={currentResult} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h2 style={{textAlign: 'center'}}>Invoices This Week </h2>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th style={{margin: "auto"}}>Date</th>
                            <th style={{margin: "auto"}}>Name</th>
                            <th style={{margin: "auto"}}>Tons</th>
                            <th style={{margin: "auto"}}>Species</th>
                            <th style={{margin: "auto"}}>Total</th>
                            <th style={{margin: "auto"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.invoiceList() }
                    </tbody>
                </table>
                {/* <p>{this.invoiceResult()}</p> */}
            </div>
        )
    }
}