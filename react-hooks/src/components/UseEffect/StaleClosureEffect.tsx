import { useState, useEffect } from "react";

export default function StaleClosureEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log("Timeout count:", count);
    }, 2000);
  }, []);

  return (
    <button onClick={() => setCount(count + 1)}>Increase ({count})</button>
  );
}
