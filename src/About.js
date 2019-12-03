import React, { Component, Fragment } from "react";
import FourColumn from "./components/layouts/FourColumn";

export class About extends Component {
  render() {
    return (
      <div>
        <FourColumn 
        title2=<h1>News2</h1>
        desc2=<p>This is two</p> 
        title=<h1>News</h1> 
        desc=<p>sldfjalskdjf lsjdf lksadjf lsdj flkjdslfj sdljfa ldsj flsjdf lk</p> 
        bg="red" 
        bg2="blue" />
      </div>
    );
  }
}

export default About;
