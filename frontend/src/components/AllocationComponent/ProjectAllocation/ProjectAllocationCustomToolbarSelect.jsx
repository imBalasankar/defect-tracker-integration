import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import UndoIcon from "@material-ui/icons/Undo";
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

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

export default function ProjectAllocationCustomToolbarSelect({
  onEdit,
  onDelete
}) {
  const classes = useStyles();
  const [openDeallocate, setOpenDeallocate] = React.useState(false);

  const handleDeallocateOpen = () => {
    setOpenDeallocate(true);
  };

  const handleDeallocateClose = () => {
    setOpenDeallocate(false);
    onEdit();
  };

  return (
    <div>
      <Tooltip title={"Deallocate"}>
        <Fab
          color="secondary"
          aria-label="edit"
          className={classes.fab}
          size="small"
          onClick={handleDeallocateOpen}
        >
          <UndoIcon />
        </Fab>
      </Tooltip>

      <Dialog
        open={openDeallocate}
        onClose={handleDeallocateClose}
        aria-labelledby="add-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="add-project-title">Deallocate Employee</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to deallocate the selected employee?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeallocateClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={onDelete} color="primary">
            Deallocate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
