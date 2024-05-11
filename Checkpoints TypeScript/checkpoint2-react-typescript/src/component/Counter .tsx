import React, { Component } from "react";

class Counter extends Component {
  state: { count: number } = {
    count: 0,
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
export default Counter;
