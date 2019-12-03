import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

export class Navbar extends Component {
  render() {

    const element = <FontAwesomeIcon icon={faBars} />

    return (
      <nav className="navbar">
        <ul className="navUl">
          <li>
            <Link to="/">{element}</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="../News">News</Link>
          </li>
          <li>
            <Link to="../Contact">Contact</Link>
          </li>
          <li>
            <Link to="../About">About</Link>
          </li>
          <li>
            <Link to="../Menu">Menu</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
