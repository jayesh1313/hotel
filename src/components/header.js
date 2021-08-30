import { Link } from "react-router-dom";
import React from 'react'
import '../stylesheets/header.css';
export default function Header() {
    return (
        
            <div >
                 <nav className="navbar navbar-light bg-success fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">GRIVAGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Hotel</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
          
            <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
            <hr />
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Form">Form</Link>
            <hr />
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/Services">SERVICE</Link>
            <hr />
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Room">ROOMS</Link>
            <hr />
          </li>
          
          
          
        </ul>
       
      </div>
    </div>
  </div>
</nav>
              
            </div>

      
)
}