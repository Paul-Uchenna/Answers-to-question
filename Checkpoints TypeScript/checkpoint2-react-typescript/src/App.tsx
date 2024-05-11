import React from "react";
import "./App.css";
import Counter from "./component/Counter ";
import Greeting from "./component/Greet";

function App() {
  return (
    <div className="App">
      <Greeting name="Paul" />
      <Counter />
    </div>
  );
}

export default App;
