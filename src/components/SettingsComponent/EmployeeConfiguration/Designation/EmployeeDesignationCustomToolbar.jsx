import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddEmployeeDesignation from "./AddEmployeeDesignationForm";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  fab: {
    marginLeft: theme.spacing(1)
  }
}));

export default function EmployeeDesignationCustomToolbar({ onCreate }) {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleAddOpen = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
    onCreate();
  };

  return (
    <React.Fragment>
      <Tooltip title={"Add"}>
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          size="small"
          onClick={handleAddOpen}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Dialog
        open={openAdd}
        onClose={handleAddClose}
        aria-labelledby="add-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="add-project-title">Add Designation</DialogTitle>
        <Divider />
        <DialogContent>
          <AddEmployeeDesignation onFinish={handleAddClose} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
