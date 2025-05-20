"use client";

import { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Badge,
  TextField,
  Button,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// Icons
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

type DashboardHeaderProps = {
  handleDrawerToggle: () => void;
};

export default function DashboardHeader({
  handleDrawerToggle,
}: DashboardHeaderProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [department, setDepartment] = useState('');
  const [academicYear, setAcademicYear] = useState('');

  const handleSubmit = () => {
    console.log("ภาควิชา:", department);
    console.log("ปีการศึกษา:", academicYear);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <TextField
          label="ภาควิชา"
          size="small"
          variant="outlined"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <TextField
          label="ปีการศึกษา"
          size="small"
          variant="outlined"
          value={academicYear}
          onChange={(e) => setAcademicYear(e.target.value)}
        />

        <Button variant="contained" onClick={handleSubmit}>
          ตกลง
        </Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            border: 1,
            borderColor: 'divider',
            borderRadius: theme.shape.borderRadius,
            padding: '6px 12px',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: alpha(theme.palette.common.black, 0.04),
            },
          }}
        >

          <CalendarTodayIcon
            sx={{ fontSize: 20, marginRight: 1, color: 'text.secondary' ,display: { xs: 'none', sm: 'block' } }}
          />
          <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
            {new Date().toLocaleDateString('th-TH', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            })}
          </Typography>

        </Box>

        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <PersonIcon />
          </Badge>
        </IconButton>
      </Box>
    </Box>
  );
}
