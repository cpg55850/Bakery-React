import React, { Component, Fragment } from "react";
import Column from "./components/layouts/Column";

export class Contact extends Component {
  render() {
    return (
      <div>
        <Column title="Contact" desc="This is the contact page." bg="green" />
      </div>
    );
  }
}

export default Contact;
