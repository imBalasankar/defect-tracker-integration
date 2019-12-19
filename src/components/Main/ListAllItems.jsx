import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CompanyIcon from "@material-ui/icons/Business";
import ModuleIcon from "@material-ui/icons/Extension";
import AllocationIcon from "@material-ui/icons/DoubleArrow";
import ProjectIcon from "@material-ui/icons/Assignment";
import DefectIcon from "@material-ui/icons/BugReport";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  },
  dualNested: {
    paddingLeft: theme.spacing(6)
  },
  customAvatar: {
    width: "22px",
    height: "22px",
    fontSize: "11px",
    backgroundColor: "#64b5f6"
  }
}));

export default function ListAllItems() {
  const classes = useStyles();
  const [select, setSelect] = React.useState(null);
  const [openDashboard, setOpenDashboard] = React.useState(false);
  const [
    openCompanyAdminstration,
    setOpenCompanyAdminstration
  ] = React.useState(false);
  const [openModule, setOpenModule] = React.useState(false);
  const [openProjectAllocation, setOpenProjectAllocation] = React.useState(
    false
  );
  const [openSettings, setOpenSettings] = React.useState(false);
  const [openDefectConfiguration, setOpenDefectConfiguration] = React.useState(
    false
  );
  const [openPrivileges, setOpenPrivileges] = React.useState(false);

  const updateSelected = selectedIndex => {
    setSelect(selectedIndex);
  };

  const handleDashboardClick = () => {
    setOpenDashboard(!openDashboard);
  };

  const handleCompanyAdminstrationClick = () => {
    setOpenCompanyAdminstration(!openCompanyAdminstration);
  };

  const handleModuleClick = () => {
    setOpenModule(!openModule);
  };

  const handleProjectAllocationClick = () => {
    setOpenProjectAllocation(!openProjectAllocation);
  };

  const handleSettingsClick = () => {
    setOpenSettings(!openSettings);
  };

  const handleDefectConfigurationClick = () => {
    setOpenDefectConfiguration(!openDefectConfiguration);
  };

  const handlePrivilegesClick = () => {
    setOpenPrivileges(!openPrivileges);
  };

  return (
    <div>
      <List>
        <ListItem button onClick={handleDashboardClick}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {openDashboard ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openDashboard} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(1)}
              selected={select === 1}
              component={Link}
              to={"/dashboard/company"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>CO</Avatar>
              </ListItemIcon>
              <ListItemText primary="Company" />
            </ListItem>

            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(2)}
              selected={select === 2}
              component={Link}
              to={"/dashboard/developer"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>DE</Avatar>
              </ListItemIcon>
              <ListItemText primary="Developer" />
            </ListItem>

            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(3)}
              selected={select === 3}
              component={Link}
              to={"/dashboard/project-manager"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>PM</Avatar>
              </ListItemIcon>
              <ListItemText primary="Project Manager" />
            </ListItem>

            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(4)}
              selected={select === 4}
              component={Link}
              to={"/dashboard/qa"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>QA</Avatar>
              </ListItemIcon>
              <ListItemText primary="QA" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={handleCompanyAdminstrationClick}>
          <ListItemIcon>
            <CompanyIcon />
          </ListItemIcon>
          <ListItemText primary="Company" />
          {openCompanyAdminstration ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCompanyAdminstration} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(8)}
              selected={select === 8}
              component={Link}
              to={"/company-administration/manage-employee"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>ME</Avatar>
              </ListItemIcon>
              <ListItemText primary="Manage Employee" />
            </ListItem>

            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(9)}
              selected={select === 9}
              component={Link}
              to={"/company-administration/manage-client"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>MC</Avatar>
              </ListItemIcon>
              <ListItemText primary="Manage Client" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          button
          component={Link}
          to={"/manage-project"}
          onClick={() => updateSelected(10)}
          selected={select === 10}
        >
          <ListItemIcon>
            <ProjectIcon />
          </ListItemIcon>
          <ListItemText primary="Project" />
        </ListItem>

        <ListItem button onClick={handleModuleClick}>
          <ListItemIcon>
            <ModuleIcon />
          </ListItemIcon>
          <ListItemText primary="Module" />
          {openModule ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openModule} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(11)}
              selected={select === 11}
              component={Link}
              to={"/module/manage-module"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>MM</Avatar>
              </ListItemIcon>
              <ListItemText primary="Manage Module" />
            </ListItem>

            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(12)}
              selected={select === 12}
              component={Link}
              to={"/module/manage-submodule"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>MS</Avatar>
              </ListItemIcon>
              <ListItemText primary="Manage Submodule" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={handleProjectAllocationClick}>
          <ListItemIcon>
            <AllocationIcon />
          </ListItemIcon>
          <ListItemText primary="Allocation" />
          {openProjectAllocation ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProjectAllocation} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(13)}
              selected={select === 13}
              component={Link}
              to={"/allocation/manage-project-allocation"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>PA</Avatar>
              </ListItemIcon>
              <ListItemText primary="Project Allocation" />
            </ListItem>

            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(15)}
              selected={select === 15}
              component={Link}
              to={"/allocation/manage-module-allocation"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>MA</Avatar>
              </ListItemIcon>
              <ListItemText primary="Module Allocation" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          button
          onClick={() => updateSelected(16)}
          selected={select === 16}
          component={Link}
          to={"/manage-defect"}
        >
          <ListItemIcon>
            <DefectIcon />
          </ListItemIcon>
          <ListItemText primary="Defect" />
        </ListItem>
        <ListItem button onClick={handleSettingsClick}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
          {openSettings ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSettings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(17)}
              selected={select === 17}
              component={Link}
              to={"/settings/user-profile"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>UP</Avatar>
              </ListItemIcon>
              <ListItemText primary="User Profile" />
            </ListItem>

            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(19)}
              selected={select === 19}
              component={Link}
              to={"/settings/employee-configuration/manage-designation"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>EC</Avatar>
              </ListItemIcon>
              <ListItemText primary="Employee Configuration" />
            </ListItem>

            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(20)}
              selected={select === 20}
              component={Link}
              to={"/settings/project-configuration/manage-role"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>PC</Avatar>
              </ListItemIcon>
              <ListItemText primary="Project Configuration" />
            </ListItem>

            <ListItem
              button
              className={classes.nested}
              onClick={handleDefectConfigurationClick}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>DC</Avatar>
              </ListItemIcon>
              <ListItemText primary="Defect Configuration" />
              {openDefectConfiguration ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openDefectConfiguration} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.dualNested}
                  onClick={() => updateSelected(24)}
                  selected={select === 24}
                  component={Link}
                  to={"/settings/defect-configuration/priority"}
                >
                  <ListItemText primary="Priority" />
                </ListItem>

                <ListItem
                  button
                  className={classes.dualNested}
                  onClick={() => updateSelected(25)}
                  selected={select === 25}
                  component={Link}
                  to={"/settings/defect-configuration/severity"}
                >
                  <ListItemText primary="Severity" />
                </ListItem>

                <ListItem
                  button
                  className={classes.dualNested}
                  onClick={() => updateSelected(26)}
                  selected={select === 26}
                  component={Link}
                  to={"/settings/defect-configuration/type"}
                >
                  <ListItemText primary="Type" />
                </ListItem>

                <ListItem
                  button
                  className={classes.dualNested}
                  onClick={() => updateSelected(27)}
                  selected={select === 27}
                  component={Link}
                  to={"/settings/defect-configuration/status"}
                >
                  <ListItemText primary="Status" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              className={classes.nested}
              onClick={handlePrivilegesClick}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>PR</Avatar>
              </ListItemIcon>
              <ListItemText primary="Privileges" />
              {openPrivileges ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openPrivileges} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.dualNested}
                  onClick={() => updateSelected(28)}
                  selected={select === 28}
                  component={Link}
                  to={"/settings/privileges/company"}
                >
                  <ListItemText primary="Company" />
                </ListItem>

                <ListItem
                  button
                  className={classes.dualNested}
                  onClick={() => updateSelected(29)}
                  selected={select === 29}
                  component={Link}
                  to={"/settings/privileges/project"}
                >
                  <ListItemText primary="Project" />
                </ListItem>

                <ListItem
                  button
                  className={classes.dualNested}
                  onClick={() => updateSelected(30)}
                  selected={select === 30}
                  component={Link}
                  to={"/settings/privileges/qa-lead"}
                >
                  <ListItemText primary="QA Lead" />
                </ListItem>

                <ListItem
                  button
                  className={classes.dualNested}
                  onClick={() => updateSelected(31)}
                  selected={select === 31}
                  component={Link}
                  to={"/settings/privileges/tech-lead"}
                >
                  <ListItemText primary="Tech Lead" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              className={classes.nested}
              onClick={() => updateSelected(32)}
              selected={select === 32}
              component={Link}
              to={"/settings/defect-log"}
            >
              <ListItemIcon>
                <Avatar className={classes.customAvatar}>DL</Avatar>
              </ListItemIcon>
              <ListItemText primary="Defect Log" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
}
