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
  return (
    <TableContainer component={Paper} elevation={2} sx={{ width: "100%", padding: 1}}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">Semester</TableCell>
            <TableCell align="center">Credits</TableCell>
            <TableCell align="center">GPA</TableCell>
            <TableCell align="center">GPAX</TableCell>
            <TableCell align="center">±GPAX</TableCell>
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
              <TableCell align="center">{record.GPAXChange.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GPATable;
