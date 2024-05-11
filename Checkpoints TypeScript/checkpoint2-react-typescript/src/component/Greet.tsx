import React from "react";

type Greetpros = { name: string };

const Greeting = ({ name }: Greetpros) => {
  return <h1>Hello, {name}!</h1>;
};
export default Greeting;
