import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import EmployeeCustomToolbar from "./EmployeeCustomToolbar";
import EmployeeCustomToolbarSelect from "./EmployeeCustomToolbarSelect";
import Axios from "axios";
import React, { useEffect } from "react";

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
    name: "firstName",
    label: "First Name",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "lastName",
    label: "Last Name",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "username",
    label: "Username",
    options: {
      filter: true,
      sort: true
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
    name: "email",
    label: "Email Id",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "active",
    label: "Active",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "bench",
    label: "Bench",
    options: {
      filter: true,
      sort: false
    }
  }
];

export default function ManageEmployee() {
  const classes = useStyles();
  const [openBackDrop, setOpenBackDrop] = React.useState(true);
  const [employee, setEmployee] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [trackAdd, setTrackAdd] = React.useState(false);
  const [trackEdit, setTrackEdit] = React.useState(false);
  const [trackDelete, setTrackDelete] = React.useState(false);
  const [values] = React.useState({
    id: ""
  });

  useEffect(() => {
    Axios.get("http://localhost:1724/api/v1/employee")
      .then(response => {
        console.log(response);
        setEmployee(response.data.results.listAllEmployee);
        setOpenBackDrop(false);
      })
      .catch(error => {
        console.log(error);
        setOpenBackDrop(false);
        setShowResult("alert alert-danger");
        setMessage("Failed to Retrive Data");
      });
  }, [trackDelete, trackAdd, trackEdit]);

  const handleTrackAdd = () => {
    setTrackAdd(!trackAdd);
  };

  const handleTrackEdit = () => {
    setTrackEdit(!trackEdit);
  };

  const handleTrackDelete = () => {
    setTrackDelete(!trackDelete);
  };

  const getId = () => {
    return values.id;
  };

  const options = {
    filterType: "dropdown",
    selectableRows: "single",
    selectableRowsOnClick: true,
    responsive: "scrollMaxHeight",
    textLabels: {
      body: {
        noMatch: employee.length > 0 ? "Loading data..." : "No Records Found!"
      }
    },
    customToolbar: () => {
      return <EmployeeCustomToolbar onCreate={handleTrackAdd} />;
    },
    customToolbarSelect: () => {
      return (
        <EmployeeCustomToolbarSelect
          onDelete={handleDelete}
          onEdit={handleTrackEdit}
          id={getId}
        />
      );
    },
    onRowsSelect: allRows => {
      allRows.forEach(row => {
        const dataRow = employee[row.dataIndex];
        values.id = dataRow["id"];
        console.log(values.id);
      });
    }
  };

  const handleDelete = () => {
    Axios.delete(`http://localhost:1724/api/v1/employee/${values.id}`)
      .then(response => {
        console.log(response);
        setShowResult("alert alert-success");
        setMessage(response.data.message);
        handleTrackDelete();
      })
      .catch(error => {
        console.log(error);
        setShowResult("alert alert-danger");
        setMessage(
          error.response ? error.response.data.message : "Failed to Delete!"
        );
        handleTrackDelete();
      });
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
        <MUIDataTable data={employee} columns={columns} options={options} />
      </Container>
    </div>
  );
}
