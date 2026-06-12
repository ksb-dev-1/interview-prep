import { useState } from "react";

export default function DependentStates() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(a + 1);

  console.log(a, b);

  function handleClick() {
    setA(a + 1);
    setB(a + 1);

    // setA(3);
    // setB(4);
  }

  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
