import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "./style.css";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth/Authstate";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  customizeToolbar: {
    height: "80px",
    backgroundColor: "white",
  },
  toolbarButtons: {
    marginLeft: "auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontSize: "40px",
    marginLeft: "-120px",
    fontFamily: "'Dancing Script', cursive",
  },
}));

/**
 * @author
 * @function Navbar
 **/

export const Navbar = (props) => {
  const classes = useStyles();
  const { isAuthenticated, logout } = useContext(AuthContext);
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.customizeToolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
            <Link to="/">
              <label className="logo">
                <img src={logo} alt="" />
              </label>
            </Link>
          </IconButton>
          <Link to="/">
            <Typography variant="h6" className={classes.title}>
              Wanderlust
            </Typography>
          </Link>
          {isAuthenticated ? (
            <div className={classes.toolbarButtons}>
              <Link to="/saved">
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ width: "150px" }}
                >
                  HOLIDAY LIST
                </Button>
              </Link>
              {/* <Link to="/visited">
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ width: "150px" }}
                >
                  VISITED
                </Button>
              </Link> */}
              <Link to="/">
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ width: "150px", textDecoration: "none" }}
                  onClick={() => {
                    logout();
                  }}
                >
                  LOGOUT
                </Button>
              </Link>
            </div>
          ) : (
            <div className={classes.toolbarButtons}>
              <Link to="/signin">
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ width: "150px", textDecoration: "none" }}
                >
                  LOGIN
                </Button>
              </Link>
            </div>
          )}
        </Toolbar>
        {/* <div className={classes.toolbarButtons}>
            <Link to="/watchlist">
              <Button
                variant="contained"
                color="secondary"
                style={{ width: "150px" }}
              >
                HOLIDAY LIST
              </Button>
            </Link>
            <Link to="/visited">
              <Button
                variant="contained"
                color="secondary"
                style={{ width: "150px" }}
              >
                VISITED
              </Button>
            </Link>

            <Link to="/visited">
              <Button
                variant="contained"
                color="secondary"
                style={{ width: "150px", textDecoration: "none" }}
              >
                LOGIN
              </Button>
            </Link>
          </div>
        </Toolbar> */}
      </AppBar>
    </div>
  );
};
