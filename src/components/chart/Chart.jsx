import React from "react";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {useSelector} from 'react-redux';
import {selectTheme} from '../../features/adminSettings/adminSlice';

const Chart = ({aspect, title}) => {
  const isDarkMode = useSelector(selectTheme);

  const data = [
    { name: "Jan", total: 1250 },
    { name: "Feb", total: 2100 },
    { name: "Mar", total: 3222 },
    { name: "Apr", total: 980 },
    { name: "May", total: 2150 },
    { name: "Jun", total: 1134 },
  ];

  return (
    <div className="chart">
      <h1 className="title">{title}</h1>
      <ResponsiveContainer width="100%"  aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={isDarkMode ? " #e2cda7": "#21B6D0"} stopOpacity={0.8} />
              <stop offset="95%" stopColor={isDarkMode ? " #e2cda7": "#21B6D0"} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray"/>
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke={isDarkMode ? " #e2cda7": "#21B6D0"}
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
