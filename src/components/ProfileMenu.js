import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { signOut } from "../firebase/firebase.utils";

const ProfileMenu = ({ anchorEl, handleClick, handleClose, currentUser }) => {
  return (
    <React.Fragment>
      <IconButton
        onClick={handleClick}
        aria-controls="profile-menu"
        aria-haspopup="true"
      >
        <AccountBoxIcon style={{ color: "#fff" }} />
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          to={`/profile/${currentUser.displayName}`}
        >
          Profile
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            signOut();
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default ProfileMenu;
