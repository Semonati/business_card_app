import React from "react";
import Button from "@mui/material/Button";

const OnClick = () => {
  const handleClick = (text, e) => {
  };

  return (
    <>
      <Button variant="outlined" sx={{ m: 2 }} onClick={handleClick}>
        Click me one!!!
      </Button>
      <Button variant="outlined" sx={{ m: 2 }} onClick={(e) => handleClick(e)}>
        Click me two!!!
      </Button>
      <Button
        variant="outlined"
        sx={{ m: 2 }}
        onClick={(e) => handleClick("hallo", e)}
      >
        Click me three!!!
      </Button>
    </>
  );
};

export default OnClick;
