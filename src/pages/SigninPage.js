import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { makeStyles, Checkbox } from "@material-ui/core";
import { auth } from "../firebase/firebase.utils";

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
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  linkOptions: {
    width: "100%",

    display: "flex",
    justifyContent: "space-around"
  },
  link: {
    display: "inline-block"
  }
}));

const SigninPage = props => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;
  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.error(err);
      });
    reset();
    console.log(formData);
  };
  const reset = () => setFormData({ email: "", password: "" });

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Sign In</Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              type="email"
              id="email"
              name="email"
              autoFocus
              autoComplete="email"
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              type="password"
              id="password"
              name="password"
              autoFocus
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember Me"
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        <Box component="div" className={classes.linkOptions}>
          <Link className={classes.link} to="/signup">
            Sign Up
          </Link>
          <Link className={classes.link} to="/login-google">
            Signin with Google
          </Link>
        </Box>
      </Paper>
    </main>
  );
};

export default SigninPage;
