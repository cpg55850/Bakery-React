import React, { Component, Fragment } from "react";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import Home from "./components/layouts/Home";
import About from "./About";
import News from "./News";
import Contact from "./Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/News" component={News} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
