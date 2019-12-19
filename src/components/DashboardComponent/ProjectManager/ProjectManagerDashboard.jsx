import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import ViewDefects from "../QA/ViewDefects";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1)
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(3),
    position: "relative"
  }
}));

export default function ProjectManagerDashboard({ isDark }) {
  const classes = useStyles();
  const styleCard = {
    height: "11rem",
    backgroundColor: isDark ? "#424242" : null
  };
  const styleHead = { height: "5rem" };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4} md={4} lg={2}>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div
                className={
                  isDark
                    ? "card-header h5 text-white"
                    : "card-header h5 text-secondary"
                }
                style={styleHead}
              >
                New Defects
              </div>
              <div className="card-body text-primary">
                <h5 className="card-title h1">15</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={2}>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div
                className={
                  isDark
                    ? "card-header h5 text-white"
                    : "card-header h5 text-secondary"
                }
                style={styleHead}
              >
                Opened Defects
              </div>
              <div className="card-body text-secondary">
                <h5 className="card-title h1">20</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={2}>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div
                className={
                  isDark
                    ? "card-header h5 text-white"
                    : "card-header h5 text-secondary"
                }
                style={styleHead}
              >
                Reopened Defects
              </div>
              <div className="card-body text-info">
                <h5 className="card-title h1">3</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={2}>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div
                className={
                  isDark
                    ? "card-header h5 text-white"
                    : "card-header h5 text-secondary"
                }
                style={styleHead}
              >
                High Priority Defects
              </div>
              <div className="card-body text-danger">
                <h5 className="card-title h1">8</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={2}>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div
                className={
                  isDark
                    ? "card-header h5 text-white"
                    : "card-header h5 text-secondary"
                }
                style={styleHead}
              >
                High Severity
              </div>
              <div className="card-body text-warning">
                <h5 className="card-title h1">8</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={2}>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div
                className={
                  isDark
                    ? "card-header h5 text-white"
                    : "card-header h5 text-secondary"
                }
                style={styleHead}
              >
                Fixed Defects
              </div>
              <div className="card-body text-success">
                <h5 className="card-title h1">35</h5>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <DoughnutChart isDark={isDark} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <LineChart isDark={isDark} />
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <ViewDefects />
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <BarChart isDark={isDark} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <PieChart isDark={isDark} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
