import React, { Component, Fragment } from "react";
import Column from "./components/layouts/Column";
import TwoColumn from "./components/layouts/TwoColumn";

export class News extends Component {
  render() {
    return (
      <div>
        <TwoColumn 
        title2=<h1>News2</h1>
        desc2=<p>This is two</p> 
        title=<h1>News</h1> 
        desc=<p>This is the news page.</p> 
        bg="red" 
        bg2="blue" />
      </div>
    );
  }
}

export default News;
