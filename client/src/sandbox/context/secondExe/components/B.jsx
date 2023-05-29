import React from "react";
import { useName } from "../NameProvider";
import C from "./C";

const B = () => {
  const { name } = useName();
  return (
    <>
      <p>In B componenet: {name}</p>
      <C />
    </>
  );
};

export default B;
