import { useState } from "react";

export default function InitializingWithFunction() {
  const [num, setNum] = useState(() => {
    console.log("Initial State");
    return 10;
  });

  return <p>{num}</p>;
}
