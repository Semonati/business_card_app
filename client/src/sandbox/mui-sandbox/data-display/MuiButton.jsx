import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const MuiButton = () => {
  return (
    <Box m={2}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default MuiButton;
