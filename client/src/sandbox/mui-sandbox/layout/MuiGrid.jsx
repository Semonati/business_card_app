import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


const MuiGrid = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ p: 2, backgroundColor: "success.light" }}>One</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ p: 2, backgroundColor: "primary.light" }}>Two</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ p: 2, backgroundColor: "error.light" }}>Three</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ p: 2, backgroundColor: "secondary.light" }}>Four</Box>
      </Grid>
    </Grid>
  );
}

export default MuiGrid;
