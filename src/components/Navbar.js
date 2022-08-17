
import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

  //creating a navbar for entire page


const Navbar = () => {



  return (
    <div class="navbars">
        <div>
            <img src="https://www.dbs.com/dbstechindia/public/images/dbs-tech-logo.png" alt=""/>
        </div>
      <div class="right-nav">
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/transactiondetails" className="navLink">
              Transaction Details{" "}
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/customer" className="navLink">
              Customer details{" "}
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/logout" className="navLink">
              Logout{" "}
            </Link>
      </div>
    </div>
  );
};

export default Navbar;