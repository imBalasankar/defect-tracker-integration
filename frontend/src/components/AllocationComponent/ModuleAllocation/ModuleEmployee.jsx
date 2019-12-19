import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ModuleEmployeeCustomToolbarSelect from "./ModuleEmployeeCustomToolbarSelect";
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
    name: "projectId",
    label: "PID",
    options: {
      filter: true,
      sort: true,
      display: false
    }
  },
  {
    name: "employeeId",
    label: "EID",
    options: {
      filter: true,
      sort: true,
      display: false
    }
  },
  {
    name: "employeeName",
    label: "Employee Name",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "projectName",
    label: "Project Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "roleName",
    label: "Role Of Employee",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "status",
    label: "Project Status",
    options: {
      filter: true
    }
  },
  {
    name: "subModuleAvailability",
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

export default function ModuleEmployee() {
  const classes = useStyles();
  const [openBackDrop, setOpenBackDrop] = React.useState(true);
  const [projectAllocation, setProjectAllocation] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [trackAllocate, setTrackAllocate] = React.useState(false);

  const [values] = React.useState({
    projectId: "",
    employeeId: ""
  });

  const handleTrackAllocate = () => {
    setTrackAllocate(!trackAllocate);
  };

  const getProjectId = () => {
    return values.projectId;
  };

  const getEmployeeId = () => {
    return values.employeeId;
  };

  useEffect(() => {
    Axios.get("http://localhost:1725/api/v1/employee_project")
      .then(response => {
        console.log(response);
        setProjectAllocation(response.data.results.List);
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
        noMatch:
          projectAllocation.length > 0 ? "Loading data..." : "No Records Found!"
      }
    },

    customToolbarSelect: () => {
      return (
        <ModuleEmployeeCustomToolbarSelect
          onAllocate={handleTrackAllocate}
          pid={getProjectId}
          eid={getEmployeeId}
        />
      );
    },
    onRowsSelect: allRows => {
      allRows.forEach(row => {
        const dataRow = projectAllocation[row.dataIndex];
        values.projectId = dataRow["projectId"];
        values.employeeId = dataRow["employeeId"];
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
            to={"/allocation/manage-module-allocation"}
          >
            Back
          </Button>
        </Grid>
        <MUIDataTable
          data={projectAllocation}
          columns={columns}
          options={options}
        />
      </Container>
    </div>
  );
}
