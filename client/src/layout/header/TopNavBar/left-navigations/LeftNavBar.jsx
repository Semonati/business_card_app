import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import ROUTES from "../../../../routes/routerModel";
import { useUser } from "../../../../users/providers/UserProviders";
import NavItem from "../../../../routes/components/NavItem";

const LeftNavBar = () => {
  const { user } = useUser();

  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem to={ROUTES.ABOUT} label="About" />
        {user && (
          <NavItem to={`${ROUTES.FAV_CRDES}/${user._id}`} label="Fav Cards" />
        )}
        {user && user.isBusiness && (
          <NavItem to={ROUTES.MY_CARDS} label="My Cards" />
        )}
        {user && user.isAdmin && (
          <NavItem to={ROUTES.SANDBOX} label="Sandbox" />
        )}
        {user && user.isAdmin && (
          <NavItem to={ROUTES.USERS_CRM} label="Users CRM" />
        )}
      </Box>
    </Box>
  );
};

export default LeftNavBar;
