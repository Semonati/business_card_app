import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ROUTES from "../../../../routes/routerModel";
import NavBarLink from "../../../../routes/components/NavBarLink";
import { useUser } from "../../../../users/providers/UserProviders";


const MenuBar = ({ isMenuOpen, anchorEl, onCloseMenu }) => {
  const {user} = useUser();

  return (
    <MuiMenu
      open={isMenuOpen}
      onClose={onCloseMenu}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {!user && (
        <Box>
          <NavBarLink to={ROUTES.LOGIN}>
            <MenuItem
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={onCloseMenu}
            >
              Login
            </MenuItem>
          </NavBarLink>
          <NavBarLink to={ROUTES.ABOUT}>
            <Button color="inherit">
              <Typography>About</Typography>
            </Button>
          </NavBarLink>
          <NavBarLink to={ROUTES.SIGNUP}>
            <MenuItem
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={onCloseMenu}
            >
              SignUp
            </MenuItem>
          </NavBarLink>
        </Box>
      )}

      {user && (
        <Box>
          <NavBarLink to={ROUTES.LOGOUT}>
            <MenuItem>Logout</MenuItem>
          </NavBarLink>
          <NavBarLink to={ROUTES.USER_PROFILE}>
            <MenuItem onClick={onCloseMenu}>Profile</MenuItem>
          </NavBarLink>
          <NavBarLink to={ROUTES.EDIT_USER}>
            <MenuItem onClick={onCloseMenu}>Edit account</MenuItem>
          </NavBarLink>
        </Box>
      )}
    </MuiMenu>
  );
};

export default MenuBar;
