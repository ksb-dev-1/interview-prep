import { useState } from "react";

export default function FunctionalUpdatesAndStaleClosures() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick1() {
    setTimeout(() => {
      // setCount(count + 1);
      setCount((prev) => prev + 1); // fixes stale closure issue
      console.log("Inside setTimeout:", count);
    }, 1000);
  }

  function handleClick2() {
    // setFlag(!flag); // flag = false → !false = true → setFlag(true)
    // setFlag(!flag); // flag = STILL false → !false = true → setFlag(true)

    setFlag((prevFlag) => !prevFlag); // fixes stale closure issue
    setFlag((prevFlag) => !prevFlag);
  }

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={handleClick1}>Increase Later</button>
      </div>
      <div>
        <p>{flag.toString()}</p>
        <button onClick={handleClick2}>Toggle</button>
      </div>
    </>
  );
}
