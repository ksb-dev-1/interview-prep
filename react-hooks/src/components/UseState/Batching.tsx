import { useState } from "react";

// Eventhough i called setCoutn 3 times, React batches these updates into a single re-render
// So the component re-renders only once with the final state value of 1
// This batching behavior helps improve performance by reducing unnecessary re-renders

export default function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
