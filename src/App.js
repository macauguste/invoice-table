  import React, { useState } from 'react';
  import { AiOutlineDelete } from "react-icons/ai"
  import data from "./mock-data.json";
  import "./app.css";
  import nextId from "react-id-generator";

  
  const App = () =>
   {
    const [total, setTotal] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [addInvoiceData, setAddInvoiceData] = useState({
      itemNumber: '',
      name: '',
      date: '',
      description: '',
      hours: '',
      rate: '',
      total: '',
    });

    const handleAddInvoiceChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      const newFormData = {...addInvoiceData};
      newFormData[fieldName] = fieldValue;

      setAddInvoiceData(newFormData); 
    };

    //Submit invoices
    const handleAddInvoiceSubmit = (event) => {
      event.preventDefault();

      const newInvoice = {
        itemNumber: nextId("Invoice "),
        name: (addInvoiceData.name),
        date: (addInvoiceData.date),
        description: (addInvoiceData.description),
        hours: (addInvoiceData.hours),
        rate: (addInvoiceData.rate),
        total: (addInvoiceData.hours * addInvoiceData.rate),
      };
  
      // const handleDeleteClick = (itemNumber) => {
      //   const newInvoice = {...invoices}

      //   const index = invoices.findIndex((invoice) => invoice.itemNumber === itemNumber);
      //   newInvoice.splice(index, 1)
      //   setInvoices(newInvoice);
      // }

      const newInvoices = [...invoices, newInvoice];
      setInvoices(newInvoices);
    };

    //Delete function 
    const deleteRow = (itemNumber) =>{

    }


    // //Calculating total amount of items in the tableTotal
    // let rows = document.querySelectorAll(".totalList");
    // console.log(rows);
    // let sum = 0;

    // for (let i = 0; i < rows.length; i++) {
    //   if(rows[i].className === "totalList"){
    //     sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
    //     setTotal(sum)
    //   }      
    // }

    // let colTotal = document.querySelector(".tableTotal")
    // let sum = 0;
    
    // for (let i = 0; i < colTotal.length; i++) {
    //   if(colTotal[i].className === "tableTotal"){
    //      sum += isNaN(colTotal[i].innerHTML) ? 0 : parseInt(colTotal[i].innerHTML)
    //      colTotal(sum)
    //   }
    // }
    // console.log(colTotal);


    return <div className="app-container">
 
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Item Number</th>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Hours</th>
            <th>Rate</th>
            <th className="totalList">Total</th>
          </tr>
        </thead>
        
        {invoices.map((invoice) =>(
        <React.Fragment key={invoice.itemNumber}>
        <tbody>
              <tr>
                <td>
                  <button onClick={() => deleteRow(invoice.itemNumber)}>
                    <AiOutlineDelete className="text-red-1000 font-bold text-l" />
                  </button>
                </td>
                <td>{invoice.itemNumber}</td>
                <td>{invoice.name}</td>
                <td>{invoice.description}</td>
                <td>{invoice.date}</td>
                <td>{invoice.hours}</td>
                <td>{invoice.rate}</td>
                <td className="tableTotal">{invoice.total}</td>
              </tr>    
        </tbody> 
        </React.Fragment>
        ))}
        <tfoot>
          <tr>
            <td colSpan="7" >
              Total
            </td>
            <td colSpan="8" >
              {total}
            </td>
          </tr>
        </tfoot>
      </table>

      <form onSubmit={handleAddInvoiceSubmit}>
        <div class="firstRow">
            <div>
            <input 
                type="text" 
                name="name" 
                required="required" 
                placeholder="Name" 
                onChange={handleAddInvoiceChange}
            /> 
            </div>
            <div>
              <input 
                  type="text" 
                  name="description" 
                  required="required" 
                  placeholder="Description" 
                  onChange={handleAddInvoiceChange}
              /> 
            </div>
            <div>
              <input 
                  type="date" 
                  name="date"
                  required="required" 
                  min="2018-01-01"
                  onChange={handleAddInvoiceChange}
              />
            </div>
        </div> 
        <div class="secondRow">
            <div>
              <input 
                  type="number" 
                  name="hours"  
                  required="required" 
                  placeholder="hours worked" 
                  onChange={handleAddInvoiceChange}
              />
            </div>
            <div>
              <input 
                  type="number" 
                  name="rate" 
                  required="required" 
                  placeholder="job rate" 
                  onChange={handleAddInvoiceChange}
              />
            </div>
            <div>
              <label class="secondRow" for="subTotal">
                {"SubTotal = $"+ addInvoiceData.hours * addInvoiceData.rate}
              </label>
            </div>
            <div>
              <button class= "secondRow" type="submit" value="">Add Invoice</button>
            </div>
        </div>
      </form>
    </div>

  }

  export default App;
