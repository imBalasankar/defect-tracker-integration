import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import ImportIcon from "@material-ui/icons/VerticalAlignBottom";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  input: {
    display: "none"
  },
  fab: {
    marginLeft: theme.spacing(2)
  }
}));

export default function EmployeeCustomToolbar({ onCreate }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <input
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Tooltip title={"Import"} component="span">
          <Fab
            color="secondary"
            aria-label="add"
            className={classes.fab}
            size="small"
            component="span"
          >
            <ImportIcon />
          </Fab>
        </Tooltip>
      </label>
      <Tooltip title={"Add"}>
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          size="small"
          component={Link}
          to={"/company-administration/manage-employee/add-employee"}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </React.Fragment>
  );
}
