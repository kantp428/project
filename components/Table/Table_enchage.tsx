"use client";
import CourseChart from "@/components/Chart/CourseChart";
import GPAXChart from "@/components/Chart/GPAXChart";
import TableChart from "@/components/Table/TableChart";

import React from "react";
import { Typography, Button, Box, Paper, Grid } from "@mui/material";

const Table_enchage = () => {
  return (
    <>
    <Paper  sx={{
          padding: 3,
          // backgroundColor: '#fafafa',
          borderRadius: 2,
          border: "1px solid #ddd",
          margin: "20px auto",
          Width: 1000,
        }}>
          <Typography>จำนวนิสิต (คน)</Typography>
      <Grid container columnSpacing={2}>
      <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
        <CourseChart />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
        <TableChart />
      </Grid>
      </Grid>
    </Paper>
     
    </>
  );
};

export default Table_enchage;
