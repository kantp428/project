import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { AcademicRecord } from "@/types/student";

type GPATableProps = {
  data: AcademicRecord[];
};

const GPATable = ({ data }: GPATableProps) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <TableContainer
      component={Paper}
      elevation={2}
      sx={{ width: "100%", padding: 1, paddingBottom: 0, }}
    >
      <Table
        size="small"
        sx={{
          font: {
            size: isMobile ? 10 : 13,
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              ปีการศึกษา
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              ภาคการศึกษา
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              หน่วยกิต
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              GPA
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              GPAX
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              ± GPAX
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((record, index) => (
            <TableRow key={index}>
              <TableCell align="center">{record.year}</TableCell>
              <TableCell align="center">{record.semester}</TableCell>
              <TableCell align="center">{record.credits}</TableCell>
              <TableCell align="center">{record.GPA.toFixed(2)}</TableCell>
              <TableCell align="center">{record.GPAX.toFixed(2)}</TableCell>
              <TableCell
                align="center"
                sx={{ color: record.GPAXChange >= 0 ? "#17cf3b" : "#cf171a" }}
              >
                {record.GPAXChange > 0
                  ? `+${record.GPAXChange.toFixed(2)}`
                  : record.GPAXChange.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GPATable;
