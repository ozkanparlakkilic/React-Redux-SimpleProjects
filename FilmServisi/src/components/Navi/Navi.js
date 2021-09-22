
import React from "react";
import {
  Navbar,
  NavbarBrand
} from "reactstrap";

const Navi = () => {
    return (
        <div>
          <Navbar className="bg-danger" light expand="md">
            <NavbarBrand>
              <a className="text-white" href="#">Film Db</a>
            </NavbarBrand>

            <div className="collapse navbar-collapse ">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </Navbar>               
        </div>

        
      );
};


export default Navi;
