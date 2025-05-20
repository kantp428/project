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
  plugins,
} from "chart.js";
import useFetchData from "@/hooks/useFetchData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type GPAXChartProps = {
  year: string;
};

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const data = rawData as StatusData;

  // create obj.
  const labels = Object.keys(data);
  // map data using code as key
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
  };

  return (
    <div className="w-full sm:w-1/2 p-2 h-[400px]">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default CourseChart;
