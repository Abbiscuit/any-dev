import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  card: {
    width: "auto",
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      maxWidth: "500px",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  title: {
    color: "#0e1e25"
  },
  button: {
    backco: "#0e1e25"
  }
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            variant="h5"
            component="h1"
            gutterBottom
          >
            Page Not Found
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            disableElevation
            className={classes.button}
            component={Link}
            to="/"
          >
            <ArrowBackIosIcon className={classes.icon} />
            Back to Our Site
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NotFound;
