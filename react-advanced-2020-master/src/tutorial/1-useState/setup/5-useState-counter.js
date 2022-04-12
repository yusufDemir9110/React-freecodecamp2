import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const decrease = () => {
    setValue(value - 1);
  };
  const reset = () => {
    setValue(0);
  };
  const increase = () => {
    setValue(value + 1);
  };
  const increaseLater = () => {
    setTimeout(() => {
      //setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <div>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => decrease()}>
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={() => increase()}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => increaseLater()}>
          increase later
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
