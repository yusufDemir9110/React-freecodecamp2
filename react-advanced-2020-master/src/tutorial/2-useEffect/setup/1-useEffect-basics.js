import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useeffect");
    if (value >= 1) {
      document.title = `new messsages(${value})`;
    }
  }, [value]);
  useEffect(() => {
    console.log("hello");
  }, []);
  console.log("render");
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        increase
      </button>
    </div>
  );
};

export default UseEffectBasics;
