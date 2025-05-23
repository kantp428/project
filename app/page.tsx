"use client";
import CategoryChart from "@/components/Chart/CategoryChart";
import Namedata from "@/components/Chart/Namedata";
import UserCreditTableChart from "@/components/TableChart/UserCreditTableChart";
import UserTableChart from "@/components/TableChart/UserTableChart";
import useFetchData from "@/hooks/useFetchData";
import { StudentProfile } from "@/types/student";
import { Box, Grid } from "@mui/material";

export default function Home() {
  const { data, loading, error } = useFetchData<StudentProfile>(
    "/data/mockUser.json"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const getSummaryRow = () => {
    if (!data || !data.subjectCategories) {
      return {
        category: "ทั้งหมด",
        averageGPA: 0,
        totalCredits: 0,
        completedCredits: 0,
        incompleteCredits: 0,
      };
    }

    const categories = data.subjectCategories;

    const totalCredits = categories.reduce((sum, c) => sum + c.totalCredits, 0);
    const completedCredits = categories.reduce(
      (sum, c) => sum + c.completedCredits,
      0
    );
    const incompleteCredits = categories.reduce(
      (sum, c) => sum + c.incompleteCredits,
      0
    );
    const weightedGPA =
      categories.reduce(
        (sum, c) => sum + c.averageGPA * c.completedCredits,
        0
      ) / (completedCredits || 1);

    return {
      category: "ทั้งหมด",
      averageGPA: Number(weightedGPA.toFixed(2)),
      totalCredits,
      completedCredits,
      incompleteCredits,
    };
  };

  return (
    <>
      <Namedata data={data ? data.studentInfo : null} />

      <UserTableChart data={data} />
      <Box height={"20px"}></Box>
      <UserCreditTableChart data={data} />
      <Box height={"20px"}></Box>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={2}>
          <CategoryChart data={getSummaryRow()} />
        </Grid>
        {data?.subjectCategories.map((record, index) => (
          <Grid item xs={6} sm={6} md={2} key={index}>
            <CategoryChart data={record} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
