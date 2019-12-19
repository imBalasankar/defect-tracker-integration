import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

function createData(privileges, dev, qa, tl, qal) {
  return { privileges, dev, qa, tl, qal };
}

const rows = [
  createData("Add Defect"),
  createData("Edit Defect"),
  createData("Manage Defect"),
  createData("Defect Dashboard"),
  createData("Add Module"),
  createData("Edit Module"),
  createData("Manage Module"),
  createData("Add SubModule"),
  createData("Edit SubModule"),
  createData("Manage SubModule"),
  createData("PM Manage Allocation"),
  createData("PM Edit Allocation"),
  createData("PM Add Allocation"),
  createData("PM Dashboard"),
  createData("QA Dashboard"),
  createData("Developer Dashboard"),
  createData("TechLead Privilage"),
  createData("QALead Privilage"),
  createData("Developer Privilage"),
  createData("QA Privilage")
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  textField: {
    marginRight: theme.spacing(3),
    width: "250px"
  },
  table: {
    minWidth: 700
  },
  button: {
    marginTop: theme.spacing(2)
  }
}));

export default function ProjectPrivileges() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Privileges</StyledTableCell>
              <StyledTableCell align="right">Dev</StyledTableCell>
              <StyledTableCell align="right">QA</StyledTableCell>
              <StyledTableCell align="right">Tech Lead</StyledTableCell>
              <StyledTableCell align="right">QA Lead</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow key={row.privileges}>
                  <TableCell>{row.privileges}</TableCell>
                  <TableCell align="right">
                    <Switch />
                  </TableCell>
                  <TableCell align="right">
                    <Switch />
                  </TableCell>
                  <TableCell align="right">
                    <Switch />
                  </TableCell>
                  <TableCell align="right">
                    <Switch />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <div>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "previous page"
            }}
            nextIconButtonProps={{
              "aria-label": "next page"
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      </Paper>
      <Grid container justify="flex-end">
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Set Privileges
          </Button>
        </div>
      </Grid>
    </div>
  );
}
