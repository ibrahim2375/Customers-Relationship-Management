//components
import BoxLineChart from "../../components/dashboard/BoxLineChart/BoxLineChart";
import BoxBarChart from "../../components/dashboard/BoxBarChart/BoxBarChart";
import BoxPieChart from "../../components/dashboard/BoxPieChart/BoxPieChart";
//css style
import "./Dashboard.css";
//data source files
import {
  tinyCartDataTotalIncome,
  tinyCartDataTotalExpence,
  companiesData,
  customersData,
  BoxBarChartData,
  BoxAreaChartData,
} from "../../data";
import BoxAreaChart from "../../components/dashboard/BoxAreaChart/BoxAreaChart";
function Dashboard() {
  return (
    <div className="dashboard">
      <header>
        <h2>Dashboard</h2>
      </header>
      <div className="dashboard-content">
        {/* Total Income */}
        <div className="box box1">
          <BoxLineChart {...tinyCartDataTotalIncome} />
        </div>
        {/* Total Expence */}
        <div className="box box2">
          <BoxLineChart {...tinyCartDataTotalExpence} />
        </div>
        {/* Customers */}
        <div className="box box3">
          <BoxLineChart {...customersData} />
        </div>
        {/* Companies */}
        <div className="box box4">
          <BoxLineChart {...companiesData} />
        </div>
        {/* box area chart */}
        <div className="box box5">
          <BoxAreaChart {...BoxAreaChartData} />
        </div>
        {/* box pie chart */}
        <div className="box box6">
          <BoxPieChart />
        </div>
        <div className="box box7">box7</div>
        {/* bar for income vs expence */}
        <div className="box box8">
          <BoxBarChart {...BoxBarChartData} />
        </div>
        <div className="box box9">box9</div>
      </div>
    </div>
  );
}

export default Dashboard;
