import React, { Component } from "react";
import "./Showcase.css";

export class Showcase extends Component {
  render() {
    const { title, desc, bg, img } = this.props;
    return (
      <div
        className="showcaseGrid"
        style={{
          backgroundColor: bg,
          backgroundImage: img
            ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
            : ""
        }}
      >
        <div className="showcaseItem">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    );
  }
}

export default Showcase;
