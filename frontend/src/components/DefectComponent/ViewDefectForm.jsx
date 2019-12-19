import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  }
}));

const divStyle = {
  marginRight: "35px",
  marginLeft: "35px",
  marginTop: "30px"
};

export default function ViewDefectForm({ id }) {
  const classes = useStyles();
  const [defect, setDefect] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    Axios.get(`http://localhost:8087/api/v1/defect/${id()}`)
      .then(response => {
        console.log(response);
        setDefect(response.data.results.listDefect);
      })
      .catch(error => {
        console.log(error);
        setShowResult("alert alert-danger");
        setMessage("Failed to Retrive Data!!");
      });
  }, [id]);

  return (
    <div>
      <div style={divStyle} className={showResult} role="alert">
        {message}
      </div>
      <style>
        {`
            table, td {
                height: 40px;
            }
        `}
      </style>
      <form className={classes.container} autoComplete="off">
        <Grid container direction="column">
          <table>
            <tr>
              <td>Defect Id</td>
              <td>{defect.id}</td>
            </tr>
            <Divider />
            <tr>
              <td>Defect Name</td>
              <td>{defect.name}</td>
            </tr>
            <Divider />
            <tr>
              <td>Project</td>
              <td>{defect.projectName}</td>
            </tr>
            <Divider />
            <tr>
              <td>Module</td>
              <td>{defect.moduleName}</td>
            </tr>
            <Divider />
            <tr>
              <td>Sub Module</td>
              <td>{defect.submoduleName}</td>
            </tr>
            <Divider />
            <tr>
              <td>Defect Type</td>
              <td>{defect.typeName}</td>
            </tr>
            <Divider />
            <tr>
              <td>Defect Priority</td>
              <td>{defect.priorityName}</td>
            </tr>
            <Divider />
            <tr>
              <td>Defect Severity</td>
              <td>{defect.severityName}</td>
            </tr>
            <Divider />
            <tr>
              <td>Assigned To</td>
              <td>{defect.assignedToName}</td>
            </tr>
            <Divider />
            <tr>
              <td>Assigned By</td>
              <td>{defect.assignedByName}</td>
            </tr>
            <Divider />
            <tr>
              <td>Found In</td>
              <td>{defect.foundIn}</td>
            </tr>
            <Divider />
            <tr>
              <td>Fixed In</td>
              <td>{defect.fixedIn}</td>
            </tr>
            <Divider />
            <tr>
              <td>Defect Status</td>
              <td>{defect.statusId}</td>
            </tr>
            <Divider />
            <tr>
              <td>Defect Description</td>
              <td>{defect.description}</td>
            </tr>
            <Divider />
            <tr>
              <td>Created By</td>
              <td>{defect.createdByName}</td>
            </tr>
            <Divider />
            <tr>
              <td>Created On</td>
              <td>{defect.createdOn}</td>
            </tr>
            <Divider />
            <tr>
              <td>Updated By</td>
              <td>{defect.updatedByName}</td>
            </tr>
            <Divider />
            <tr>
              <td>Updated On</td>
              <td>{defect.updatedOn}</td>
            </tr>
            <Divider />
            <tr>
              <td>Attachment</td>
              <td>
                <a
                  href={defect.attachment}
                  data-lightbox="image-1"
                  data-title="Attachment"
                >
                  Click to View
                </a>
              </td>
            </tr>
          </table>
        </Grid>
      </form>
    </div>
  );
}
