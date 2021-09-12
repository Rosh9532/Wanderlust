import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "./style.css";
import logo from "../../assets/logo.png";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Link } from "react-router-dom";

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
    display: "inline-flex",
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
  },
}));

/**
 * @author
 * @function Navbar
 **/

export const Navbar = (props) => {
  const classes = useStyles();
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
              <label class="logo">
                <img src={logo} alt="" />
              </label>
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Wanderlust
          </Typography>
          <div className={classes.toolbarButtons}>
            <Link to="/songlist">
              <Typography variant="h6" className={classes.title}>
                Liked
              </Typography>
            </Link>
            <Link to="/listened">
              <Typography variant="h6" className={classes.title}>
                Listened
              </Typography>
            </Link>
            <Link to="/">
              <Button color="inherit">
                <AddCircleOutlineIcon />
                ADD
              </Button>
            </Link>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
