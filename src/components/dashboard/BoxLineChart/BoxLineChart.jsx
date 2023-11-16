/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
//icons
import { FaRegChartBar } from "react-icons/fa";
//css styles
import "./BoxLineChart.css";
function BoxLineChart(props) {
  return (
    <div className="box-line-chart">
      <div className="box-info">
        {/* title */}
        <div className="title">
          <FaRegChartBar />
          <h4>{props.title}</h4>
        </div>
        {/* number */}
        <h3 className="value">{props.value}</h3>
        <Link to={props.link} className="view-all">
          View All
        </Link>
      </div>
      <div className="box-chart">
        {/* chart */}
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.chartColor}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div
          className="percentage"
          style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
        >
          {props.percentage}%
        </div>
        <div className="duration">{props.duration}</div>
      </div>
    </div>
  );
}

export default BoxLineChart;
