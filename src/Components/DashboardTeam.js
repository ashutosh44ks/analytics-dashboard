import { Button } from "reactstrap";
import { ReactComponent as UserIcon } from "./SVGs/metrics.svg";

const DashboardTeam = () => {
  return (
    <div className="dash-details-card me-3">
      <div className="dash-members-head">
        <h4 className="color-dark">Team Members</h4>
        <small className="color-blue">View All</small>
      </div>
      <div>
        <div className="dash-member-card mb-2 p-1">
          <div>
            <UserIcon className="user-icon" />
            <small>Andrew Johnston</small>
          </div>
          <Button size="sm" className="rounded-pill">Top Trader</Button>
        </div>
        <div className="dash-member-card mb-2 p-1">
          <div>
            <UserIcon className="user-icon" />
            <small>Anna Atkinsons</small>
          </div>
          <Button size="sm" className="rounded-pill">
            Top Trader
          </Button>
        </div>
        <div className="dash-member-card mb-2 p-1">
          <div>
            <UserIcon className="user-icon" />
            <small>Mark Atkinsons</small>
          </div>
          <Button size="sm" className="rounded-pill">
            Manager
          </Button>
        </div>
        <div className="dash-member-card mb-2 p-1">
          <div>
            <UserIcon className="user-icon" />
            <small>Johanna Tairons</small>
          </div>
          <Button size="sm" className="rounded-pill">
            Top Trader
          </Button>
        </div>
        <div className="dash-member-card mb-2 p-1">
          <div>
            <UserIcon className="user-icon" />
            <small>Name</small>
          </div>
          <Button size="sm" className="rounded-pill">
            Manager
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTeam;