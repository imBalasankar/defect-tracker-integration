import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
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

export default function ViewEmployeeForm({ id }) {
  const classes = useStyles();
  const [employee, setEmployee] = React.useState([]);
  const [showResult, setShowResult] = React.useState("");
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    Axios.get(`http://localhost:1724/api/v1/employee/${id()}`)
      .then(response => {
        console.log(response);
        setEmployee(response.data.results.listEmployee);
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
              <td>Employee Id</td>
              <td>{employee.id}</td>
            </tr>
            <Divider />
            <tr>
              <td>First Name</td>
              <td>{employee.firstName}</td>
            </tr>
            <Divider />
            <tr>
              <td>Last Name</td>
              <td>{employee.lastName}</td>
            </tr>
            <Divider />
            <tr>
              <td>Date of Birth</td>
              <td>{employee.dateOfBirth}</td>
            </tr>
            <Divider />
            <tr>
              <td>Designation</td>
              <td>{employee.designationName}</td>
            </tr>
            <Divider />
            <tr>
              <td>Address</td>
              <td>{employee.address}</td>
            </tr>
            <Divider />
            <tr>
              <td>Phone Number</td>
              <td>{employee.phoneNumber}</td>
            </tr>
            <Divider />
            <tr>
              <td>Email</td>
              <td>{employee.email}</td>
            </tr>
            <Divider />
            <tr>
              <td>Bench</td>
              <td>{employee.bench}</td>
            </tr>
            <Divider />
            <tr>
              <td>Joined Date</td>
              <td>{employee.joinDate}</td>
            </tr>
            <Divider />
            <tr>
              <td>Username</td>
              <td>{employee.username}</td>
            </tr>
            <Divider />
            <tr>
              <td>Active</td>
              <td>{employee.active}</td>
            </tr>
            <Divider />
            <tr>
              <td>Left Date</td>
              <td>{employee.leaveDate}</td>
            </tr>
            <Divider />
            <tr>
              <td>Created On</td>
              <td>{employee.createdOn}</td>
            </tr>
            <Divider />
            <tr>
              <td>Updated On</td>
              <td>{employee.updatedOn}</td>
            </tr>
            <Divider />
            <tr>
              <td>Photo</td>
              <td>
                <Avatar
                  alt="Employee Photo"
                  src={employee.photo}
                  className={classes.bigAvatar}
                />
              </td>
            </tr>
          </table>
        </Grid>
      </form>
    </div>
  );
}
