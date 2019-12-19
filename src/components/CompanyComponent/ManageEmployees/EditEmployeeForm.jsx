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
import { useLocation } from "react-router";
import Axios from "axios";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
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

export default function EditEmployeeForm() {
  window.onbeforeunload = function() {
    return false;
  };
  const classes = useStyles();
  let location = useLocation();
  console.log("Testing ID: " + location.edit.id());
  let id = location.edit.id();
  const inputLabel = React.useRef(null);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const [dobDate, setDobDate] = React.useState(new Date());
  const [joinDate, setJoinDate] = React.useState(new Date());
  const [leaveDate, setleaveDate] = React.useState(null);
  const [upload, setUpload] = React.useState(false);
  const [designations, setDesignations] = React.useState([]);
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    designationId: "",
    address: "",
    phoneNumber: "",
    email: "",
    bench: "",
    photo: "",
    active: "",
    joinDate: "",
    leaveDate: "",
    availability: "",
    subModuleAvailability: "",
    remarks: "",
    username: "",
    password: "",
    createdOn: ""
  });

  const handleDobDateChange = date => {
    setDobDate(date);
    setValues({ ...values, dateOfBirth: date });
  };

  const handleJoinDateChange = date => {
    setJoinDate(date);
    setValues({ ...values, startDate: date });
  };

  const handleLeaveDateChange = date => {
    setleaveDate(date);
    setValues({ ...values, leaveDate: date });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    console.log(values);
  };

  useEffect(() => {
    Axios.get(`http://localhost:1724/api/v1/employee/${id}`)
      .then(response => {
        console.log(response);
        let result = response.data.results.listEmployee;
        updateData(result);
      })
      .catch(error => {
        console.log(error);
        setShowResult("alert alert-danger");
        setMessage("Failed to Retrive Data!!");
      });
    // eslint-disable-next-line
  }, [id]);

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

  const updateData = data => {
    handleDobDateChange(data.dateOfBirth);
    handleJoinDateChange(data.joinDate);
    handleLeaveDateChange(data.leaveDate != null ? data.leaveDate : null);
    setValues({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth,
      designationId: data.designationId,
      address: data.address,
      phoneNumber: data.phoneNumber,
      email: data.email,
      bench: data.bench,
      photo: data.photo,
      active: data.active,
      joinDate: joinDate,
      leaveDate: leaveDate,
      availability: data.availability,
      subModuleAvailability: data.subModuleAvailability,
      remarks: data.remarks,
      username: data.username,
      password: data.password,
      createdOn: data.createdOn
    });
  };

  const encodeImageFileAsURL = e => {
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
    Axios.put(`http://localhost:1724/api/v1/employee`, values)
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
              <div>
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="active">
                    Active
                  </InputLabel>
                  <Select
                    id="active"
                    labelWidth={labelWidth}
                    value={values.active}
                    onChange={handleChange("active")}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disabled={values.active === "Yes" ? true : false}
                    margin="normal"
                    id="leave-date"
                    label="Leave Date"
                    className={classes.dateField}
                    value={leaveDate}
                    onChange={handleLeaveDateChange}
                    format="yyyy-MM-dd"
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  disabled={values.active === "Yes" ? true : false}
                  id="remarks"
                  label="Remarks"
                  className={classes.textField}
                  value={values.remarks}
                  onChange={handleChange("remarks")}
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
                Update
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
