import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import RedoIcon from "@material-ui/icons/Redo";
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddProjectAllocationForm from "./AddProjectAllocationForm";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  fab: {
    marginTop: "4px",
    marginBottom: "4px",
    marginRight: theme.spacing(2)
  }
}));

export default function ProjectEmployeeCustomToolbarSelect({ id, onAllocate }) {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleAddOpen = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
    onAllocate();
  };

  return (
    <div>
      <Tooltip title={"Allocate"}>
        <Fab
          color="secondary"
          aria-label="edit"
          className={classes.fab}
          size="small"
          onClick={handleAddOpen}
        >
          <RedoIcon />
        </Fab>
      </Tooltip>

      <Dialog
        open={openAdd}
        onClose={handleAddClose}
        aria-labelledby="add-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="add-project-title">Allocate Employee</DialogTitle>
        <Divider />
        <DialogContent>
          <AddProjectAllocationForm onFinish={handleAddClose} id={id} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
