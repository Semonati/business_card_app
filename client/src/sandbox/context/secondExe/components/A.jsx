import React from "react";
import NameProvider from "../NameProvider";
import B from "./B";

const A = () => {
  return (
    <NameProvider>
      <p>In A componenet</p>
      <B />
    </NameProvider>
  );
};

export default A;
