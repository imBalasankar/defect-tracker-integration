import React from "react";
import Links from "@material-ui/core/Link";
import { Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import CompanyDashboard from "../DashboardComponent/Company/CompanyDashboard";
import DeveloperDashboard from "../DashboardComponent/Developer/DeveloperDashboard";
import ProjectManagerDashboard from "../DashboardComponent/ProjectManager/ProjectManagerDashboard";
import QADashboard from "../DashboardComponent/QA/QADashboard";
import ManageEmployee from "../CompanyComponent/ManageEmployees/ManageEmployee";
import AddEmployee from "../CompanyComponent/ManageEmployees/AddEmployeeForm";
import EditEmployee from "../CompanyComponent/ManageEmployees/EditEmployeeForm";
import ManageClient from "../CompanyComponent/ManageClients/ManageClient";
import AddClient from "../CompanyComponent/ManageClients/AddClientForm";
import EditClient from "../CompanyComponent/ManageClients/EditClientForm";
import ManageProject from "../ProjectComponent/ManageProjects";
import AddProject from "../ProjectComponent/AddProjectForm";
import EditProject from "../ProjectComponent/EditProjectForm";
import ManageModule from "../ModuleComponent/ManageModule";
import ManageSubmodule from "../ModuleComponent/SubModule/ManageSubModule";
import ProjectAllocation from "../AllocationComponent/ProjectAllocation/ManageProjectAllocation";
import ProjectEmployee from "../AllocationComponent/ProjectAllocation/ProjectEmployee";
import ModuleAllocation from "../AllocationComponent/ModuleAllocation/ManageModuleAllocation";
import ModuleEmployee from "../AllocationComponent/ModuleAllocation/ModuleEmployee";
import ManageDefect from "../DefectComponent/ManageDefects";
import AddDefectForm from "../DefectComponent/AddDefectForm";
import EditDefectForm from "../DefectComponent/EditDefectForm";
import UserProfile from "../SettingsComponent/UserProfile/UserProfile";
import ManageEmployeeDesignation from "../SettingsComponent/EmployeeConfiguration/Designation/ManageEmployeeDesignation";
import ManageProjectRole from "../SettingsComponent/ProjectConfiguration/Role/ManageProjectRole";
import DefectPriority from "../SettingsComponent/DefectConfiguration/Priority/ManageDefectPriority";
import DefectSeverity from "../SettingsComponent/DefectConfiguration/Severity/ManageDefectSeverity";
import DefectType from "../SettingsComponent/DefectConfiguration/DefectType/ManageDefectType";
import DefectStatus from "../SettingsComponent/DefectConfiguration/DefectStatus/ManageDefectStatus";
import CompanyPrivileges from "../SettingsComponent/Privileges/CompanyPrivileges/CompanyPrivileges";
import ProjectPrivileges from "../SettingsComponent/Privileges/ProjectPrivileges/ProjectPrivileges";
import QALeadPrivileges from "../SettingsComponent/Privileges/QALeadPrivileges/QALeadPrivileges";
import TechLeadPriviles from "../SettingsComponent/Privileges/TechLeadPrivileges/TechLeadPrivileges";
import DefectLog from "../SettingsComponent/DefectLog/ManageLog";

export default function RouteDetails({ isDark }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Company</Typography>
          </Breadcrumbs>
          <CompanyDashboard isDark={isDark} />
        </Route>

        <Route path="/dashboard/company">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Company</Typography>
          </Breadcrumbs>
          <CompanyDashboard isDark={isDark} />
        </Route>

        <Route path="/dashboard/developer">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Developer</Typography>
          </Breadcrumbs>
          <DeveloperDashboard isDark={isDark} />
        </Route>

        <Route path="/dashboard/project-manager">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Project-Manager</Typography>
          </Breadcrumbs>
          <ProjectManagerDashboard isDark={isDark} />
        </Route>

        <Route path="/dashboard/qa">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">QA</Typography>
          </Breadcrumbs>
          <QADashboard isDark={isDark} />
        </Route>

        <Route exact path="/company-administration/manage-employee">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Company Administration</Links>
            <Typography color="textPrimary">Manage Employee</Typography>
          </Breadcrumbs>
          <ManageEmployee />
        </Route>

        <Route path="/company-administration/manage-employee/add-employee">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Company Administration</Links>
            <Links color="inherit">Manage Employee</Links>
            <Typography color="textPrimary">Add Employee</Typography>
          </Breadcrumbs>
          <AddEmployee />
        </Route>

        <Route path="/company-administration/manage-employee/edit-employee">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Company Administration</Links>
            <Links color="inherit">Manage Employee</Links>
            <Typography color="textPrimary">Edit Employee</Typography>
          </Breadcrumbs>
          <EditEmployee />
        </Route>

        <Route exact path="/company-administration/manage-client">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Company Adminstration</Links>
            <Typography color="textPrimary">Manage Client</Typography>
          </Breadcrumbs>
          <ManageClient />
        </Route>

        <Route path="/company-administration/manage-client/add-client">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Company Administration</Links>
            <Links color="inherit">Manage Client</Links>
            <Typography color="textPrimary">Add Client</Typography>
          </Breadcrumbs>
          <AddClient />
        </Route>

        <Route path="/company-administration/manage-client/edit-client">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Company Administration</Links>
            <Links color="inherit">Manage Client</Links>
            <Typography color="textPrimary">Edit Client</Typography>
          </Breadcrumbs>
          <EditClient />
        </Route>

        <Route exact path="/manage-project">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Typography color="textPrimary">Manage Project</Typography>
          </Breadcrumbs>
          <ManageProject />
        </Route>

        <Route path="/manage-project/add-project">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Manage Project</Links>
            <Typography color="textPrimary">Add Project</Typography>
          </Breadcrumbs>
          <AddProject />
        </Route>

        <Route path="/manage-project/edit-project">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Manage Project</Links>
            <Typography color="textPrimary">Edit Project</Typography>
          </Breadcrumbs>
          <EditProject />
        </Route>

        <Route path="/module/manage-module">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Module</Links>
            <Typography color="textPrimary">Manage Module</Typography>
          </Breadcrumbs>
          <ManageModule />
        </Route>

        <Route path="/module/manage-submodule">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Module</Links>
            <Typography color="textPrimary">Manage Submodule</Typography>
          </Breadcrumbs>
          <ManageSubmodule />
        </Route>

        <Route exact path="/allocation/manage-project-allocation">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Allocation</Links>
            <Typography color="textPrimary">
              Manage Project Allocation
            </Typography>
          </Breadcrumbs>
          <ProjectAllocation />
        </Route>

        <Route path="/allocation/manage-project-allocation/allocate">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Allocation</Links>
            <Links color="inherit">Manage Project Allocation</Links>
            <Typography color="textPrimary">Allocate Project</Typography>
          </Breadcrumbs>
          <ProjectEmployee />
        </Route>

        <Route exact path="/allocation/manage-module-allocation">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Allocation</Links>
            <Typography color="textPrimary">
              Manage Module Allocation
            </Typography>
          </Breadcrumbs>
          <ModuleAllocation />
        </Route>

        <Route path="/allocation/manage-module-allocation/allocate">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Allocation</Links>
            <Links color="inherit">Manage Module Allocation</Links>
            <Typography color="textPrimary">Allocate Module</Typography>
          </Breadcrumbs>
          <ModuleEmployee />
        </Route>

        <Route exact path="/manage-defect">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Typography color="textPrimary">Manage Defect</Typography>
          </Breadcrumbs>
          <ManageDefect />
        </Route>

        <Route path="/manage-defect/add-defect">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Manage Defect</Links>
            <Typography color="textPrimary">Add Defect</Typography>
          </Breadcrumbs>
          <AddDefectForm />
        </Route>

        <Route path="/manage-defect/edit-defect">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Manage Defect</Links>
            <Typography color="textPrimary">Edit Defect</Typography>
          </Breadcrumbs>
          <EditDefectForm />
        </Route>

        <Route path="/settings/user-profile">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Typography color="textPrimary">User Profile</Typography>
          </Breadcrumbs>
          <UserProfile />
        </Route>

        <Route path="/settings/employee-configuration/manage-designation">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Employee Configuration</Links>
            <Typography color="textPrimary">Manage Designation</Typography>
          </Breadcrumbs>
          <ManageEmployeeDesignation />
        </Route>

        <Route path="/settings/project-configuration/manage-role">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Project-Configuration</Links>
            <Typography color="textPrimary">Manage-Role</Typography>
          </Breadcrumbs>
          <ManageProjectRole />
        </Route>

        <Route path="/settings/defect-configuration/priority">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Defect-Configuration</Links>
            <Typography color="textPrimary">Priority</Typography>
          </Breadcrumbs>
          <DefectPriority />
        </Route>

        <Route path="/settings/defect-configuration/severity">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Defect-Configuration</Links>
            <Typography color="textPrimary">Severity</Typography>
          </Breadcrumbs>
          <DefectSeverity />
        </Route>

        <Route path="/settings/defect-configuration/type">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Defect-Configuration</Links>
            <Typography color="textPrimary">Type</Typography>
          </Breadcrumbs>
          <DefectType />
        </Route>

        <Route path="/settings/defect-configuration/status">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Defect-Configuration</Links>
            <Typography color="textPrimary">Status</Typography>
          </Breadcrumbs>
          <DefectStatus />
        </Route>

        <Route path="/settings/privileges/company">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">privileges</Links>
            <Typography color="textPrimary">Company</Typography>
          </Breadcrumbs>
          <CompanyPrivileges />
        </Route>

        <Route path="/settings/privileges/project">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">privileges</Links>
            <Typography color="textPrimary">Project</Typography>
          </Breadcrumbs>
          <ProjectPrivileges />
        </Route>

        <Route path="/settings/privileges/qa-lead">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">privileges</Links>
            <Typography color="textPrimary">QA Lead</Typography>
          </Breadcrumbs>
          <QALeadPrivileges />
        </Route>

        <Route path="/settings/privileges/tech-lead">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">privileges</Links>
            <Typography color="textPrimary">Tech Lead</Typography>
          </Breadcrumbs>
          <TechLeadPriviles />
        </Route>

        <Route path="/settings/defect-log">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Typography color="textPrimary">Defect Log</Typography>
          </Breadcrumbs>
          <DefectLog />
        </Route>
      </Switch>
    </div>
  );
}
