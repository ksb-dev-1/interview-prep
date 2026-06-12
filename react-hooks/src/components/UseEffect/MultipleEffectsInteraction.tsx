import { useState, useEffect } from "react";

export default function MultipleEffectsInteraction() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect A", count);
  }, [count]);

  useEffect(() => {
    console.log("Effect B", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>Increase ({count})</button>
  );
}
