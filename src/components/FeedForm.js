import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";

const styles = {
  form: {
    padding: "0 10px",
    marginTop: 10
  }
};

const FeedForm = ({ classes }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(message, "を送信しました！");
    setMessage("");
  };

  const handleChange = e => {
    setMessage(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        onChange={handleChange}
        label="Message"
        value={message}
        fullWidth
        // autoFocus
      />
    </form>
  );
};

export default withStyles(styles)(FeedForm);
