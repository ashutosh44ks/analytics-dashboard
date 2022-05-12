import { Progress } from "reactstrap";

const DashboardComparison = ({ width }) => {
  return (
    <div
      className={width > 800 ? "dash-details-card ms-3" : "dash-details-card pt-4"}
    >
      <div className="dash-comparison-head">
        <h4 className="color-dark">Comparison</h4>
        <small className="color-blue">View All</small>
      </div>
      <div className="dash-comparison-body p-3">
        <div className="p-2">
          <div>United States</div>
          <Progress value={90} />
        </div>
        <div className="p-2">
          <div>Italy</div>
          <Progress value={73} />
        </div>
        <div className="p-2">
          <div>Spain</div>
          <Progress value={13} />
        </div>
      </div>
    </div>
  );
};

export default DashboardComparison;
