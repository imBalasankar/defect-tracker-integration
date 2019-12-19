import React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "ProjectId",
    label: "Project Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "ProjectName",
    label: "Project Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Type",
    label: "Type",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "StartDate",
    label: "Start Date",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "EndDate",
    label: "End Date",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Duration",
    label: "Duration",
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
    ProjectId: "P-100",
    ProjectName: "CMS",
    Type: "Private",
    StartDate: "03-01-2019",
    EndDate: "03-10-2019",
    Duration: "10 months",
    Status: "Finished"
  },
  {
    ProjectId: "P-100",
    ProjectName: "CMS",
    Type: "Private",
    StartDate: "03-01-2019",
    EndDate: "03-10-2019",
    Duration: "10 months",
    Status: "Finished"
  },
  {
    ProjectId: "P-100",
    ProjectName: "CMS",
    Type: "Private",
    StartDate: "03-01-2019",
    EndDate: "03-10-2019",
    Duration: "10 months",
    Status: "Finished"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "none",
  responsive: "scrollMaxHeight"
};

export default function ViewProjects() {
  return (
    <div>
      <MUIDataTable data={data} columns={columns} options={options} />
    </div>
  );
}
