import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/details">
          details
        </Link>
      </nav>
    );
  }
}

export default Nav;
