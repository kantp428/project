import { Typography, Button ,Box ,Paper,Grid} from "@mui/material";

export default function Home() {
  return (
    <>
   <Paper
  elevation={4}
  sx={{
    padding: 3,
    // backgroundColor: '#fafafa',
    borderRadius: 2,
    border: '1px solid #ddd',
    margin: '20px auto',
    Width: 1000,
    
  }}
>
  <Grid container spacing={3}>
    {/* คอลัมน์ที่ 1 */}
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom  >ข้อมูลส่วนตัว</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
        รหัสประจำตัวนิสิต<br />
        ชื่อนามสกุล(ไทย)<br />
        ชื่อนามสกุล(อังกฤษ) <br />
        เพศ<br />
      </Typography>
    </Grid>

    {/* คอลัมน์ที่ 2 */}
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom>&nbsp;</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
        -<br />
        -<br />
        -<br />
        -<br />
      </Typography>
    </Grid>

    {/* คอลัมน์ที่ 3 */}
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom>ช่องทางการติดต่อ</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
        เบอร์โทรศัพท์<br />
        E-mail<br />
        เบอร์โทรศัพท์ผู้ปกครอง<br />
        
      </Typography>
    </Grid>

    {/* คอลัมน์ที่ 4 */}
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom>&nbsp;</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
        -<br />
        -<br />
        -<br />
        
      </Typography>
    </Grid>
     <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom>การศึกษาปัจจุบัน</Typography>
     <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
        อาจารย์ที่ปรึกษา<br />
        วิทยาเขต<br />
        คณะ<br />
        สาขาวิชา<br />
        ประเภทหลักสูตร<br />
        สถานภาพนิสิต<br />
        เกรดเฉลี่ยสะสม<br />
      </Typography>
    </Grid>

    {/* คอลัมน์ที่ 2 */}
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom>&nbsp;</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
        -<br />
        -<br />
        -<br />
        -<br />
        -<br />
        -<br />
        -<br />
      </Typography>
    </Grid>

    {/* คอลัมน์ที่ 3 */}
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom>การศึกษาระดับมัธยม</Typography>
     <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
        ชื่อโรงเรียน<br />
        ที่อยู่โรงเรียน<br />
        
      </Typography>
    </Grid>

    {/* คอลัมน์ที่ 4 */}
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom>&nbsp;</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
        -<br />
        -<br />
      </Typography>
    </Grid>
  </Grid>
  
</Paper>
   
    </>
  );
}
