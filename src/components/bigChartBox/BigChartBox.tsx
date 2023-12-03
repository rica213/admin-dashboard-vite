import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    science: 4000,
    economics: 2400,
    electronic: 2400,
  },
  {
    name: "Mon",
    science: 3000,
    economics: 1398,
    electronic: 2210,
  },
  {
    name: "Tue",
    science: 2000,
    economics: 9800,
    electronic: 2290,
  },
  {
    name: "Wen",
    science: 2780,
    economics: 3908,
    electronic: 2000,
  },
  {
    name: "Thu",
    science: 1890,
    economics: 4800,
    electronic: 2181,
  },
  {
    name: "Fri",
    science: 2390,
    economics: 3800,
    electronic: 2500,
  },
  {
    name: "Sat",
    science: 3490,
    economics: 4300,
    electronic: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Borrowed Rate</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="science"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="economics"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
