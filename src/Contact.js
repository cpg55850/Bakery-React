import React, { Component, Fragment } from "react";
import Column from "./components/layouts/Column";

import "./Contact.css";

export class Contact extends Component {
  render() {
    return (
      <Fragment>
      <Column title="Contact Us" desc="Let us know what you think of our restaurant." bg="#007476" />
      <div className="formGridContainer">
        <div className="formContainer">
        <form>
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>

          <input type="submit" value="Submit"/>
        </form>
      </div>
      </div>
      </Fragment>
    );
  }
}

export default Contact;
