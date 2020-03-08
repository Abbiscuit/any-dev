import React from "react";
import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    marginTop: theme.spacing(1),
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

const FeedDetail = ({ feedData }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {feedData.map(({ id, displayName, imgUrl, message }) => {
        return (
          <React.Fragment key={id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={displayName} src={imgUrl} />
              </ListItemAvatar>
              <ListItemText
                primary={displayName}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {message}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default FeedDetail;
