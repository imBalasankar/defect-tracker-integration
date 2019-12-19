import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
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

export default function AddModuleAllocationForm({ pid, eid, onFinish }) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    employeeId: eid(),
    projectId: pid(),
    moduleId: "",
    subModuleId: ""
  });
  const [modules, setModules] = React.useState([]);
  const [submodules, setSubmodules] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [selectModule, setSelectModule] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clearValues = () => {
    setValues({
      employeeId: eid(),
      projectId: pid(),
      moduleId: "",
      subModuleId: ""
    });
  };

  useEffect(() => {
    Axios.get(`http://localhost:1725/api/v1/module/byproject/${pid()}`)
      .then(response => {
        console.log(response);
        setModules(response.data.results.List);
      })
      .catch(error => {
        console.log(error);
      });
  }, [pid]);

  useEffect(() => {
    Axios.get(
      `http://localhost:1725/api/v1/submodule/bymodule/${values.moduleId}`
    )
      .then(response => {
        console.log(response);
        setSubmodules(response.data.results.List);
        setSelectModule(true);
      })
      .catch(error => {
        console.log(error);
      });
  }, [values.moduleId]);

  const handleSubmit = event => {
    event.preventDefault();
    if (values.moduleId !== "" && values.subModuleId !== "") {
      Axios.post(`http://localhost:1725/api/v1/employee_submodule`, values)
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
            <InputLabel htmlFor="project">Select Module</InputLabel>

            <Select
              id="project-name"
              value={values.moduleId}
              onChange={handleChange("moduleId")}
            >
              {modules.map((module, i) => (
                <MenuItem key={i} value={module.id}>
                  {module.name}
                </MenuItem>
              ))}
            </Select>
            {hasError && <FormHelperText>This is required!</FormHelperText>}
          </FormControl>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="role">Select Sub Module</InputLabel>

            <Select
              id="role-name"
              value={values.subModuleId}
              onChange={handleChange("subModuleId")}
            >
              {selectModule ? (
                ""
              ) : (
                <MenuItem value="">First Select One Module</MenuItem>
              )}
              {submodules.map((submodule, i) => (
                <MenuItem key={i} value={submodule.id}>
                  {submodule.name}
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
