import { useState, useEffect } from "react";

export default function EffectWithDependency() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    console.log("Effect runs with a:", a); // Runs only when 'a' changes
  }, [a]);

  return (
    <div>
      <button onClick={() => setA(a + 1)}>Increase A ({a})</button>
      <button onClick={() => setB(b + 1)}>Increase B ({b})</button>
    </div>
  );
}
