"use client";
import React from "react";
import CourseChart from "@/components/Chart/CourseChart";
import GPAXChart from "@/components/Chart/GPAXChart";
import Table_enchage from "@/components/Table/Table_enchage";
import TableChart from "@/components/Table/TableChart";
import { Card, Divider, Grid, Box, Typography,Paper } from "@mui/material";
import { RadialLinearScale } from "chart.js";

const Namedata = () => {
  return (
 <Paper
        elevation={4}
        sx={{
          padding: 3,
          // backgroundColor: '#fafafa',
          borderRadius: 2,
          border: "1px solid #ddd",
          margin: "20px auto",
          Width: 1000,
        }}
      >
        <Grid container spacing={3}>
          {/* คอลัมน์ที่ 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              ข้อมูลสมาชิก
            </Typography>
            <Typography variant="body2"  sx={{ pl: 2 }}>
              รหัสนิสิต
              <br />
              ชื่อ-นามสกุล
              <br />
              <br />
              เบอร์โทรศัพท์ <br />
              อีเมล
              <br />
            </Typography>
          </Grid>

          {/* คอลัมน์ที่ 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              &nbsp;
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
              -<br />
              -<br />
              -<br />
              -<br />
              -<br />
            </Typography>
          </Grid>

          {/* คอลัมน์ที่ 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              &nbsp;
            </Typography>
            <Typography variant="body2"  sx={{ pl: 2 }}>
              คณะ
              <br />
              สาขาวิชา
              <br />
             หลักสูตร
              <br />
              อาจารย์ที่ปรึกษา
              <br />
              สถานภาพนิสิต
              <br />
            </Typography>
          </Grid>

          {/* คอลัมน์ที่ 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              &nbsp;
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
              -<br />
              -<br />
              -<br />
              -<br />
              -<br />
            </Typography>
          </Grid>
        
        </Grid>
      </Paper>


  )
    
};

export default Namedata;
