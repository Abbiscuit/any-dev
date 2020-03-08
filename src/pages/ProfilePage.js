import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(8)
  },
  media: {
    height: 250
  },
  cardAction: {
    marginBottom: "10px"
  }
}));

const ProfilePage = ({ match, currentUser }) => {
  const classes = useStyles();

  const { name } = match.params;
  return (
    <Container maxWidth={"sm"}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1535&q=80"
            title={name}
          />
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              {name}
            </Typography>
            <div>
              <List>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary={currentUser.email} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <VpnKeyIcon />
                  </ListItemIcon>
                  <ListItemText primary={currentUser.uid} />
                </ListItem>
              </List>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardAction}>
          <Button
            size="small"
            component={Link}
            to="/"
            color="primary"
            variant="outlined"
          >
            Share
          </Button>
          <Button
            size="small"
            component={Link}
            to="/"
            color="primary"
            variant="outlined"
          >
            Edit
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ProfilePage;
