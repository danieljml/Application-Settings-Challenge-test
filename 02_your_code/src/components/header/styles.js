import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  logo: { width: "70px", height: "100%" },
  appBar: {
    background: "black",
    marginBottom: 20,
    borderRadius: 10
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginleft: theme.spacing(2),
    paddingRight: 0
  },
  title: {
    flexGrow: 1
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "black",
    color: "white",
    borderRadius: 10,
    padding: "10px 25px",
    fontSize: "1.1rem",
    height: 50
  },
  header__navbarList: {
    display: "flex",
    columnGap: 40,
    margin: 0
  },
  header__navbarItem: {
    color: "white",
    borderBottom: "2px solid transparent",
    "&.active": {
      paddingBottom: 5,
      borderBottom: "2px solid white"
    }
  },
  mobile: {
    color: "black"
  },
  mobileMenu: {
    "@media screen and (min-width: 701px)": {
      display: "none",
      margin: 0
    }
  },
  menuIcon: {
    margin: 0
  }
}));
