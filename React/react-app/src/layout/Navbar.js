import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between px-3">
      <a className="navbar-brand" href="/">
        {title}
      </a>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/add">
            Add User
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/github">
            Project Files
          </Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Default App",
};

export default Navbar;
