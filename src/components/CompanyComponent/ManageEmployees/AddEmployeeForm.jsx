import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
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

export default function AddEmployeeForm() {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const [designations, setDesignations] = React.useState([]);
  const [upload, setUpload] = React.useState(false);
  const [dobDate, setDobDate] = React.useState(new Date());
  const [joinDate, setJoinDate] = React.useState(new Date());
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    dateOfBirth: dobDate,
    designationId: "",
    address: "",
    phoneNumber: "",
    email: "",
    bench: "",
    photo: "",
    active: "Yes",
    joinDate: joinDate,
    availability: 100,
    subModuleAvailability: 100,
    leaveDate: null,
    remarks: null,
    username: "",
    password: ""
  });
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [hasError, setHasError] = React.useState(false);

  useEffect(() => {
    Axios.get("http://localhost:1724/api/v1/designation")
      .then(response => {
        console.log(response);
        setDesignations(response.data.results.listAllDesignation);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDobDateChange = date => {
    setDobDate(date);
    setValues({ ...values, dateOfBirth: date });
  };

  const handleJoinDateChange = date => {
    setJoinDate(date);
    setValues({ ...values, joinDate: date });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    console.log(values);
  };

  const clearValues = () => {
    setDobDate(new Date());
    setJoinDate(new Date());
    setValues({
      firstName: "",
      lastName: "",
      dateOfBirth: dobDate,
      designationId: "",
      address: "",
      phoneNumber: "",
      email: "",
      bench: "",
      active: "Yes",
      joinDate: joinDate,
      availability: 100,
      subModuleAvailability: 100,
      leaveDate: null,
      remarks: null,
      username: "",
      password: ""
    });
  };

  const encodeImageFileAsURL = e => {
    setUpload(false);
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      values.photo = reader.result;
      setUpload(true);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(values);
    if (values.designationId !== "" && values.bench !== "") {
      Axios.post(`http://localhost:1724/api/v1/employee`, values)
        .then(response => {
          console.log(response);
          setShowResult("alert alert-success");
          setMessage(response.data.message);
          clearValues();
          console.log(values);
        })
        .catch(error => {
          console.log(error);
          setShowResult("alert alert-danger");
          setMessage("Failed to Save!!");
        });
    } else {
      setHasError(true);
    }
  };

  return (
    <div>
      <div style={divStyle} className={showResult} role="alert">
        {message}
      </div>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
          <form
            className={classes.container}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Grid container direction="column" alignItems="center">
              <div>
                <TextField
                  required
                  id="first-name"
                  label="First Name"
                  className={classes.textField}
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="last-name"
                  label="Last Name"
                  className={classes.textField}
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="email"
                  label="Email"
                  className={classes.textField}
                  value={values.email}
                  onChange={handleChange("email")}
                  margin="normal"
                  variant="outlined"
                  type="email"
                />
              </div>
              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-of-birth"
                    label="Date Of Birth"
                    className={classes.dateField}
                    value={dobDate}
                    onChange={handleDobDateChange}
                    format="yyyy-MM-dd"
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  required
                  type="number"
                  id="mobile-number"
                  label="Mobile Number"
                  className={classes.textField}
                  value={values.phoneNumber}
                  onChange={handleChange("phoneNumber")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="address"
                  label="Address"
                  multiline
                  className={classes.textField}
                  value={values.address}
                  onChange={handleChange("address")}
                  margin="normal"
                  variant="outlined"
                />
              </div>

              <div>
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="bench">
                    Designation
                  </InputLabel>
                  <Select
                    id="bench"
                    labelWidth={labelWidth}
                    value={values.designationId}
                    onChange={handleChange("designationId")}
                  >
                    {designations.map((designation, i) => (
                      <MenuItem key={i} value={designation.id}>
                        {designation.designationName}
                        {console.log(designation.designationName)}
                      </MenuItem>
                    ))}
                  </Select>
                  {hasError && (
                    <FormHelperText>This is required!</FormHelperText>
                  )}
                </FormControl>

                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="bench">
                    Bench
                  </InputLabel>
                  <Select
                    id="bench"
                    labelWidth={labelWidth}
                    value={values.bench}
                    onChange={handleChange("bench")}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                  {hasError && (
                    <FormHelperText>This is required!</FormHelperText>
                  )}
                </FormControl>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  onChange={e => encodeImageFileAsURL(e)}
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="outlined"
                    component="span"
                    className={classes.buttonUpload}
                  >
                    {upload ? "Uploaded" : "Upload Employee Photo"}
                  </Button>
                </label>
              </div>

              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="start-date"
                    label="Joined Date"
                    className={classes.dateField}
                    value={joinDate}
                    onChange={handleJoinDateChange}
                    format="yyyy-MM-dd"
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  required
                  id="user-name"
                  label="Username"
                  className={classes.textField}
                  value={values.username}
                  onChange={handleChange("username")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="password"
                  label="Password"
                  className={classes.textField}
                  value={values.password}
                  onChange={handleChange("password")}
                  margin="normal"
                  variant="outlined"
                  type="password"
                />
              </div>
            </Grid>
            <Grid container justify="flex-end">
              <Button
                className={classes.button}
                color="primary"
                component={Link}
                to={"/company-administration/manage-employee"}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Add
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
