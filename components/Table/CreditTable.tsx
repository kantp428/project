import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { SubjectCategory } from "@/types/student";
import { Bold } from "lucide-react";

type GPATableProps = {
  data: SubjectCategory[];
};

const CreditTable = ({ data }: GPATableProps) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <TableContainer
      component={Paper}
      elevation={1}
      sx={{ width: "100%", padding: 1 ,paddingBottom: 0,}}
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
              หมวดวิชา
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              เกรดเฉลี่ย
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              หน่วยกิตทั้งหมด
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#17cf3b", fontWeight: "bold" }}
            >
              จำนวนหน่วยกิตที่เรียนไปแล้ว
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#cf171a", fontWeight: "bold" }}
            >
              จำนวนหน่วยกิตที่ยังไม่ได้เรียน
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((record, index) => (
            <TableRow key={index}>
              <TableCell align="center">{record.category}</TableCell>
              <TableCell align="center">
                {record.averageGPA.toFixed(2)}
              </TableCell>
              <TableCell align="center">{record.totalCredits}</TableCell>
              <TableCell align="center" sx={{ color: "#17cf3b" }}>
                {record.completedCredits}
              </TableCell>
              <TableCell align="center" sx={{ color: "#cf171a" }}>
                {record.incompleteCredits}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CreditTable;
