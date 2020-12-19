import React from "react";
import "font-awesome/css/font-awesome.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavBar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

NavBar.defaultProps = {
  title: "Github Finder",
  icon: "fa fa-github",
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavBar;
