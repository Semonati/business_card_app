import React, { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MoreButton from "./MoreButton";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProviders";

const RightNavBar = () => {
  const { isDark, toggelDarkMode } = useTheme();
  const { user } = useUser();

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />

        <IconButton sx={{ marginLeft: 1 }} onClick={toggelDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {!user && <NotLogged />}

        {user && <Logged />}
      </Box>

      <MoreButton />
    </>
  );
};

export default RightNavBar;
