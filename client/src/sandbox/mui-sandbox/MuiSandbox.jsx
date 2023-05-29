import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import NavItem from "../../routes/components/NavItem";

const MuiSandbox = () => {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="Typography" to="typography" sx={{ color: "black" }} />
          <NavItem label="Divider" to="divider" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default MuiSandbox;
