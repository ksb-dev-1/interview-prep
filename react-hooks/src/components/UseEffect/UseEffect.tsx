import { useState, useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("Effect runs:", count); // Runs after every render
  //   });

  useEffect(() => {
    console.log("Mounted with count:", count); // Runs only once after the initial render
  }, []);

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </>
  );
}
