import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
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
    label: "Defect Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "name",
    label: "Defect Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "assignedToName",
    label: "Assigned To",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "assignedByName",
    label: "Assigned By",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "createdByName",
    label: "Created By",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "updatedByName",
    label: "Updated By",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "statusName",
    label: "Status",
    options: {
      filter: true,
      sort: false
    }
  }
];

export default function ManageLog() {
  const classes = useStyles();
  const [defectLog, setDefectLog] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    Axios.get("http://localhost:8087/api/v1/defect-log")
      .then(response => {
        console.log(response);
        setDefectLog(response.data.results.listAllDefectLog);
      })
      .catch(error => {
        console.log(error);
        setShowResult("alert alert-danger");
        setMessage("Failed to Retrive Data");
      });
  }, []);

  const options = {
    filterType: "dropdown",
    selectableRows: "none",
    responsive: "scrollMaxHeight",
    textLabels: {
      body: {
        noMatch: defectLog.length > 0 ? "Loading data..." : "No Records Found!"
      }
    }
  };

  return (
    <div>
      <div style={divStyle} className={showResult} role="alert">
        {message}
      </div>
      <Container className={classes.container}>
        <MUIDataTable data={defectLog} columns={columns} options={options} />
      </Container>
    </div>
  );
}
