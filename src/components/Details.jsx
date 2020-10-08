import React, { Component } from "react";
import queryString from "query-string";

class Details extends Component {
  state = {};

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/4")
      .then((i) => i.json())
      .then((i) => console.log(i.title));
  }

  render() {
    return <p>details</p>;
  }
}

export default Details;
