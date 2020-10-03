import React, { Component } from "react";

class Count extends Component {
  state = {
    second: 0,
    min: 0,
    hour: 0,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {

      if (this.state.second === 59) {

        this.setState((prevState) => ({
          second: 0,
          min: prevState.min + 1,
        }));
      } else {

        this.setState((prevState) => ({
          second: prevState.second + 1,
        }));
      }

      if (this.state.min === 60) {

        this.setState((prevState) => ({
          min: 0,
          hour: prevState.hour + 1,
        }));
      }

      if (this.state.hour === 100) {

        this.setState({
          second: 0,
          min: 0,
          hour: 0,
        });
      }

    }, 1000);
  }

  render() {
    const {  second, min, hour } = this.state;

    return (
      <div className="stopwatch">
        <span>hr {hour >= 10 ? hour : "0" + hour}</span>&nbsp;:&nbsp;
        <span> min {min >= 10 ? min : "0" + min}</span>&nbsp;:&nbsp;
        <span>sec {second >= 10 ? second : "0" + second}</span>&nbsp;:&nbsp;
      </div>
    );
  }
}

export default Count;
