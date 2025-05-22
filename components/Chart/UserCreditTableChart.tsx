"use client";
import { Card, CardContent, Grid } from "@mui/material";
import UserGPAbyCreditChart from "./UserGPAbyCreditChart";
import useFetchData from "@/hooks/useFetchData";
import { StudentProfile } from "@/types/student";
import CreditTable from "../Table/CreditTable";

const UserCreditTableChart = () => {
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
          paddingX: 1,
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
