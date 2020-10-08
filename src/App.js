import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Details from "./components/Details";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  render() {
    return (
      <Switch>
        <Route path="/details/:id" component={Details}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    );
  }
}

export default App;
