"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Chart,
  LegendItem,
} from "chart.js";

import { Chart as ReactChart } from "react-chartjs-2";
import { Box, CardContent } from "@mui/material";
import { AcademicRecord } from "@/types/student";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

type UserGPAChartProps = {
  data: AcademicRecord[];
};

const UserGPAChart: React.FC<UserGPAChartProps> = ({ data }) => {
  const labels = data.map((record) => `${record.year} ${record.semester}`);

  const chartData = {
    labels,
    datasets: [
      {
        type: "bar" as const,
        label: "GPA",
        data: data.map((record) => record.GPA),
        backgroundColor: data.map((record) =>
          record.GPA > 3.24
            ? "#AAE0FA"
            : record.GPA > 1.99
            ? "#B7DBB7"
            : record.GPA > 1.74
            ? "#F8A273"
            : "#FF9692"
        ),
        borderWidth: 1,
        order: 2,
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        type: "line" as const,
        label: "GPAX",
        data: data.map((record) => record.GPAX),
        borderColor: "#2078BD",
        backgroundColor: "#2078BD",
        fill: false,
        tension: 0.3,
        pointRadius: 3,
        pointHoverRadius: 5,
        yAxisID: "y",
        order: 1,
      },
    ],
  };

  const options: ChartOptions<"bar" | "line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        onClick: () => {},
        display: true,
        position: "top",
        labels: {
          boxWidth: 10,
          padding: 10,
          font: { size: 12 },
          generateLabels: (chart: Chart<"bar" | "line">) => {
            const defaultLegend =
              ChartJS.defaults.plugins.legend.labels.generateLabels(chart);

            const customLegends: LegendItem[] = [
              {
                text: "3.25-4.00",
                fillStyle: "#AAE0FA",
                strokeStyle: "#AAE0FA",
                hidden: false,
                lineCap: "butt",
                lineDash: [],
                lineDashOffset: 0,
                lineJoin: "miter",
                lineWidth: 1,
                datasetIndex: -1,
              },
              {
                text: "2.00-3.24",
                fillStyle: "#B7DBB7",
                strokeStyle: "#B7DBB7",
                hidden: false,
                lineCap: "butt",
                lineDash: [],
                lineDashOffset: 0,
                lineJoin: "miter",
                lineWidth: 1,
                datasetIndex: -1,
              },
              {
                text: "1.75-1.99",
                fillStyle: "#F8A273",
                strokeStyle: "#F8A273",
                hidden: false,
                lineCap: "butt",
                lineDash: [],
                lineDashOffset: 0,
                lineJoin: "miter",
                lineWidth: 1,
                datasetIndex: -1,
              },
              {
                text: "0.00-1.74",
                fillStyle: "#FF9692",
                strokeStyle: "#FF9692",
                hidden: false,
                lineCap: "butt",
                lineDash: [],
                lineDashOffset: 0,
                lineJoin: "miter",
                lineWidth: 1,
                datasetIndex: -1,
              },
            ];

            const gpaxLegend = defaultLegend.find((l) => l.text === "GPAX");

            const legends = gpaxLegend
              ? [gpaxLegend, ...customLegends]
              : [...customLegends];

            return legends;
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || "";
            const value = context.parsed.y ?? context.parsed;
            if (typeof value === "number") {
              return `${label}: ${value.toFixed(2)}`;
            }
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 4,
        title: {
          display: true,
          text: "GPA",
        },
      },
      x: {
        title: {
          display: true,
        },
      },
    },
  };

  return (
    <Box
      aria-label="User GPA chart showing GPA and GPAX over semesters"
      role="img"
      sx={{
        paddingY: 1,
        paddingX: 2,
        height: "auto",
        width: "auto",
        maxHeight: "400px",
        display: "flex",
        flexDirection: "column",
        border: 1,
      }}
    >
      <CardContent sx={{ flexGrow: 1, height: "400px" }}>
        <ReactChart type="bar" data={chartData} options={options} />
      </CardContent>
    </Box>
  );
};

export default UserGPAChart;
