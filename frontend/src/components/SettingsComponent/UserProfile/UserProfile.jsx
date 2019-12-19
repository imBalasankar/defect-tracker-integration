import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  paper: {
    color: theme.palette.text.secondary,
    textAlign: "left",
    borderRadius: "4px",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    marginTop: theme.spacing(5),
    margin: theme.spacing(3),
    padding: theme.spacing(5)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: "925px"
  },
  buttonUpload: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    width: "230px"
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    width: "120px"
  },
  input: {
    display: "none"
  }
}));

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <Paper
        className={classes.paper}
        components={{
          Container: props => <Paper {...props} elevation={4} />
        }}
      >
        <form className={classes.container} autoComplete="off">
          <Grid container>
            <TextField
              disabled
              id="project-name"
              label="Employee Name"
              value="Balasankar Parameswaran"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              disabled
              id="project-name"
              label="Employee Email"
              value="Bals@bals.com"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              disabled
              id="project-name"
              label="Username"
              value="bals"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="project-name"
              label="Old Password"
              className={classes.textField}
              type="password"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="project-name"
              label="New Password"
              className={classes.textField}
              type="password"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="project-name"
              label="Re-enter Password"
              className={classes.textField}
              type="password"
              margin="normal"
              variant="outlined"
            />
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="outlined"
                component="span"
                className={classes.buttonUpload}
              >
                Upload Profile Photo
              </Button>
            </label>
          </Grid>
          <Grid container justify="flex-start">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Update
            </Button>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}
