'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type LineChartCardProps = {
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

export default function LineChartCard({
  title,
  value,
  change,
  subtitle,
  data,
  yAxisLabel,
}: LineChartCardProps) {
  const theme = useTheme();
  
  // Calculate change color based on trend
  const getChangeColor = () => {
    if (change.trend === 'up') return 'success.main';
    if (change.trend === 'down') return 'error.main';
    return 'text.secondary';
  };

  // Calculate chart color based on trend with fallbacks
  const getChartColor = () => {
    // Default colors if theme.palette.chart is undefined
    const defaultColors = {
      up: '#4caf50',    // success green
      down: '#f44336',  // error red
      neutral: '#9e9e9e' // neutral grey
    };

    if (!theme.palette?.chart) {
      return change.trend === 'up' ? defaultColors.up :
             change.trend === 'down' ? defaultColors.down :
             defaultColors.neutral;
    }

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
            <LineChart
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
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={chartColor} 
                strokeWidth={2}
                dot={{ r: 3, fill: chartColor, strokeWidth: 0 }}
                activeDot={{ r: 5, fill: chartColor, strokeWidth: 0 }}
                animationDuration={1500}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}