import { useState } from "react";

const positions = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

export const useToastPosition = (initialPosition = "top-right") => {
  const [position, setPosition] = useState(initialPosition);

  const changePosition = (newPosition) => {
    if (positions.includes(newPosition)) {
      setPosition(newPosition);
    }
  };

  return { position, positions, changePosition };
};
