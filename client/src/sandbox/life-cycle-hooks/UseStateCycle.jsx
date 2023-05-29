import { useState } from "react";
import { getTime } from "./utils";

const UseStateCycle = () => {
  const [count, setCount] = useState(() => {
    console.log(`in useState: ${getTime()}`);
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
    return 0;
  });

  return (
    <div>
      <div>Count: {count}</div>
      {console.log(`in render: ${getTime()}`)}
    </div>
  );
};

export default UseStateCycle;
