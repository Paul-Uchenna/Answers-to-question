# Checkpoint: Converting React code to TypeScript

## Description

In this checkpoint, we will convert the given React code snippets into TypeScript. We will add appropriate type annotations and ensure type safety in the code.

### Code 01

```javascript
import React from "react";

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

### Code 02

```javascript
import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return;
    <div>
      <p>Count: {this.state.count}</p>
      <button onClick={this.increment}>Increment</button>
    </div>;
  }
}
export default Counter;
```
