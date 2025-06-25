import { useState } from "react";

export default function Button() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
    // alert("Clicked! Counter: " + count);
  }

  return (
    <button onClick={handleClick}>
      Clicks - {counter}
    </button>
  );
}