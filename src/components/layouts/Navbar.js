import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">&copy;</Link>
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
        </ul>
      </nav>
    );
  }
}

export default Navbar;
