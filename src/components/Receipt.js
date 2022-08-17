import React from 'react';
import './Receipt.css';
import { useLocation } from 'react-router';


//-------receipt to print the transaction

const Receipt = (props) => {
    console.log(props);
    return (
        <div className="receipt">
            <center>
                <h2 className='headings'>Receipt</h2>
            <table className="table">
                <tbody>
                    <tr scope="row">
                        <td>Customer Name</td>
                        <td>{props.customerId}</td>

                    </tr>
                    <tr>
                        <td>Receiver Account Name</td>
                        <td>props.</td>

                    </tr>
                    <tr>
                        <td>Receiver Account Number</td>
                        <td>props.</td>

                    </tr>
                    <tr>
                        <td>Receiver BIC</td>
                        <td>props.</td>

                    </tr>
                    <tr>
                        <td>Amount Sent</td>
                        <td>props.</td>

                    </tr>
                    <tr>
                        <td>Transfer fees</td>
                        <td>props.</td>

                    </tr>
                    <tr>
                        <td>Total Balance</td>
                        <td>props.</td>

                    </tr>
                    <tr>
                        <td>Updated Balance</td>
                        <td>props.</td>

                    </tr>
                    <tr>
                        <td>Transfer Type</td>
                        <td>props.</td>

                    </tr>
                    <tr>
                        <td>Transfer Date</td>
                        <td>props.</td>

                    </tr>
                    <tr>
                        <td>Message</td>
                        <td>props.</td>

                    </tr>

                   

                </tbody>
            </table>
            </center>

        </div>
    )
}

export default Receipt;