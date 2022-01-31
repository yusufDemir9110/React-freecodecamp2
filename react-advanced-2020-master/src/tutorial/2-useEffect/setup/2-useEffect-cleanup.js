import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("render");
  }, []);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  return (
    <div>
      <h1>window</h1>
      <h2>{size}</h2>
    </div>
  );
};

export default UseEffectCleanup;
