import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width: "120px"
  }
}));
const divStyle = {
  marginRight: "22px",
  marginTop: "10px"
};
export default function AddProjectAllocationForm({ id, onFinish }) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    projectId: "",
    employeeId: id(),
    roleId: ""
  });
  const [projects, setProjects] = React.useState([]);
  const [roles, setRoles] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [hasError, setHasError] = React.useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clearValues = () => {
    setValues({
      projectId: "",
      employeeId: "",
      roleId: ""
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:1725/api/v1/project")
      .then(response => {
        console.log(response);
        setProjects(response.data.results.List);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:1725/api/v1/role")
      .then(response => {
        console.log(response);
        setRoles(response.data.results.List);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    if (values.projectId !== "" && values.roleId !== "") {
      Axios.post(`http://localhost:1725/api/v1/employee_project`, values)
        .then(response => {
          console.log(response);
          setShowResult("alert alert-success");
          setMessage(response.data.message);
          clearValues();
        })
        .catch(error => {
          console.log(error);
          setShowResult("alert alert-danger");
          setMessage(
            error.response ? error.response.data.message : "Failed to Save!!"
          );
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
      <form
        className={classes.container}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container justify="flex-start">
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="project">Select Project</InputLabel>

            <Select
              id="project-name"
              value={values.projectId}
              onChange={handleChange("projectId")}
            >
              {projects.map((el, i) => (
                <MenuItem key={i} value={el.id}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
            {hasError && <FormHelperText>This is required!</FormHelperText>}
          </FormControl>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="role">Select Role</InputLabel>

            <Select
              id="role-name"
              value={values.roleId}
              onChange={handleChange("roleId")}
            >
              {roles.map((el, i) => (
                <MenuItem key={i} value={el.id}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
            {hasError && <FormHelperText>This is required!</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid container justify="flex-end">
          <Button
            color="primary"
            size="large"
            className={classes.button}
            onClick={onFinish}
          >
            Close
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Allocate
          </Button>
        </Grid>
      </form>
    </div>
  );
}
