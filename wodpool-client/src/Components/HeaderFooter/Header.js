import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import { NONCE, TOKEN } from "../AuthenticationContext/AuthenticationContext";
import Cookies from "js-cookie";

//import assets
import "./Header.css";
import wpbadge from "../../assets/WhiteBadge.png";

// Style
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(0,0,0,.8)",
    boxShadow: "0px 5px 6px rgba(0,0,0,0.5)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuItem: {
    textDecoration: "none",
    color: "black",
  },
  wordmark: {
    height: "2em",
    width: "auto",
    paddingTop: ".5em",
  },
  menuBarItem:{
    padding:"0 1em",
    textDecoration:"none",
    color:"white"
  }
}));

function Header() {
  // Set Const
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Handle Event Changes
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    //removes headers
    Cookies.remove(TOKEN);
    Cookies.remove(NONCE);
    // ensure all state has been cleared from the session
    window.location.reload();
  };
  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={wpbadge} className={classes.wordmark} alt="wodpool" />
          </Typography>
          <Link className={classes.menuBarItem} to="/">Home</Link>
          <Link className={classes.menuBarItem} to="/profile">Profile</Link>
          <Link className={classes.menuBarItem} to="/faq">Info</Link>

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
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
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link className={classes.menuItem} to="/profile">
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a className={classes.menuItem} href="https://donttalkaboutwodpool.ca/contact-us">
                    Submit a Bug
                  </a>
                </MenuItem>
                <MenuItem onClick={handleLogout} className={classes.menuItem}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
