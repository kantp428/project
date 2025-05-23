'use client';
import * as React from 'react';
import useFetchData from '@/hooks/useFetchData';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { Card } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { Divider, Grid, Typography } from "@mui/material";

interface Data {
  id: number;
  code: string;
  entry: number;
  studying: number;
  graduated: number;
  failed: number;
}

function createData(
  id: number,
  code: string,
  entry: number,
  studying: number,
  graduated: number,
  failed: number,
): Data {
  return {
    id,
    code,
    entry,
    studying,
    graduated,
    failed,
  };
}

type StatusData = {
  [code: string]: {
    entry: string;
    studying: string;
    graduated: string;
    failed: string;
  };
};

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  { id: 'code', numeric: false, disablePadding: true, label: 'Code' },
  { id: 'entry', numeric: true, disablePadding: false, label: 'Entry' },
  { id: 'studying', numeric: true, disablePadding: false, label: 'Studying' },
  { id: 'graduated', numeric: true, disablePadding: false, label: 'Graduated' },
  { id: 'failed', numeric: true, disablePadding: false, label: 'Failed' },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
      
      {/*<TableCell />
      <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>*/}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

{/*function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        { pl: { sm: 2 }, pr: { xs: 1, sm: 1 } },
        numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          จำนวนนิสิต (คน)
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete"><IconButton><DeleteIcon /></IconButton></Tooltip>
      ) : (
        <Tooltip title="Filter list"><IconButton><FilterListIcon /></IconButton></Tooltip>
      )}
    </Toolbar>
  );
}*/}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('code');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const {
    data: statusData,
    loading,
    error,
  } = useFetchData<StatusData>('/data/mockStatusSudent.json');

  const rows = React.useMemo(() => {
    if (!statusData) return [];
    return Object.entries(statusData).map(([code, value], index) =>
      createData(
        index + 1,
        code,
        parseInt(value.entry),
        parseInt(value.studying),
        parseInt(value.graduated),
        parseInt(value.failed)
      )
    );
  }, [statusData]);

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [rows, order, orderBy, page, rowsPerPage]
  );

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  if (loading) return <div>Loading...</div>;
  if (!statusData) return <div>No data found</div>;

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '100%' }}>
      {/*<TableContainer sx={{ overflowX: 'auto' }}>*/}
      {/* <Card sx={{ width: '100%', mb: 2 }}> */}
        {/*<EnhancedTableToolbar numSelected={selected.length} />*/}
        
        <Table sx={{ width: '100%', tableLayout: 'fixed' }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/*{visibleRows.map((row, index) => {*/}
                {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    //onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    
                   {/*<TableCell />
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>*/}
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.code}
                    </TableCell>
                    <TableCell align="right">{row.entry}</TableCell>
                    <TableCell align="right">{row.studying}</TableCell>
                    <TableCell align="right">{row.graduated}</TableCell>
                    <TableCell align="right">{row.failed}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  {/*<TableCell colSpan={6} />*/}
                </TableRow>
              )}
            </TableBody>
          </Table>
          {/*</TableContainer>*/}
        
        {/* <TablePagination 
          // rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          
        /> */}
      {/* </Card> */}
      {/*<FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />*/}
    </Box>
  );
}
