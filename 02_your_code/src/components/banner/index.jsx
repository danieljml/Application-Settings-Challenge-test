import { useState } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useStyles } from "./styles";

const Banner = ({ message }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const formattedMessage = message.replace(/<\/?[^>]+(>|$)/g, "");
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      className={classes.snackbar}
    >
      <Alert onClose={handleClose} severity="info">
        <div dangerouslySetInnerHTML={{ __html: formattedMessage }} />
      </Alert>
    </Snackbar>
  );
};

export default Banner;
