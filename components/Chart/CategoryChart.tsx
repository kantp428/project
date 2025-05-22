import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { SubjectCategory } from "@/types/student";
import { Box, Card, CardContent, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

type CategoryChartProps = {
  data: SubjectCategory;
};

const CategoryChart: React.FC<CategoryChartProps> = ({ data }) => {
  const labels = ["หน่วยกิตที่เรียนไปแล้ว", "หน่วยกิตที่ยังไม่ได้เรียน"];
  const total = data.completedCredits + data.incompleteCredits;
  const chartData = {
    labels,
    datasets: [
      {
        data: [data.completedCredits, data.incompleteCredits],
        backgroundColor: [
          data.averageGPA > 3.25
            ? "#AAE0FA"
            : data.averageGPA > 1.99
            ? "#B7DBB7"
            : data.averageGPA > 1.74
            ? "#F8A273"
            : "#FF9692",
          "#6e706e",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Card
      sx={{
        paddingY: 1,
        paddingX: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <Typography variant="body2" sx={{ alignSelf: "flex-start", mb: 1, mt: 1, fontWeight: "bold" }}>
        {data.category}
      </Typography>

      <CardContent
        sx={{
          width: "100%",
          padding: "8px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: 160,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Doughnut data={chartData} options={options} />
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 2, fontSize: 12 }}
        >
          Progress: {((data.completedCredits / total) * 100).toFixed(2)}%
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: 12 }}
        >
          Average GPA: {data.averageGPA.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryChart;
