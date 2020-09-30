import React, { Component } from "react";

class FrontText extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }
  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>ReactHelloWorld from react frontent</h1>
        <p style={{fontSize: 40, color: "red"}}>{count}</p>
      </div>
    );
  }
}

export default FrontText;
