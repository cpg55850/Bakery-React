import React, { Component } from "react";
import NavbarLinks from "./NavbarLinks";
import DesktopLinks from './DesktopLinks';

import "./Navbar.css";

export class Navbar extends Component {
  state = {
    isActive: false
  }

  handleClick = () => {
    this.setState({...this.state, isActive: !this.state.isActive});
  }

  render() {
    return (
      <nav className="navbar">
        <DesktopLinks handleClick={this.handleClick}/>
        {this.state.isActive ? <NavbarLinks handleClick={this.handleClick}/> : null}
      </nav>
    );
  }
}

export default Navbar;