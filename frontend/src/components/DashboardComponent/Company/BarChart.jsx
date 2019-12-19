import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Projects",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [5, 4, 6, 4, 7, 5, 4]
    }
  ]
};

export default function BarChart({ isDark }) {
  return (
    <div>
      <Bar
        data={data}
        height={280}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontColor: isDark ? "white" : "black"
            }
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: isDark ? "white" : "black"
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: isDark ? "white" : "black"
                }
              }
            ]
          }
        }}
      />
    </div>
  );
}
