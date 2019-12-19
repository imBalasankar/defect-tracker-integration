import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import ClientCustomToolbar from "./ClientCustomToolbar";
import ClientCustomToolbarSelect from "./ClientCustomToolbarSelect";
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

const divStyle = {
  marginRight: "35px",
  marginLeft: "35px",
  marginTop: "30px"
};

const columns = [
  {
    name: "name",
    label: "Client Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "email",
    label: "Client Email",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "type",
    label: "Client Type",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "joinedDate",
    label: "Joined Date",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "contactPerson",
    label: "Contact Person",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "contactNo",
    label: "Contact No",
    options: {
      filter: true,
      sort: false
    }
  }
];

export default function ManageClient() {
  const classes = useStyles();
  const [openBackDrop, setOpenBackDrop] = React.useState(true);
  const [client, setClient] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [trackDelete, setTrackDelete] = React.useState(false);
  const [values] = React.useState({
    id: ""
  });

  useEffect(() => {
    Axios.get("http://localhost:1724/api/v1/client")
      .then(response => {
        console.log(response);
        setClient(response.data.results.listAllClient);
        setOpenBackDrop(false);
      })
      .catch(error => {
        console.log(error);
        setOpenBackDrop(false);
        setShowResult("alert alert-danger");
        setMessage("Failed to Retrive Data");
      });
  }, [trackDelete]);

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
        noMatch: client.length > 0 ? "Loading data..." : "No Records Found!"
      }
    },
    customToolbar: () => {
      return <ClientCustomToolbar />;
    },
    customToolbarSelect: () => {
      return <ClientCustomToolbarSelect onDelete={handleDelete} id={getId} />;
    },
    onRowsSelect: allRows => {
      allRows.forEach(row => {
        const dataRow = client[row.dataIndex];
        values.id = dataRow["id"];
        console.log(values.id);
      });
    }
  };

  const handleDelete = () => {
    Axios.delete(`http://localhost:1724/api/v1/client/${values.id}`)
      .then(response => {
        console.log(response);
        setShowResult("alert alert-success");
        setMessage(response.data.message);
        handleTrackDelete();
      })
      .catch(error => {
        console.log(error.response);
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
        <MUIDataTable data={client} columns={columns} options={options} />
      </Container>
    </div>
  );
}
