import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Engineers", "Leads", "Project Managers"],
  datasets: [
    {
      data: [70, 16, 3],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

export default function DoughnutChart({ isDark }) {
  return (
    <div>
      <Doughnut
        data={data}
        height={280}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontColor: isDark ? "white" : "black"
            }
          }
        }}
      />
    </div>
  );
}
