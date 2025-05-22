"use client";
import React from "react";
import CourseChart from "@/components/Chart/CourseChart";
import GPAXChart from "@/components/Chart/GPAXChart";
import Table_enchage from "@/components/Table/Table_enchage";
import TableChart from "@/components/Table/TableChart";
import { Card, Divider, Grid, Box, Typography } from "@mui/material";
import { RadialLinearScale } from "chart.js";

const Gpadata = () => {
  return (
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
                  borderTop: "2px solid orange",
                  borderRight: "2px solid orange",
                  borderBottom: "2px solid orange",
                  borderLeft: "2px  solid orange",
                  pr: 2,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#6DD3EC", textAlign: "center" }}
                >
                  3.25-4.00
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#6DD3EC",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  41
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#6DD3EC", textAlign: "right" }}
                >
                  คน
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  // borderRadius: "8px 0px 8px 0px",
                  // border: "8px 0px 0px 0px",
                  borderRight: "2px solid orange",
                  borderTop: "2px solid orange",
                  borderBottom: "2px solid orange",
                  pr: 2,
                }}
              >
                {" "}
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#8CD790", textAlign: "center" }}
                >
                  3.25-4.00
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#8CD790",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  164
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#8CD790", textAlign: "right" }}
                >
                  คน
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  // borderRadius: "8px 0px 8px 0px",
                  // border: "8px 0px 0px 0px",
                  pr: 2,
                  borderRight: "2px solid orange",
                  borderBottom: "2px solid orange",
                  borderLeft: "2px  solid orange",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#FFA552", textAlign: "center" }}
                >
                  1.75-1.99
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#FFA552",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  12
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#FFA552", textAlign: "right" }}
                >
                  คน
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  // borderRadius: "8px 0px 8px 0px",
                  // border: "8px 0px 0px 0px",
                  pr: 2,
                  borderRight: "2px solid orange",
                  borderBottom: "2px solid orange",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#FF6F61", textAlign: "center" }}
                >
                  0.00-1.74
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#FF6F61",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  13
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#FF6F61", textAlign: "right" }}
                >
                  คน
                </Typography>
              </Box>
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
                  pr: 2,
                  borderTop: "2px solid orange",
                  borderRight: "2px solid orange",
                  borderBottom: "2px solid orange",
                  borderLeft: "2px  solid orange",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#3BB273", textAlign: "center" }}
                >
                  ตามเเผน
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#3BB273",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  133
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#3BB273", textAlign: "right" }}
                >
                  คน
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  // borderRadius: "8px 0px 8px 0px",
                  // border: "8px 0px 0px 0px",
                  pr: 2,
                  borderRight: "2px solid orange",
                  borderBottom: "2px solid orange",
                  borderLeft: "2px  solid orange",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#E04F5F", textAlign: "center" }}
                >
                  ไม่ตามเเผน
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#E04F5F",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  97
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#E04F5F", textAlign: "right" }}
                >
                  คน
                </Typography>
              </Box>
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
                  pr: 2,
                  borderTop: "2px solid orange",
                  borderRight: "2px solid orange",
                  borderBottom: "2px solid orange",
                  borderLeft: "2px  solid orange",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#2E4668", textAlign: "center" }}
                >
                  จบการศึกษา
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#2E4668",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  136
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#2E4668", textAlign: "right" }}
                >
                  คน
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  // borderRadius: "8px 0px 8px 0px",
                  // border: "8px 0px 0px 0px",
                  pr: 2,
                  borderRight: "2px solid orange",
                  borderBottom: "2px solid orange",
                  borderLeft: "2px  solid orange",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#B94845", textAlign: "center" }}
                >
                  พ้นสภาพ
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#B94845",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  55
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#B94845", textAlign: "right" }}
                >
                  คน
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Gpadata;
