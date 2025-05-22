"use client";
import React from "react";
import {
  Card,
  Divider,
  Grid,
  Box,
  Typography,
  Paper,
  CardContent,
} from "@mui/material";
import { StudentInfo } from "@/types/student";

type NamedataProp = {
  data: StudentInfo | null;
};

const Namedata: React.FC<NamedataProp> = ({ data }) => {
  return (
    <Card
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
      <Typography variant="h6" gutterBottom>
        ข้อมูลสมาชิก
      </Typography>
      <CardContent>
        <Grid container spacing={3}>
          {/* Col 1 */}
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ pl: 2 }}>รหัสนิสิต:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>{data? data.studentId : "-"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ pl: 2 }}>ชื่อ - นามสกุล (ภาษาไทย):</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>{data? data.fullNameTH : "-"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ pl: 2 }}>ชื่อ - นามสกุล (ภาษาอังกฤษ):</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>{data? data.fullNameEN : "-"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ pl: 2 }}>เบอร์โทรศัพท์:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>{data? data.phone : "-"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ pl: 2 }}>อีเมล:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>{data? data.email : "-"}</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Col 2 */}
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ pl: 2 }}>คณะ:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>{data? data.faculty : "-"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ pl: 2 }}>สาขาวิชา:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>{data? data.major : "-"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ pl: 2 }}>หลักสูตร:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>{data? data.program : "-"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ pl: 2 }}>อาจารย์ที่ปรึกษา:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>{data? data.advisor : "-"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ pl: 2 }}>สถานภาพนิสิต:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>{data? data.status : "-"}</Typography>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Namedata;
