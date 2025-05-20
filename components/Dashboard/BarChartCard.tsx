'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type BarChartCardProps = {
  title: string;
  value: string;
  change: {
    value: string;
    trend: 'up' | 'down' | 'neutral';
  };
  subtitle: string;
  data: Array<{ name: string; value: number }>;
  yAxisLabel?: string;
};

export default function BarChartCard({
  title,
  value,
  change,
  subtitle,
  data,
  yAxisLabel,
}: BarChartCardProps) {
  const theme = useTheme();
  
  // Calculate change color based on trend
  const getChangeColor = () => {
    if (change.trend === 'up') return 'success.main';
    if (change.trend === 'down') return 'error.main';
    return 'text.secondary';
  };

  // Calculate chart color based on trend with fallback colors
  const getChartColor = () => {
    // Default colors if theme.palette.chart is undefined
    const defaultColors = {
      up: '#4caf50',
      down: '#f44336',
      neutral: '#9e9e9e'
    };

    // Check if theme.palette and theme.palette.chart exist
    if (!theme.palette?.chart) {
      if (change.trend === 'up') return defaultColors.up;
      if (change.trend === 'down') return defaultColors.down;
      return defaultColors.neutral;
    }

    // Use theme colors if they exist, otherwise fall back to defaults
    if (change.trend === 'up') return theme.palette.chart[1] || defaultColors.up;
    if (change.trend === 'down') return theme.palette.chart[3] || defaultColors.down;
    return theme.palette.chart[4] || defaultColors.neutral;
  };

  const changeColor = getChangeColor();
  const chartColor = getChartColor();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            bgcolor: 'background.paper',
            p: 1.5,
            border: 1,
            borderColor: 'divider',
            borderRadius: 1,
            boxShadow: theme.shadows[3],
          }}
        >
          <Typography variant="subtitle2">{label}</Typography>
          <Typography variant="body2" color="text.secondary">
            {`Value: ${payload[0].value.toLocaleString()}`}
          </Typography>
        </Box>
      );
    }
    return null;
  };

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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="medium"
            gutterBottom
          >
            {title}
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
        <Typography variant="h3" component="div" fontWeight="bold" sx={{ mb: 1 }}>
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {subtitle}
        </Typography>
        <Box sx={{ height: 300, width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                tickLine={false}
                axisLine={{ stroke: theme.palette.divider }}
                tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
              />
              <YAxis 
                tickLine={false}
                axisLine={{ stroke: theme.palette.divider }}
                tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                label={yAxisLabel ? { 
                  value: yAxisLabel, 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fill: theme.palette.text.secondary, fontSize: 12 }
                } : undefined}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="value" 
                fill={chartColor} 
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}