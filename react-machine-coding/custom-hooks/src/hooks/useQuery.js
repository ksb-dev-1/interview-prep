import { useEffect } from "react";
import { useState } from "react";

export default function useQuery(fn, deps = []) {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let ignore = false;

    fn()
      .then((data) => {
        if (ignore) return;

        setState({ status: "successful", data });
      })
      .catch((error) => {
        if (ignore) return;

        setState({ status: "rejected", error });
      });

    return () => {
      ignore = true;
    };
  }, deps);

  return state;
}
