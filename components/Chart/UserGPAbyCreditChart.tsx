"use client";

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Chart as ReactChart } from "react-chartjs-2";
import { Box, CardContent } from "@mui/material";
import { SubjectCategory } from "@/types/student";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type UserGPAChartProps = {
  data: SubjectCategory[];
};

const UserGPAbyCreditChart: React.FC<UserGPAChartProps> = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const labels = data.map((record) => `${record.category}`);

  const chartData = {
    labels,
    datasets: [
      {
        type: "bar" as const,
        label: "GPA",
        data: data.map((record) => record.averageGPA),
        backgroundColor: data.map((record) =>
          record.averageGPA > 3.24
            ? "#AAE0FA"
            : record.averageGPA > 1.99
            ? "#B7DBB7"
            : record.averageGPA > 1.74
            ? "#F8A273"
            : "#FF9692"
        ),
        borderWidth: 1,
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        onClick: () => {},
        display: true,
        position: "top",
        labels: {
          boxWidth: isMobile ? 10 : 16,
          padding: 10,
          font: {
            size: isMobile ? 10 : 16,
          },
          generateLabels: () => [
            {
              text: "3.25-4.00",
              fillStyle: "#AAE0FA",
              strokeStyle: "#AAE0FA",
              fontColor: "#6e6e6e",
              hidden: false,
              datasetIndex: -1,
            },
            {
              text: "2.00-3.24",
              fillStyle: "#B7DBB7",
              strokeStyle: "#B7DBB7",
              fontColor: "#6e6e6e",
              hidden: false,
              datasetIndex: -1,
            },
            {
              text: "1.75-1.99",
              fillStyle: "#F8A273",
              strokeStyle: "#F8A273",
              fontColor: "#6e6e6e",
              hidden: false,
              datasetIndex: -1,
            },
            {
              text: "0.00-1.74",
              fillStyle: "#FF9692",
              strokeStyle: "#FF9692",
              fontColor: "#6e6e6e",
              hidden: false,
              datasetIndex: -1,
            },
          ],
        },
      },
      tooltip: {
        titleFont: { size: isMobile ? 10 : 14 },
        bodyFont: { size: isMobile ? 10 : 14 },
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || "";
            const value = context.parsed.y ?? context.parsed;
            return typeof value === "number"
              ? `${label}: ${value.toFixed(2)}`
              : `${label}: ${value}`;
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
          font: {
            size: isMobile ? 10 : 16,
          },
        },
        ticks: {
          font: {
            size: isMobile ? 9 : 14,
          },
        },
      },
      x: {
        ticks: {
          callback: function (value) {
            if (typeof value === "number") {
              const label = this.getLabelForValue(value);
              return label.replace("25", "");
            }
            return value;
          },
          font: {
            size: isMobile ? 9 : 14,
          },
          maxRotation: 45,
          minRotation: 0,
        },
      },
    },
  };

  return (
    <Box
      aria-label="User GPA chart"
      role="img"
      sx={{
        mx: "auto",
        width: { xs: "100%", sm: "70%" },
        paddingY: 2,
        paddingX: { xs: 0, sm: 3 },
      }}
    >
      <CardContent
        sx={{ height: { xs: "320px", sm: "420px" }, position: "relative" }}
      >
        <ReactChart type="bar" data={chartData} options={options} />
      </CardContent>
    </Box>
  );
};

export default UserGPAbyCreditChart;
