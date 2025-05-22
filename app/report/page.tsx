import CourseChart from "@/components/Chart/CourseChart";
import GPAXChart from "@/components/Chart/GPAXChart";
import Table_enchage from "@/components/Table/Table_enchage";
import TableChart from "@/components/Table/TableChart";
import { Card, Divider, Grid, Box, Typography } from "@mui/material";
import { RadialLinearScale } from "chart.js";
import React from "react";
import Gpadata from "@/components/Chart/gpadata";
const gpaData = [
  { label: "3.25-4.00", count: 41, color: "#6DD3EC" },
  { label: "2.00-3.24", count: 164, color: "#8CD790" },
  { label: "1.75-1.99", count: 12, color: "#FFA552" },
  { label: "0.00-1.74", count: 13, color: "#FF6F61" },
];
const page = () => {
  return (
    <>
      
      
      <Grid container columnSpacing={2}>
        <Grid item xs={12} sx={{ marginBottom: 3 }}>
          <Gpadata />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
          <GPAXChart type="yearGPA" year="year1" title="ช่วงเกรดนิสิตปีที่ 1" />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
          <GPAXChart type="yearGPA" year="year2" title="ช่วงเกรดนิสิตปีที่ 2" />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
          <GPAXChart type="yearGPA" year="year3" title="ช่วงเกรดนิสิตปีที่ 3" />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
          <GPAXChart type="yearGPA" year="year4" title="ช่วงเกรดนิสิตปีที่ 4" />
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ marginTop: 2, marginBottom: 4 }} />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
          <GPAXChart type="studyingGPA" title="สถานภาพนิสิต ณ ปัจจุบัน" />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
          <GPAXChart type="graduatedGPA" title="สถานภาพนิสิตจบการศึกษา" />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: 3 }}>
          <Table_enchage />
        </Grid>
      </Grid>
    </>
  );
};

export default page;
