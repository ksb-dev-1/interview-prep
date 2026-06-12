import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {  // Infinite Loop
  //     setCount(count + 1);
  //     console.log(count);
  //   }, [count]);

  useEffect(() => {
    if (count > 0) console.log("In useEffect : ", count);
  }, [count]);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log("In handleClick : ", count); // This logs 0 bcause stae updates are asynchronous
  }

  //   function handleClick(){
  //     setCount((prevCount) => prevCount + 1);
  //     setCount((prevCount) => prevCount + 1);
  //     setCount((prevCount) => prevCount + 1);
  //     console.log("Clicked:", count); // Still logs 0 but ui updates to 3
  //   }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
