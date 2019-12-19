import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import ModuleAllocationCustomToolbarSelect from "./ModuleAllocationCustomToolbarSelect";
import ModuleAllocationCustomToolbar from "./ModuleAllocationCustomToolbar";
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

const columns = [
  {
    name: "id",
    label: "No.",
    options: {
      filter: true,
      sort: true,
      display: false
    }
  },
  {
    name: "id",
    label: "ID",
    options: {
      display: false,
      filter: true,
      sort: true
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
    name: "moduleName",
    label: "Module Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "subModuleName",
    label: "Sub Module Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "allocateDate",
    label: "Allocated Date",
    options: {
      filter: true,
      sort: false
    }
  }
];
const divStyle = {
  marginRight: "35px",
  marginLeft: "35px",
  marginTop: "30px"
};
export default function ManageModuleAllocation() {
  const classes = useStyles();
  const [openBackDrop, setOpenBackDrop] = React.useState(true);
  const [moduleAllocation, setModuleAllocation] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [trackAdd, setTrackAdd] = React.useState(false);
  const [trackEdit, setTrackEdit] = React.useState(false);
  const [trackDelete, setTrackDelete] = React.useState(false);
  const [values] = React.useState({
    id: ""
  });
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
  useEffect(() => {
    Axios.get("http://localhost:1725/api/v1/employee_submodule")
      .then(response => {
        console.log(response);
        setModuleAllocation(response.data.results.List);
        setOpenBackDrop(false);
      })
      .catch(error => {
        console.log(error);
        setOpenBackDrop(false);
        setShowResult("alert alert-danger");
        setMessage("Failed to Retrive Data");
      });
  }, [trackDelete, trackAdd, trackEdit]);
  const options = {
    filterType: "dropdown",
    selectableRows: "single",
    selectableRowsOnClick: true,
    responsive: "scrollMaxHeight",
    textLabels: {
      body: {
        noMatch:
          moduleAllocation.length > 0 ? "Loading data..." : "No Records Found!"
      }
    },
    customToolbar: () => {
      return <ModuleAllocationCustomToolbar onCreate={handleTrackAdd} />;
    },
    customToolbarSelect: () => {
      return (
        <ModuleAllocationCustomToolbarSelect
          onDelete={handleDelete}
          onEdit={handleTrackEdit}
          id={getId}
        />
      );
    },
    onRowsSelect: allRows => {
      allRows.forEach(row => {
        const dataRow = moduleAllocation[row.dataIndex];
        values.id = dataRow["id"];
        console.log(values.id);
      });
    }
  };

  const handleDelete = () => {
    Axios.delete(`http://localhost:1725/api/v1/employee_submodule/${values.id}`)
      .then(response => {
        console.log(response);
        setShowResult("alert alert-success");
        setMessage(response.data.message);
        handleTrackDelete();
      })
      .catch(error => {
        console.log(error);
        setShowResult("alert alert-danger");
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
        <MUIDataTable
          data={moduleAllocation}
          columns={columns}
          options={options}
        />
      </Container>
    </div>
  );
}
