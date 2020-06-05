import React, { Component } from "react";

class Pic extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="show-img">
        <h2>{this.props.title}</h2>
        <p>{this.props.details}</p>
        <img src={this.props.src} />
      </div>
    );
  }
}

export default Pic;
