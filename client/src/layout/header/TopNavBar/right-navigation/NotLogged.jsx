import React from "react";
import Box from "@mui/material/Box";
import ROUTES from "../../../../routes/routerModel";
import NavItem from "../../../../routes/components/NavItem";

const NotLogged = () => {
  return (
    <Box>
      <NavItem to={ROUTES.SIGNUP} label="Signup" />
      <NavItem to={ROUTES.LOGIN} label="Login" />
    </Box>
  );
};

export default NotLogged;
