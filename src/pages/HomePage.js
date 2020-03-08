import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FeedDetail from "../components/FeeDetail";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import FeedForm from "../components/FeedForm";

const useStyles = makeStyles(theme => ({
  home: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`
  }
}));

const HomePage = ({ feedData, currentUser }) => {
  useEffect(() => {}, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      {currentUser ? (
        <React.Fragment>
          <FeedForm />
          <FeedDetail feedData={feedData} />
        </React.Fragment>
      ) : (
        <div className={classes.home}>
          <Paper className={classes.paper} elevation={1}>
            <Typography
              variant="h4"
              component="h1"
              color="inherit"
              gutterBottom
            >
              Welcome to AnyCollections
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              component={Link}
              to="/collections"
            >
              See collections
            </Button>
          </Paper>
        </div>
      )}
    </React.Fragment>
  );
};

export default HomePage;
