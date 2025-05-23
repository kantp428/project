"use client";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import UserGPAChart from "../Chart/UserGPAChart";
import useFetchData from "@/hooks/useFetchData";
import { StudentProfile } from "@/types/student";
import GPATable from "../Table/GPATable";

type UserTableChartProp = {
  data: StudentProfile | null;
};

const UserTableChart: React.FC<UserTableChartProp> = ({ data }) => {
  return (
    <>
      <Card
        sx={{
          paddingY: 1,
          paddingX: 1,
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        }}
      >
        <Typography variant="h6" gutterBottom mt={3} ml={3}>
          ผลการเรียนแต่ละภาคการศึกษา
        </Typography>
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
