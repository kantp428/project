import CourseChart from "@/components/Chart/CourseChart";
import GPAXChart from "@/components/Chart/GPAXChart";
import Table_enchage from "@/components/Table/Table_enchage";
import TableChart from "@/components/Table/TableChart";
import { Card, Divider, Grid, Box } from "@mui/material";
import { RadialLinearScale } from "chart.js";
import React from "react";

const page = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
            }}
          >
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    // borderRadius: "8px 0px 8px 0px",
                    // border: "8px 0px 0px 0px",
                    borderTop: "4px solid orange",
                    borderRight: "4px solid orange",
                    borderBottom: "4px solid orange",
                    borderLeft: "4px  solid orange",
                  }}
                >
                  ddddd
                </Box>
              </Grid>
             
              <Grid item xs={6}>
                <Box
                  sx={{
                    // borderRadius: "8px 0px 8px 0px",
                    // border: "8px 0px 0px 0px",
                     borderRight: "4px solid orange",
                    borderTop: "4px solid orange",
                    borderBottom: "4px solid orange",
                   
                  }}
                >ddddd</Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    // borderRadius: "8px 0px 8px 0px",
                    // border: "8px 0px 0px 0px",
                 
                     borderRight: "4px solid orange",
                    borderBottom: "4px solid orange",
                    borderLeft: "4px  solid orange",
                  }}
                >ddddd</Box>
              </Grid>
               <Grid item xs={6}>
                <Box
                  sx={{
                    // borderRadius: "8px 0px 8px 0px",
                    // border: "8px 0px 0px 0px",
                   
                    borderRight: "4px solid orange",
                    borderBottom: "4px solid orange"
                    
                  }}
                >ddddd</Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
            }}
          >
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    // borderRadius: "8px 0px 8px 0px",
                    // border: "8px 0px 0px 0px",
                    borderTop: "4px solid orange",
                    borderRight: "4px solid orange",
                    borderBottom: "4px solid orange",
                    borderLeft: "4px  solid orange",
                  }}
                >ddddd</Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    // borderRadius: "8px 0px 8px 0px",
                    // border: "8px 0px 0px 0px",
                    
                    borderRight: "4px solid orange",
                    borderBottom: "4px solid orange",
                    borderLeft: "4px  solid orange",
                  }}
                >ddddd</Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
            }}
          >
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    // borderRadius: "8px 0px 8px 0px",
                    // border: "8px 0px 0px 0px",
                    borderTop: "4px solid orange",
                    borderRight: "4px solid orange",
                    borderBottom: "4px solid orange",
                    borderLeft: "4px  solid orange",
                  }}
                >ddddd</Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    // borderRadius: "8px 0px 8px 0px",
                    // border: "8px 0px 0px 0px",
                    
                    borderRight: "4px solid orange",
                    borderBottom: "4px solid orange",
                    borderLeft: "4px  solid orange",
                  }}
                >ddddd</Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
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
