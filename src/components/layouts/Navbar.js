import React, { Component } from "react";
import NavbarLinks from "./NavbarLinks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

export class Navbar extends Component {
  state = {
    linkVisibility: false
  }

  toggleVisibility = () => {
    this.setState({
      linkVisibility: !this.state.linkVisibility
    })
    console.log("visibility: " + this.state.linkVisibility)
  }

  render() {
    const element = <FontAwesomeIcon icon={faBars} />;
    const visibility = this.state.linkVisibility;

    return (
      <nav className="navbar">
        <ul className="navUl">
          <li className="menuBtn" onClick={this.toggleVisibility}>
            <a>{element}</a>
          </li>
          <div id="myLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="../About">About</Link>
          </li>
          <li>
            <Link to="../Menu">Menu</Link>
          </li>
          <li>
            <Link to="../Contact">Contact</Link>
          </li>
        </div>
          <NavbarLinks active={visibility} />
        </ul>
      </nav>
    );
  }
}



export default Navbar;
