import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarGraph = ({ dates }) => {
  const userLifetime = dates.map((item) => {
    const lastVisit = new Date(item.lastVisit);
    const registration = new Date(item.registration);
    const difference = lastVisit.getTime() - registration.getTime();

    return difference / (1000 * 3600 * 24);
  });

  const barChartData = {
    labels: dates.map((item) => item._id),
    datasets: [
      {
        data: userLifetime,
        label: "User lifetime",
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        fill: true,
      },
    ],
  };

  return (
    <Bar
      type="bar"
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 3 Months",
          fontSize: 22,
        },
       
      }}
      data={barChartData}
    />
  );
};

export default BarGraph;
