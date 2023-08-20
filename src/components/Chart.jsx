import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const Chart = ({ array = [], currency, days }) => {
  //   Chart
  Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const prices = [];
  const date = [];
  for (let i = 0; i < array.length; i++) {
    if (days === "24h") date.push(new Date(array[i][0]).toLocaleTimeString());
    else date.push(new Date(array[i][0]).toLocaleDateString());
    prices.push(array[i][1]);
  }
  const data = {
    labels: date,
    datasets: [
      {
        label: `Prices in ${currency}`,
        data: prices,
        borderColor: "red",
        backgroundColor: "lightpink",
      },
    ],
  };

  return <Line options={{ responsive: true }} data={data}></Line>;
};

export default Chart;
