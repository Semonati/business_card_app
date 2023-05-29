import { useState, useEffect } from "react";
import { getTime } from "./utils";

const UseEffectAsComponentWillUnmount = () => {
  useEffect(() => {
    console.log(`in useEffect: ${getTime()}`);
    return () => console.log(`in useEffect return: ${getTime()}`);
  }, []);

  return <div>{console.log(`in render: ${getTime()}`)}</div>;
};

export default UseEffectAsComponentWillUnmount;
