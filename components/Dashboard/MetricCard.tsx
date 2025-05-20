'use client';

import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

type MetricCardProps = {
  title: string;
  value: string;
  change: {
    value: string;
    trend: 'up' | 'down' | 'neutral';
  };
  subtitle: string;
  data: Array<{ name: string; value: number }>;
};

export default function MetricCard({
  title,
  value,
  change,
  subtitle,
  data,
}: MetricCardProps) {
  const theme = useTheme();
  
  // Calculate change color based on trend
  const getChangeColor = () => {
    if (change.trend === 'up') return 'success.main';
    if (change.trend === 'down') return 'error.main';
    return 'text.secondary';
  };

  // Calculate chart color based on trend
  const getChartColor = () => {
    if (change.trend === 'up') return '#4caf50';
    if (change.trend === 'down') return '#f44336';
    return '#9e9e9e';
  };

  const changeColor = getChangeColor();
  const chartColor = getChartColor();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          fontWeight="medium"
          gutterBottom
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            mb: 1,
          }}
        >
          <Typography variant="h3" component="div" fontWeight="bold">
            {value}
          </Typography>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              backgroundColor: alpha(
                theme.palette[change.trend === 'up' ? 'success' : change.trend === 'down' ? 'error' : 'grey'].main,
                0.1
              ),
            }}
          >
            <Typography
              variant="caption"
              fontWeight="bold"
              sx={{ color: changeColor }}
            >
              {change.value}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {subtitle}
        </Typography>
        <Box sx={{ height: 80 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColor} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={chartColor}
                strokeWidth={2}
                fillOpacity={1}
                fill={`url(#gradient-${title})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}