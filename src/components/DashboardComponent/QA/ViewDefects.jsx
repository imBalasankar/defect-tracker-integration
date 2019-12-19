import React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "DefectId",
    label: "Defect Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "DefectName",
    label: "Defect Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "ProjectName",
    label: "Project",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "ModuleName",
    label: "Module",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "SubmoduleName",
    label: "Submodule",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Severity",
    label: "Severity",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Priority",
    label: "Priority",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Status",
    label: "Status",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    DefectId: "D-100",
    DefectName: "Dropdown not working",
    ProjectName: "CMS",
    ModuleName: "UI",
    SubmoduleName: "Left Drawer",
    Severity: "High",
    Priority: "Urgent",
    Status: "New"
  },
  {
    DefectId: "D-100",
    DefectName: "Dropdown not working",
    ProjectName: "CMS",
    ModuleName: "UI",
    SubmoduleName: "Left Drawer",
    Severity: "High",
    Priority: "Urgent",
    Status: "New"
  },
  {
    DefectId: "D-100",
    DefectName: "Dropdown not working",
    ProjectName: "CMS",
    ModuleName: "UI",
    SubmoduleName: "Left Drawer",
    Severity: "High",
    Priority: "Urgent",
    Status: "New"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "none",
  responsive: "scrollMaxHeight"
};

export default function ViewDefects() {
  return (
    <div>
      <MUIDataTable data={data} columns={columns} options={options} />
    </div>
  );
}
