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
    width: "230px"
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(2),
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
    width: "230px",
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const divStyle = {
  marginRight: "50px",
  marginLeft: "50px",
  marginTop: "20px"
};

export default function EditProjectForm() {
  const classes = useStyles();
  let location = useLocation();
  console.log(location.sta.id());
  let id = location.sta.id();
  const inputLabel = React.useRef(null);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [clients, setClients] = React.useState([]);
  const [startDate1, setStartDate1] = React.useState(new Date());
  const [endDate1, setEndDate1] = React.useState(new Date());

  const [values, setValues] = React.useState({
    id: "",
    name: "",
    description: "",
    clientId: "",
    type: "",
    status: "",
    startDate: "",
    endDate: ""
  });
  const handleStartDateChange = date => {
    setStartDate1(date);
    setValues({ ...values, startDate: date });
  };
  const handleEndDateChange = date => {
    setEndDate1(date);
    setValues({ ...values, endDate: date });
  };
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  useEffect(() => {
    Axios.get(`http://localhost:1725/api/v1/project/${id}`)
      .then(response => {
        console.log(response);
        let result = response.data.results.Object;
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
    Axios.get("http://localhost:1724/api/v1/client")
      .then(response => {
        console.log("A");
        console.log(response);
        setClients(response.data.results.listAllClient);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const updateData = data => {
    handleStartDateChange(data.startDate);
    handleEndDateChange(data.endDate);
    setValues({
      id: data.id,
      name: data.name,
      description: data.description,
      type: data.type,
      status: data.status,
      startDate: startDate1,
      endDate: endDate1
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    Axios.put(`http://localhost:1725/api/v1/project`, values)
      .then(response => {
        console.log(response);
        setShowResult("alert alert-success");
        setMessage(response.data.message);
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
                  id="project-name"
                  label="Project Name"
                  value={values.name}
                  onChange={handleChange("name")}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="client-name">
                    Client Name
                  </InputLabel>
                  <Select
                    id="client-name"
                    value={values.clientId}
                    onChange={handleChange("clientId")}
                  >
                    {clients.map((client, i) => (
                      <MenuItem key={i} value={client.id}>
                        {client.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="project-status">
                    Status
                  </InputLabel>
                  <Select
                    id="project-status"
                    value={values.status}
                    onChange={handleChange("status")}
                  >
                    <MenuItem value="New">New</MenuItem>
                    <MenuItem value="Ongoing">Ongoing</MenuItem>
                    <MenuItem value="Finished">Finished</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="start-date"
                    label="Start Date"
                    value={startDate1}
                    onChange={handleStartDateChange}
                    className={classes.dateField}
                    format="yyyy-MM-dd"
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="finish-date"
                    label="Finish Date"
                    value={endDate1}
                    onChange={handleEndDateChange}
                    className={classes.dateField}
                    format="yyyy-MM-dd"
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  required
                  id="project-desc"
                  label="Description"
                  value={values.description}
                  onChange={handleChange("description")}
                  className={classes.descField}
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows="2"
                />
              </div>
            </Grid>
            <Grid container justify="flex-end">
              <Button
                className={classes.button}
                color="primary"
                component={Link}
                to={"/manage-project"}
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
