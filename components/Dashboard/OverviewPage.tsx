'use client';

import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import MetricCard from './MetricCard';
import BarChartCard from './BarChartCard';
import LineChartCard from './LineChartCard';

// Sample data
const generateChartData = (
  length: number,
  min: number,
  max: number,
  trend: 'up' | 'down' | 'random'
) => {
  const data = [];
  let value = Math.floor(Math.random() * (max - min) + min);

  for (let i = 0; i < length; i++) {
    // Modify the value based on the trend
    if (trend === 'up') {
      value += Math.floor(Math.random() * 10) - 2; // Bias toward increase
    } else if (trend === 'down') {
      value -= Math.floor(Math.random() * 10) - 2; // Bias toward decrease
    } else {
      value += Math.floor(Math.random() * 20) - 10; // Random change
    }

    // Keep value within bounds
    value = Math.max(min, Math.min(max, value));

    data.push({
      name: String.fromCharCode(65 + i),
      value,
    });
  }

  return data;
};

// Generate month names for X-axis
const generateMonthData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const data = [];
  
  for (let i = 0; i < months.length; i++) {
    data.push({
      name: months[i],
      value: Math.floor(Math.random() * 15000) + 5000,
    });
  }
  
  return data;
};

export default function OverviewPage() {
  const theme = useTheme();

  // Chart data for dashboard metrics
  const usersData = generateChartData(20, 200, 500, 'up');
  const conversionsData = generateChartData(20, 30, 60, 'down');
  const eventsData = generateChartData(20, 150, 250, 'random');
  const sessionsData = generateChartData(30, 8000, 22000, 'up');
  const downloadsData = generateMonthData();

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        fontWeight="bold"
        sx={{ mb: 3 }}
      >
        Overview
      </Typography>

      <Grid container spacing={3}>
        {/* Key metrics */}
        <Grid item xs={12} sm={6} md={4}>
          <MetricCard
            title="Users"
            value="14k"
            change={{ value: "+25%", trend: "up" }}
            subtitle="Last 30 days"
            data={usersData}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MetricCard
            title="Conversions"
            value="325"
            change={{ value: "-25%", trend: "down" }}
            subtitle="Last 30 days"
            data={conversionsData}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MetricCard
            title="Event count"
            value="200k"
            change={{ value: "+5%", trend: "up" }}
            subtitle="Last 30 days"
            data={eventsData}
          />
        </Grid>

        {/* Data insights card */}
        <Grid item xs={12} md={5}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
                  Explore your data
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Uncover performance and visitor insights with our data wizardry.
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Button 
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                size="large"
                sx={{ 
                  alignSelf: 'flex-start',
                  mt: 2, 
                  px: 3,
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem'
                }}
              >
                Get insights
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Sessions chart */}
        <Grid item xs={12} md={7}>
          <LineChartCard
            title="Sessions"
            value="13,277"
            change={{ value: "+35%", trend: "up" }}
            subtitle="Sessions per day for the last 30 days"
            data={sessionsData}
          />
        </Grid>

        {/* Downloads chart */}
        <Grid item xs={12}>
          <BarChartCard
            title="Page views and downloads"
            value="1.3M"
            change={{ value: "-8%", trend: "down" }}
            subtitle="Page views and downloads for the last 6 months"
            data={downloadsData}
            yAxisLabel="Views"
          />
        </Grid>
      </Grid>
    </>
  );
}