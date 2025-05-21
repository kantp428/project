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
import { Card, CardContent, Box, Typography } from "@mui/material";
import { ResponsiveContainer } from "recharts";
import { YearGPA, GPAData, GPAbyCode, code, GPACategory } from "@/types/gpax";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


type GPAXChartProps = {
  type: "yearGPA" | "studyingGPA" | "graduatedGPA";
  year?: keyof YearGPA; // only use for yearGPA
  title: string;
};

const GPAXChart = ({ type, year, title}: GPAXChartProps) => {
  const {
    data: rawData,
    loading,
    error,
  } = useFetchData<GPAData>("/data/mockGPA.json");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!rawData) return <div>Invalid data</div>;

  // if didn't choose year (yearGPA) this will show err
  let targetData: GPAbyCode;
  if (type === "yearGPA") {
    if (!year) {
      return <div>Please select a year.</div>;
    }
    // make yearGPA to obj. { "60": [ {...}, {...} ], "61": [...] }
    targetData = rawData.yearGPA[year];
  } else {
    targetData = rawData[type];
  }

  if (!targetData) return <div>No data for selected year/type</div>;

  // create obj key type: code array
  const codes = Object.keys(targetData) as code[];
  const gpaCategories: GPACategory[] = [
    "3_25_4_00",
    "2_00_3_24",
    "1_75_1_99",
    "0_00_1_74",
  ];

  const percentagesByCategory: Record<GPACategory, number[]> = {
    "3_25_4_00": [],
    "2_00_3_24": [],
    "1_75_1_99": [],
    "0_00_1_74": [],
  };

  codes.forEach((code) => {
    const group = targetData[code];
    // sum all gpa together each code
    const total = Object.values(group).reduce((sum, val) => sum + val, 0);

    gpaCategories.forEach((cat) => {
      const val = group[cat];
      percentagesByCategory[cat].push(total !== 0 ? (val / total) * 100 : 0);
    });
  });

  // craete chart format
  const chartData = {
    labels: codes,
    datasets: [
      {
        label: "3.25-4.00",
        data: percentagesByCategory["3_25_4_00"],
        backgroundColor: "#AAE0FA",
        stack: "stack1",
      },
      {
        label: "2.00-3.24",
        data: percentagesByCategory["2_00_3_24"],
        backgroundColor: "#B7DBB7",
        stack: "stack1",
      },
      {
        label: "1.75-1.99",
        data: percentagesByCategory["1_75_1_99"],
        backgroundColor: "#F8A273",
        stack: "stack1",
      },
      {
        label: "0-1.74",
        data: percentagesByCategory["0_00_1_74"],
        backgroundColor: "#FF9692",
        stack: "stack1",
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
          boxWidth: 15, // smaller legend boxes
          padding: 10, // reduce spacing between items
          font: {
            size: 12, // reduce text size to fit in one line
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        max: 100,
      },
    },
  };

  return (
    <>
      <Card
        sx={{
          paddingY: 1,
          paddingX: 2,
          height: "100%",
          width: "auto",
          maxHeight: "650px",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          // textAlign: "center",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        }}
      >
        <Typography
          variant="h6"
          color="primary"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        <CardContent sx={{ flexGrow: 1, paddingTop: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <Bar data={chartData} options={options} />
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default GPAXChart;
