"use client";
import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
  TableSortLabel,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

interface Data {
  id: number;
  name: string;
  program: string;
  credits: string;
  gpa: number;
}

function createData(
  id: number,
  name: string,
  program: string,
  credits: string,
  gpa: number
): Data {
  return { id, name, program, credits, gpa };
}

const rows = [
  createData(1, "นายเอ ตัวอย่าง", "แผน ก1 (วิจัยล้วน)", "147/161", 2.06),
  createData(2, "นางสาวบี ทดสอบ", "แผน ก2 (ทำวิทยานิพนธ์)", "147/161", 2.72),
  createData(3, "นายซี สอบตก", "แผน ก2 (ทำวิทยานิพนธ์)", "147/161", 2.38),
  createData(4, "นางสาวดี รายงาน", "แผน ก2 (ทำวิทยานิพนธ์)", "147/161", 3.08),
  createData(5, "นายอี สอบผ่าน", "แผน ก2 (ทำวิทยานิพนธ์)", "147/161", 2.75),
  createData(6, "นางสาวเอฟ จบแล้ว", "แผน ก2 (ทำวิทยานิพนธ์)", "147/161", 2.33),
  createData(7, "นายจี สอบตก", "แผน ก2 (ทำวิทยานิพนธ์)", "147/161", 2.38),
  createData(8, "นางสาวเอ็จ รายงาน", "แผน ก2 (ทำวิทยานิพนธ์)", "147/161", 3.18),
  createData(9, "นายไอ สอบผ่าน", "แผน ก1 (วิจัยล้วน)", "147/161", 2.65),
  createData(10, "นายเจ สอบตก", "แผน ก1 (วิจัยล้วน)", "147/161", 2.46),
  createData(11, "นางสาวเค รายงาน", "แผน ก2 (ทำวิทยานิพนธ์)", "147/161", 3.58),
  createData(12, "นายอแอว สอบผ่าน", "แผน ก1 (วิจัยล้วน)", "147/161", 2.15),
];

type Order = "asc" | "desc";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  const aValue = orderBy === "gpa" ? parseFloat(a[orderBy] as any) : a[orderBy];
  const bValue = orderBy === "gpa" ? parseFloat(b[orderBy] as any) : b[orderBy];
  if (bValue < aValue) return -1;
  if (bValue > aValue) return 1;
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  { id: "id", numeric: false, label: "ลำดับ" },
  { id: "name", numeric: false, label: "ชื่อ-นามสกุล" },
  { id: "program", numeric: false, label: "ประเภทแผนการศึกษา" },
  {
    id: "credits",
    numeric: false,
    label: "หน่วยกิตที่เรียน (เรียนแล้ว/ทั้งหมด)",
  },
  { id: "gpa", numeric: true, label: "GPA" },
];

interface EnhancedTableProps {
  order: Order;
  orderBy: string;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              width: headCell.id === "id" ? 80 : "auto",
              minWidth: headCell.id === "id" ? 80 : undefined,
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "เรียงจากมากไปน้อย" : "เรียงจากน้อยไปมาก"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell>รายละเอียด</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchText, setSearchText] = React.useState("");

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setPage(0);
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const visibleRows = React.useMemo(
    () =>
      [...filteredRows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [filteredRows, order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          จำนวนนิสิต (คน)
        </Typography>
        <TextField
          fullWidth
          label="ค้นหาชื่อ-นามสกุล"
          variant="outlined"
          value={searchText}
          onChange={handleSearchChange}
          sx={{ mb: 2 }}
        />
        <TableContainer component={Paper}>
          <Table>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleRows.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  sx={{ borderBottom: "1px solid #e0e0e0" }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.program}</TableCell>
                  <TableCell>{row.credits}</TableCell>
                  <TableCell align="center">{row.gpa.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button variant="contained" size="small">
                      รายละเอียด
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {visibleRows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    ไม่พบข้อมูลที่ค้นหา
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
