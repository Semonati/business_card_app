import { useState, useEffect } from "react";
import { getTime } from "./utils";

const UseEffectAsComponentDidMount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`in useEffect: ${getTime()}`);
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      {console.log(`in render: ${getTime()}`)}
      Counter: {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default UseEffectAsComponentDidMount;
