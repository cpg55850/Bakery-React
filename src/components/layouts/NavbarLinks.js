import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export class NavbarLinks extends Component {
  render() {
    const myLinksStyle = {
      display: this.props.active ? "block" : "none"
    }

    return (
      <React.Fragment>
        <div id="myLinks" style={myLinksStyle}>
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
        </div>
      </React.Fragment>
    );
  }
}


export default NavbarLinks;
