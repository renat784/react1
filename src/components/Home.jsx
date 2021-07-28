import React, { Component } from "react";
import { createStore } from "redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 10 };
    this.store = createStore(this.counter);
    this.store.subscribe(() => this.setState({ value: this.store.getState() }));
  }

  counter(state = 0, action) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  }

  componentDidMount() {}

  Increment = () => {
    this.store.dispatch({ type: "INCREMENT" });
  };

  Decrement = () => {
    this.store.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <p>counter= {this.state.value}</p>
        <button onClick={this.Increment}>+</button>
        <button onClick={this.Decrement}>-</button>
      </div>
    );
  }
}

export default Home;
