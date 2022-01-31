import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world"; //if text hasn't a value/is false    return 'hello world'
  const secondValue = text && "hello world"; // if text hasn't a value/is false      return ''

  return (
    <div>
      {/* <h1>{firstValue}</h1>
      <h1>value:{secondValue}</h1> */}
      <h1>{text || "john doe"}</h1>
      {!text && <h1>hello world</h1>}
    </div>
  );
};

export default ShortCircuit;
