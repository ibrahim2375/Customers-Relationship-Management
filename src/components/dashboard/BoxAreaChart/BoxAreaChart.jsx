/* eslint-disable react/prop-types */
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//icons
import { LuAreaChart } from "react-icons/lu";
//css style
import "./BoxAreaChart.css";
function BoxAreaChart(props) {
  return (
    <div className="box-area-chart">
      {/* title */}
      <div className="title">
        <LuAreaChart />
        <h4>{props.title}</h4>
      </div>
      {/* chart */}
      <div className="box-chart">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            width={500}
            height={400}
            data={props.chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{ background: "transparent", border: "none" }} />
            <Area
              type="monotone"
              dataKey={props.areaDataKey1}
              stackId="1"
              stroke={props.areaDataKey1Stroke}
              fill={props.areaDataKey1Bg}
            />
            <Area
              type="monotone"
              dataKey={props.areaDataKey2}
              stackId="1"
              stroke={props.areaDataKey2Stroke}
              fill={props.areaDataKey2Bg}
            />
            {/* <Area
              type="monotone"
              dataKey={props.areaDataKey3}
              stackId="1"
              stroke={props.areaDataKey3Stroke}
              fill={props.areaDataKey1Bg}
            /> */}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BoxAreaChart;
