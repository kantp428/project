"use client";
import Namedata from "@/components/Chart/Namedata";
import UserCreditTableChart from "@/components/Chart/UserCreditTableChart";
import UserTableChart from "@/components/Chart/UserTableChart";
import useFetchData from "@/hooks/useFetchData";
import { StudentProfile } from "@/types/student";
import { Typography, Button, Box, Paper, Grid } from "@mui/material";

export default function Home() {
  const { data, loading, error } = useFetchData<StudentProfile>(
    "/data/mockUser.json"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <Namedata data={data ? data.studentInfo : null} />

      <UserTableChart data={data} />
      <Box height={"20px"}></Box>
      <UserCreditTableChart data={data} />
    </>
  );
}
