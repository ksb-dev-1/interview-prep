import { useState } from "react";

export default function useBoolean(initialValue) {
  const [value, setValue] = useState(Boolean(initialValue));

  function setTrue() {
    setValue(true);
  }

  function setFalse() {
    setValue(false);
  }

  return { value, setTrue, setFalse };
}
