import { useState, useEffect } from "react";

export default function AsyncEffect() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching...");

      // Wait 3 seconds before resolving
      const res = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve("Hello");
        }, 3000);
      });

      setData(res);
      console.log("Data fetched:", res);
    }

    fetchData();
  }, []);

  return <p>{data ?? "Loading..."}</p>;
}
