"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, Card, CardContent } from "@mui/material";
import { AcademicRecord } from "@/types/student";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserGPAChart = ({ data }: { data: AcademicRecord[] }) => {
  const labels = data.map((record) => `${record.year} ${record.semester}`);

  const chartData = {
    labels,
    datasets: [
      {
        label: "GPA",
        data: data.map((record) => record.GPA),
        backgroundColor: "#535C91",
      },
      {
        label: "GPAX",
        data: data.map((record) => record.GPAX),
        backgroundColor: "#1B1A55",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          boxWidth: 10,
          padding: 10,
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <Box
      sx={{
        paddingY: 1,
        paddingX: 2,
        height: "auto",
        width: "auto",
        maxHeight: "650px",
        maxWidth: "900px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flexGrow: 1, height: "400px" }}>
        <Bar data={chartData} options={options} />
      </CardContent>
    </Box>
  );
};

export default UserGPAChart;
