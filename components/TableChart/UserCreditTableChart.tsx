"use client";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { StudentProfile } from "@/types/student";
import CreditTable from "../Table/CreditTable";
import UserGPAbyCreditChart from "../Chart/UserGPAbyCreditChart";

type UserCreditTableChartProp = {
  data: StudentProfile | null;
};

const UserCreditTableChart: React.FC<UserCreditTableChartProp> = ({ data }) => {
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
          ผลการเรียนแต่ละหมวดวิชา
        </Typography>
        <CardContent>
          <Grid container>
            <Grid item xs={12} mb={3}>
              <UserGPAbyCreditChart data={data?.subjectCategories || []} />
            </Grid>
            <Grid item xs={12} mb={3}>
              <CreditTable data={data?.subjectCategories || []} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default UserCreditTableChart;
