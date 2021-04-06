import React from "react";

import "../stylesheet/App.scss";

class HalfPage extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
export default HalfPage;
