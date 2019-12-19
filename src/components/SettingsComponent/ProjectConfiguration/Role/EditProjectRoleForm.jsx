import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  textField: {
    marginRight: theme.spacing(3),
    width: "250px"
  },
  input: {
    display: "none"
  },
  table: {
    minWidth: 700
  },
  buttonCustom: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2),
    width: "250px",
    height: "56px"
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


export default function EditProjectRoleForm({ id, onFinish }) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    id: "",
    name: "",
    description: ""
  });
  
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  useEffect(() => {
    Axios.get(`http://localhost:1725/api/v1/role/${id()}`)
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
  }, [id]);
  const updateData = data => {
    setValues({
      id: data.id,
      name: data.name,
      description: data.description
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    Axios.put(`http://localhost:1725/api/v1/role`, values)
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
      <form         
        className={classes.container}
        autoComplete="off"
        onSubmit={handleSubmit}>
        <Grid container justify="space-between">
          <TextField
            required
            id="role-name"
            label="Role Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="role-desc"
            label="Description"
            className={classes.textField}
            value={values.description}
            onChange={handleChange("description")}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid container justify="flex-end">
          <Button color="primary" size="large" className={classes.button} onClick={onFinish}>
            Close
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Update
          </Button>
        </Grid>
      </form>
    </div>
  );
}
