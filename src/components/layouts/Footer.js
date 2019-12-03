import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="ft-main">
          <div className="ft-a">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              alias, repellendus earum quisquam ut soluta! Dolore veritatis
              impedit ad doloremque cumque ratione placeat laborum itaque,
              distinctio facilis eum quo eaque.
            </p>
          </div>
          <div className="ft-b">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ft-end">
          <p>Bakery &copy; 2019</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
