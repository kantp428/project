import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { SubjectCategory } from "@/types/student";
import { Card, CardContent, Typography } from "@mui/material";

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
        label: "# of Votes",
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

  return (
    <Card>
      <Typography variant="h5" color="primary">
        {data.category}
      </Typography>
      <CardContent>
        <Doughnut data={chartData} />
        <Typography variant="h5" color="secondary">
          `${(data.incompleteCredits / total) * 100} %`
        </Typography>
        <Typography variant="h5" color="secondary">
          {data.averageGPA}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryChart;
