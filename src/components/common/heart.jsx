import React, { Component } from "react";

class Heart extends Component {
  render() {
    return (
      <i
        onClick={this.props.onClick}
        className={this.getHeartClass()}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
      />
    );
  }

  getHeartClass() {
    let heartClass = "fa fa-heart";
    return this.props.liked ? heartClass : heartClass + "-o";
  }
}

export default Heart;
