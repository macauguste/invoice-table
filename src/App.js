import React, { useState } from 'react';
import data from "./mock-data.json";
import "./app.css";

const App = () => {

  const [invoices, setInvoices] = useState(data);

  return <div className="app-container">
    <table>
      <thead>
        <tr>
          <th>Item Number</th>
          <th>Description</th>
          <th>Hours</th>
          <th>Rate</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) =>(
          <tr>
            <th>{invoice.itemNumber}</th>
            <th>{invoice.description}</th>
            <th>{invoice.hours}</th>
            <th>{invoice.rate}</th>
            <th>{invoice.total}</th>
          </tr>
        ))}
      </tbody>
          
      <h2> Add an Invoice </h2>
    </table>
  </div>
}

export default App;
