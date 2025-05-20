import GPAXChart from "@/components/Chart/GPAXChart";
import CourseChart from "@/components/Chart/CourseChart";

export default function ChartVisual() {
  return (
    <div>
      <GPAXChart type="yearGPA" year="year1" />
    </div>
  );
}
