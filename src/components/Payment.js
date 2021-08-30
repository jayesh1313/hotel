import React from 'react'
import '../stylesheets/payment.css';
export default function Payment() {
    return (
        
            <div className="abv">
             <div className ="container mx-auto">           
             <div className ="row">
               <div className="ynm">
             <div className="col-md-4c">
             <h1 className="h">Payment </h1>
                {/* <img className="add" src="https://www.vhv.rs/dpng/d/17-174904_transparent-credit-card-logos-png-png-download.png" alt="" /> */}
                <div className="idea" >
                <div className="col-md-10">
    <label for="input" className="form-label">Card Number</label>
    <input type="number" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" id="inputEmail4"/>
  </div>
  <div className="col-md-10">
    <label for="input" className="form-label">Months</label>
    <input type="month" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-10">
    <label for="input" className="form-label">CVV</label>
    <input type="number" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-10">
    <label for="input" className="form-label">Cardholder Name</label>
    <input type="number" className="form-control" id="inputEmail4"/>
    <br />
  </div>
  <button className="btn btn-success" type="submit">PayNow</button>
  </div>
           </div>
           </div>
        </div>    
               
       </div>
       </div>
       
  )
}
