import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/form.css';
export default function Form() {
    return (
        <div className="tgb"  >
          {/* <h1 className="plm">Inquiry Form</h1> */}
            <div className="container-md">
            <form className="row g-3">
  <div className="col-md-6">
    <label for="input" className="form-label">ARRIVAL DATE</label>
    <input type="date" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">DEPARTURE DATE</label>
    <input type="date" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-6">
    <label for="inputAddress" className="form-label">NAME</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Enter your name"/>
  </div>
  <div className="col-6">
    <label for="inputAddress" className="form-label">NUMBER OF GUESTS</label>
    <input type="number" className="form-control" id="inputAddress" placeholder="Enter the number of guests"/>
  </div>
  <div className="col-6">
    <label for="inputAddress" className="form-label">PHONE NUMBER</label>
    <input type="tel" className="form-control" id="inputAddress" placeholder="Enter your number "/>
  </div>
  <div className="col-6">
    <label for="inputAddress" className="form-label">EMAIL ADDRESS</label>
    <input type="email" className="form-control" id="inputAddress" placeholder="Enter the email address"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address </label>
    <input type="address" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
 
  <div className="col-md-6">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>--Choose state--</option>
      <option>ANDHRA PRADESH</option>
      <option>UTTAR PRADESH</option>
      <option>MADHYA PRADESH</option>
      <option>MAHARASHTRA</option>
      <option>TELANGANA</option>
    </select>
  </div>
  <div className="col-md-6">
  <form>    
  <label for="inputState" className="form-label">State</label>
  <select id="inputState" className="form-select"> 
		<option value="">--Choose City--</option>
		<option>New Delhi</option>
		<option>Lucknow</option>
		<option>Hyderabad</option>
		<option>Ayodhya</option>
		<option>Pune</option>
		<option>Chennai</option>
		<option>Mumbai</option>
		<option>Kolkata</option>
	</select>
</form>
  </div>
  
  <div className="col-md-6">
    <label for="inputZip" className="form-label">Pin Code</label>
    <input type="text" className="form-control" id="inputZip" placeholder="Enter pincode"/>
  </div>
  <div className="col-md-6">
  <form>            
	<label for="inputState" className="form-label">WHICH TYPE</label>
  <select id="inputState" className="form-select"> 
		<option value="">BOOKING</option>
		<option>2 TWIN</option>
		<option>1 QUEEN</option>
		<option>2 QUEEN</option>
		<option>1 QUEEN 1 TWIN</option>
		<option>1 KING </option>
		<option>2 KING </option>
		<option>1 KING 1 QUEEN </option>
	</select>
</form>
</div>

 
  <div className="col-12">

    <Link  type="submit" className="btn btn-primary" to="/Payment">PAYNOW</Link>
  </div>
</form>

            </div>
        </div>
    )
}
