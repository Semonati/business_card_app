import React from "react";
import Typography from "@mui/material/Typography";
import ROUTES from "../../../../routes/routerModel";
import NavBarLink from "../../../../routes/components/NavBarLink";

const Logo = () => {
  return (
    <NavBarLink to={ROUTES.ROOT} sx={{ color: "#fff" }}>
      <Typography
        variant="h4"
        sx={{
          display: { xs: "none", md: "inline-flex" },
          marginRight: 2,
          fontFamily: "fantasy",
        }}
      >
        BCard
      </Typography>
    </NavBarLink>
  );
};

export default Logo;
