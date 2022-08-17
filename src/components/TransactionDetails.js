import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import './TransactionDetails.css';

const TransactionDetails = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    loadTransactions();

// loading the transactions when page is rendered

    async function loadTransactions(){
      console.log("Inside trans");
        await axios
        .get(`http://localhost:8080/api/v1/transaction/all`)
        .then((res) => {
          setTransactions(res.data);
          console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
  },[]);

  return (
      <>
      <Navbar/>
    <div>
      <center>
      <table className="table table-striped mt-4 bg-dark text-white" style={{fontSize:"1px"}}>
        <thead style={{color:"black", fontSize:"15px"}}>
          <tr>
            <th scope="col">Transaction ID</th>
            <th scope="col">Receiver BIC</th>
            <th scope="col">Receiver Name</th>
            <th scope="col">Receiver Number</th>
            <th scope="col">Currency Amount</th>
            <th scope="col">Transfer Fees</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Transfer Date</th>
            <th scope="col">Customer Id</th>
          </tr>
        </thead>
        <tbody className="font-weight-normal" style={{fontSize:"1px"}}>
            {transactions.map((t, index) => (
                <tr className="font-weight-normal" style={{fontSize:"1px"}} key = {t.transactionId} scope="row">
                    <td>{t.transactionId}</td>
                    <td>{t.receiverBIC}</td>
                    <td>{t.receiverAccountName}</td>
                    <td>{t.receiverAccountNumber}</td>
                    <td>{t.amount}</td>
                    <td>{t.tranferFees}</td>
                    <td>{t.totalAmount}</td>
                    <td>{t.transferDate}</td>
                    <td>{t.customer.customerId}</td>
                </tr>

            ))
          }
            </tbody>
</table>
</center>
</div>  
</>
)
}                          

export default TransactionDetails;
