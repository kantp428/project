import CourseChart from "@/components/Chart/CourseChart";
import GPAXChart from "@/components/Chart/GPAXChart";
import { Divider, Grid } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <>
      <Grid container columnSpacing={2}>
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
          <Divider sx={{ marginTop: 2, marginBottom: 4}} />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
          <GPAXChart type="studyingGPA" title="สถานภาพนิสิต ณ ปัจจุบัน" />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
          <GPAXChart type="graduatedGPA" title="สถานภาพนิสิตจบการศึกษา" />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
          <CourseChart />
        </Grid>
      </Grid>
    </>
  );
};

export default page;
