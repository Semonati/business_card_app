import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import NavItem from "../routes/components/NavItem";

const Sandbox = () => {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="logic" label="comp-logic" sx={{ color: "black" }} />
          <NavItem to="mui-sandbox" label="MUI" sx={{ color: "black" }} />
          <NavItem
            label="life cycle hooks"
            to="life-cycle"
            sx={{ color: "black" }}
          />
          <NavItem
            label="custom counter hook"
            to="custom-counter-hook"
            sx={{ color: "black" }}
          />
          <NavItem
            label="custom name hook"
            to="custom-name-hook"
            sx={{ color: "black" }}
          />
          <NavItem
            label="memoization"
            to="memoization"
            sx={{ color: "black" }}
          />
          <NavItem
            label="form"
            to="form"
            sx={{ color: "black" }}
          />
          <NavItem label="context" to="context" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default Sandbox;
