"use client";
import { Card, CardContent, Grid } from "@mui/material";
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
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        }}
      >
        <CardContent>
          <Grid container>
            <Grid item xs={12} mb={3}>
              <UserGPAChart data={data?.academicRecords || []} />
            </Grid>
            <Grid item xs={12} mb={3}>
              <GPATable data={data?.academicRecords || []} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default UserTableChart;
