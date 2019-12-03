import React, { Component } from "react";
import "./FourColumn.css";

export class FourColumn extends Component {
  render() {
    const { title, desc, title2, desc2, bg, bg2, img } = this.props;
    return (
      <div
        className="FourColumnGrid"
        style={{
          backgroundImage: img
            ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
            : ""
        }}
      >
        <div className="FourColumnItem" style={{backgroundColor: bg}}>
          {title}
          {desc}
        </div>
        <div className="FourColumnItem" style={{backgroundColor: bg2}}>
          {title2}
          {desc2}
        </div>
        <div className="FourColumnItem" style={{backgroundColor: bg}}>
          {title}
          {desc}
        </div>
        <div className="FourColumnItem" style={{backgroundColor: bg2}}>
          {title2}
          {desc2}
        </div>
      </div>
    );
  }
}

export default FourColumn;
