import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <p id={this.props.id} onClick={(e) => this.props.clicked(e.target.id)}>
        item id={this.props.id}, name={this.props.name}
      </p>
    );
  }
}

export default Item;
