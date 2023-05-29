import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const MuiDivider = () => {
  return (
    <>
      <Typography variant="body1" color="initial">
        item one
      </Typography>
      <Divider />
      <Typography variant="body1" color="initial">
        item two
      </Typography>
      <Divider light />
      <Typography variant="body1" color="initial">
        item three
      </Typography>
    </>
  );
};

export default MuiDivider;
