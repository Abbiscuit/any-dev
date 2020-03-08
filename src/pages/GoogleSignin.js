import React from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { signInWithGoogle } from "../firebase/firebase.utils";

const useStyles = makeStyles(theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),

    [theme.breakpoints.up("sm")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: theme.spacing(8)
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  link: {
    color: "rgb(85, 26, 139)"
  }
}));

const GoogleSignin = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Social Login</Typography>
        <Button
          variant="outlined"
          type="submit"
          fullWidth
          color="primary"
          className={classes.submit}
          onClick={signInWithGoogle}
        >
          Sign In with Google
        </Button>
        <Link className={classes.link} to="/login">
          Email & Password Login
        </Link>
      </Paper>
    </main>
  );
};

export default GoogleSignin;
