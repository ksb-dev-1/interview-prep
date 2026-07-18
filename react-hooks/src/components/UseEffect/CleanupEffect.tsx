import { useState, useEffect } from "react";

export default function CleanupEffect() {
  const [count, setCount] = useState(0);

  // Cleanup function runs before the next effect or when the component unmounts
  // When dependencies change, React first runs cleanup for the old effect, then runs the new effect.
  useEffect(() => {
    console.log("Subscribed:", count);

    return () => {
      console.log("Cleaned up:", count);
    };
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>Increase ({count})</button>
  );
}
