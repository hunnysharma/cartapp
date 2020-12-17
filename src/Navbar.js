import React from "react";
import img1 from "./images/Vector.png";
import img2 from "./images/Vector1.png";
import img3 from "./images/Shopping_Cart.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white navb">
        <a className="navbar-brand" href="#">
          <img
            width="38px"
            height="38px"
            src="https://d1myhw8pp24x4f.cloudfront.net/company_logo/1574399865544_b_237.png"
            alt="avatar"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto style1">
            <li className="nav-item active"></li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Our Stores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <h6>Search</h6>
          </div>
          <img className="imgpad" src={img2} />
          <img className="imgpad" src={img1} />
          <img width="50px" height="50px" className="imgpad" src={img3} />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
