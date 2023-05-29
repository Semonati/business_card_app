import { useState, useEffect } from "react";
import { getTime } from "./utils";

const UseEffectNoDependancies = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log(`in useEffect: ${getTime()}`);
  });

  return (
    <div>
      {console.log(`in render: ${getTime()}`)}
      <p> Counter: {count}</p>
      <p>Num: {num}</p>
      <button
        style={{ padding: 2 }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        + count
      </button>
      <button style={{ padding: 2 }} onClick={() => setNum((prev) => prev + 1)}>
        + num
      </button>
    </div>
  );
};

export default UseEffectNoDependancies;
