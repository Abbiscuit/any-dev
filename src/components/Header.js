import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
// import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  avatar: {
    color: "#fff"
  }
}));

const Header = ({ currentUser }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            AnyDev
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {currentUser ? (
            <ProfileMenu
              anchorEl={anchorEl}
              handleClick={handleClick}
              handleClose={handleClose}
              currentUser={currentUser}
            />
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
