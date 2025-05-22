"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useFetchData from "@/hooks/useFetchData";
import { Box, Card, CardContent, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CourseChart = () => {
  type StatusData = {
    [code: string]: {
      entry: string;
      studying: string;
      graduated: string;
      failed: string;
    };
  };

  const {
    data: rawData,
    loading,
    error,
  } = useFetchData<StatusData>("/data/mockStatusSudent.json");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const data = rawData as StatusData;
  const labels = Object.keys(data);
  const entryData = labels.map((code) => parseInt(data[code].entry));
  const studyingData = labels.map((code) => parseInt(data[code].studying));
  const graduatedData = labels.map((code) => parseInt(data[code].graduated));
  const failedData = labels.map((code) => parseInt(data[code].failed));

  const chartData = {
    labels,
    datasets: [
      {
        label: "นิสิตแรกเข้า",
        data: entryData,
        backgroundColor: "#9290C3",
      },
      {
        label: "นิสิตกำลังศึกษา",
        data: studyingData,
        backgroundColor: "#535C91",
      },
      {
        label: "นิสิตจบการศึกษา",
        data: graduatedData,
        backgroundColor: "#1B1A55",
      },
      {
        label: "พ้นสภาพ",
        data: failedData,
        backgroundColor: "#070F2B",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          boxWidth: isMobile ? 8 : 12,
          padding: isMobile ? 6 : 10,
          font: {
            size: isMobile ? 10 : 14,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: isMobile ? 9 : 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: isMobile ? 9 : 12,
          },
        },
      },
    },
  };

  return (
    <Box
      sx={{
        px: { xs: 1, sm: 2 },
        py: { xs: 2, sm: 3 },
        width: "100%",
        maxWidth: 900,
        mx: "auto",
      }}
    >
      <Card elevation={3}>
        <CardContent
          sx={{
            height: { xs: 300, sm: 400 },
            position: "relative",
          }}
        >
          <Bar data={chartData} options={options} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default CourseChart;
