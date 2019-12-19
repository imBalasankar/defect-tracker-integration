import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import Axios from "axios";
import { useLocation } from "react-router";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  paper: {
    color: theme.palette.text.secondary,
    borderRadius: "4px",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    marginTop: theme.spacing(5),
    margin: theme.spacing(3),
    padding: theme.spacing(5)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  },
  descField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "363px"
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px",
    textAlign: "left"
  },
  buttonUpload: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2.5),
    marginLeft: theme.spacing(1),
    width: "230px"
  },
  input: {
    display: "none"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width: "120px"
  },
  dateField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  }
}));

const divStyle = {
  marginRight: "50px",
  marginLeft: "50px",
  marginTop: "20px"
};

export default function EditClientForm() {
  window.onbeforeunload = function() {
    return false;
  };
  const classes = useStyles();
  let location = useLocation();
  console.log("Testing ID: " + location.edit.id());
  let id = location.edit.id();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const [joinDate, setJoinDate] = React.useState(new Date());
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    type: "",
    joinedDate: joinDate,
    contactPerson: "",
    contactNo: ""
  });
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    Axios.get(`http://localhost:1724/api/v1/client/${id}`)
      .then(response => {
        console.log(response);
        let result = response.data.results.listClient;
        updateData(result);
      })
      .catch(error => {
        console.log(error);
        setShowResult("alert alert-danger");
        setMessage("Failed to Retrive Data!!");
      });
    // eslint-disable-next-line
  }, [id]);

  const updateData = data => {
    handleJoinDateChange(data.joinedDate);
    setValues({
      id: data.id,
      name: data.name,
      email: data.email,
      type: data.type,
      joinedDate: joinDate,
      contactPerson: data.contactPerson,
      contactNo: data.contactNo
    });
  };

  const handleJoinDateChange = date => {
    setJoinDate(date);
    setValues({ ...values, joinedDate: date });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    console.log(values);
  };

  const handleSubmit = event => {
    event.preventDefault();
    Axios.put(`http://localhost:1724/api/v1/client`, values)
      .then(response => {
        console.log(response);
        setShowResult("alert alert-success");
        setMessage(response.data.message);
        console.log(values);
      })
      .catch(error => {
        console.log(error);
        setShowResult("alert alert-danger");
        setMessage("Failed to Update!!");
      });
  };

  return (
    <div>
      <div style={divStyle} className={showResult} role="alert">
        {message}
      </div>
      <Container className={classes.container}>
        <Paper
          className={classes.paper}
          components={{
            Container: props => <Paper {...props} elevation={4} />
          }}
        >
          <form
            className={classes.container}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Grid container direction="column" alignItems="center">
              <div>
                <TextField
                  required
                  id="client-name"
                  label="Client Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  type="email"
                  id="client-email"
                  label="Client Email"
                  className={classes.textField}
                  value={values.email}
                  onChange={handleChange("email")}
                  margin="normal"
                  variant="outlined"
                />
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="clientType">
                    Client Type
                  </InputLabel>
                  <Select
                    id="clientType"
                    labelWidth={labelWidth}
                    value={values.type}
                    onChange={handleChange("type")}
                  >
                    <MenuItem value="Private">Private</MenuItem>
                    <MenuItem value="Public">Public</MenuItem>
                    <MenuItem value="NGO">NGO</MenuItem>
                    <MenuItem value="Individual">Individual</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Joined Date"
                    className={classes.dateField}
                    value={joinDate}
                    onChange={handleJoinDateChange}
                    format="MM/dd/yyyy"
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  required
                  id="contact-person"
                  label="Contact Person"
                  className={classes.textField}
                  value={values.contactPerson}
                  onChange={handleChange("contactPerson")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  type="number"
                  id="contact-no"
                  label="Contact No"
                  className={classes.textField}
                  value={values.contactNo}
                  onChange={handleChange("contactNo")}
                  margin="normal"
                  variant="outlined"
                />
              </div>
            </Grid>
            <Grid container justify="flex-end">
              <Button
                className={classes.button}
                color="primary"
                component={Link}
                to={"/company-administration/manage-client"}
              >
                Back
              </Button>
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Update
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
