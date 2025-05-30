"use client";

import React, { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const labels = data.map((record) => `${record.year} ${record.semester}`);

  const chartData = {
    type: "bar" as const, // Explicit type for mixed charts
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
          boxWidth: isMobile ? 10 : 16,
          padding: 10,
          font: {
            size: isMobile ? 10 : 16,
          },
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

            return gpaxLegend
              ? [gpaxLegend, ...customLegends]
              : [...customLegends];
          },
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
          callback: function (val) {
            if (typeof val === "number") {
              const label = this.getLabelForValue(val);
              if (isMobile) {
                const match = label.match(/^(\d{4})\s*ภาค(.*)$/);
                if (match) {
                  const shortYear = match[1].slice(-2);
                  const term = match[2].trim();
                  return `${shortYear} ${term}`;
                }
              }
              return label;
            }
            return val;
          },
          font: {
            size: isMobile ? 9 : 12,
          },
          maxRotation: 45,
          minRotation: 0,
        },
      },
    },
  };

  return (
    <Box
      aria-label="User GPA chart showing GPA and GPAX over semesters"
      role="img"
      sx={{
        width: "100%",
        paddingY: 2,
        paddingX: { xs: 1, sm: 3 },
      }}
    >
      <CardContent
        sx={{ height: { xs: "320px", sm: "420px" }, position: "relative" }}
      >
        <ReactChart data={chartData} options={options} type={"bar"} />
      </CardContent>
    </Box>
  );
};

export default UserGPAChart;
