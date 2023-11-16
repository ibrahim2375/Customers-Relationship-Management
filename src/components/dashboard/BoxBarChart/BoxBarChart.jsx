/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
//icons
import { LuBarChartBig } from "react-icons/lu";
//css style
import "./BoxBarChart.css";
function BoxBarChart(props) {
  return (
    <div className="box-bar-chart">
      <div className="title">
        <LuBarChartBig />
        <h4>{props.title}</h4>
      </div>
      <div className="box-chart">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={props.chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{ background: "transparent", border: "none" }}
            />
            <Legend />
            <Bar
              dataKey={props.dataKey1}
              fill={props.dataKey1Bg}
              activeBar={
                <Rectangle fill="pink" stroke={props.dataKey1ActiveStroke} />
              }
            />
            <Bar
              dataKey={props.dataKey2}
              fill={props.dataKey2Bg}
              activeBar={
                <Rectangle fill="gold" stroke={props.dataKey2ActiveStroke} />
              }
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BoxBarChart;
