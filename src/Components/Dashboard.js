import "./Stylesheets/Dashboard.css";
import DashboardHeader from "./DashboardHeader";
import DashboardNumbers from "./DashboardNumbers";
import DashboardCharts from "./DashboardCharts";
import DashboardTeam from "./DashboardTeam";
import DashboardComparison from "./DashboardComparison";

const Dashboard = ({ width }) => {
  return (
    <div className="dashboard p-5">
      <DashboardHeader width={width} />
      <DashboardNumbers />
      <DashboardCharts />
      <div className="py-4 dash-details">
        <DashboardTeam />
        <DashboardComparison width={width} />
      </div>
    </div>
  );
};

export default Dashboard;
