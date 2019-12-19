import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProjectEmployeeCustomToolbarSelect from "./ProjectEmployeeCustomToolbarSelect";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  container: {
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  button: {
    marginBottom: theme.spacing(1),
    width: "120px"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

const divStyle = {
  marginRight: "35px",
  marginLeft: "35px",
  marginTop: "30px"
};

const columns = [
  {
    name: "id",
    label: "ID",
    options: {
      filter: true,
      sort: true,
      display: false
    }
  },
  {
    name: "firstName",
    label: "First Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "lastName",
    label: "Last Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "designationName",
    label: "Designation",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "availability",
    label: "Availability",
    options: {
      filter: true,
      sort: false,
      customBodyRender: value => {
        return (
          <CircularProgress variant="static" value={value} color="secondary" />
        );
      }
    }
  }
];

export default function ProjectEmployee() {
  const classes = useStyles();
  const [openBackDrop, setOpenBackDrop] = React.useState(true);
  const [employees, setEmployees] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [trackAllocate, setTrackAllocate] = React.useState(false);

  const [values] = React.useState({
    id: ""
  });

  const handleTrackAllocate = () => {
    setTrackAllocate(!trackAllocate);
  };

  const getId = () => {
    return values.id;
  };

  useEffect(() => {
    Axios.get("http://localhost:1724/api/v1/employee")
      .then(response => {
        console.log(response);
        setEmployees(response.data.results.listAllEmployee);
        setOpenBackDrop(false);
      })
      .catch(error => {
        console.log(error);
        setOpenBackDrop(false);
        setShowResult("alert alert-danger");
        setMessage("Failed to Retrive Data");
      });
  }, [trackAllocate]);

  const options = {
    filterType: "dropdown",
    selectableRows: "single",
    selectableRowsOnClick: true,
    responsive: "scrollMaxHeight",
    textLabels: {
      body: {
        noMatch: employees.length > 0 ? "Loading data..." : "No Records Found!"
      }
    },

    customToolbarSelect: () => {
      return (
        <ProjectEmployeeCustomToolbarSelect
          onAllocate={handleTrackAllocate}
          id={getId}
        />
      );
    },
    onRowsSelect: allRows => {
      allRows.forEach(row => {
        const dataRow = employees[row.dataIndex];
        values.id = dataRow["id"];
        console.log(values.id);
      });
    }
  };

  return (
    <div>
      <div style={divStyle} className={showResult} role="alert">
        {message}
      </div>
      <Container className={classes.container}>
        <Backdrop className={classes.backdrop} open={openBackDrop}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Grid container justify="flex-start">
          <Button
            type="submit"
            className={classes.button}
            variant="contained"
            color="primary"
            component={Link}
            to={"/allocation/manage-project-allocation"}
          >
            Back
          </Button>
        </Grid>
        <MUIDataTable data={employees} columns={columns} options={options} />
      </Container>
    </div>
  );
}
