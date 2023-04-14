import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./styles.js";
import { useTranslation } from "react-i18next";

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenuItems = () => {
    return routes.map((route) => (
      <MenuItem key={route.path} onClick={handleMenuClose}>
        <NavLink
          to={route.path}
          exact="true"
          className={({ isActive }) =>
            isActive ? `${classes.mobile} active` : classes.mobile
          }
        >
          {route.title}
        </NavLink>
      </MenuItem>
    ));
  };

  const routes = [{ path: "/", title: t("headerSettingsTitle") }];

  const renderMobileMenu = () => {
    return (
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        className={classes.mobileMenu}
      >
        {renderMenuItems()}
      </Menu>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.header}>
          <div>
            <img
              className={classes.logo}
              src="https://www.edunext.co/wp-content/uploads/2022/10/Logos-eduNEXT-01-slim.png"
              alt=""
            />
          </div>
          {isMobile ? (
            <>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon className={classes.menuIcon} />
              </IconButton>
              {renderMobileMenu()}
            </>
          ) : (
            <Box component="nav" className={classes.header__navbarList}>
              {routes.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  exact="true"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.header__navbarItem} active`
                      : classes.header__navbarItem
                  }
                >
                  {route.title}
                </NavLink>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
