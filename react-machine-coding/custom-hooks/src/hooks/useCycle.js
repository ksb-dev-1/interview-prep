import { useState } from "react";

export default function useCycle(...args) {
  const [index, setIndex] = useState(0);

  const cycle = () => {
    setIndex((prev) => (prev + 1) % args.length);
  };

  return [args[index], cycle];
}
