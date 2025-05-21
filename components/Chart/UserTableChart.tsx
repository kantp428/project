"use client";
import { Card, Grid } from "@mui/material";
import UserGPAChart from "./UserGPAChart";
import useFetchData from "@/hooks/useFetchData";
import { StudentProfile } from "@/types/student";
import GPATable from "../Table/GPATable";

const UserTableChart = () => {
  const { data, loading, error } = useFetchData<StudentProfile>(
    "/data/mockUser.json"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6}>
            <UserGPAChart data={data?.academicRecords || []} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <GPATable data={data?.academicRecords || []} />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default UserTableChart;
