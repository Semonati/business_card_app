import React from "react";
import { string, object } from "prop-types";
import NavBarLink from "./NavBarLink";
import { Button, Typography } from "@mui/material";

const NavItem = ({ to, label, sx }) => {
  return (
    <NavBarLink to={to} sx={sx}>
      <Button color="inherit">
        <Typography>{label}</Typography>
      </Button>
    </NavBarLink>
  );
};

NavItem.propTypes = {
  to: string.isRequired,
  label: string.isRequired,
  sx: object.isRequired,
};

NavItem.defaultProps = {
  sx: { color: "#fff", textDecorationLine: "none" },
};
export default NavItem;
