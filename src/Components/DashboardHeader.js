import { Button } from "reactstrap";
import { ReactComponent as UserIcon } from "./SVGs/user-svgrepo-com.svg";
import { ReactComponent as AddIcon } from "./SVGs/e-add.svg";

const DashboardHeader = ({ width }) => {
  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h2 className="color-dark">Dashboard</h2>
          <small className="color-grey">Welcome back, Andrew</small>
        </div>
        <div>
          <Button size="sm" className="bg-green mx-1 add-btn">
            <AddIcon style={{ height: "18px" }} />{" "}
            {width > 750 || width < 450 ? "Add Unit" : ""}
          </Button>
          <UserIcon className="user-icon mx-3" />
          {width > 700 ? (
            <small className="color-grey">Andrew Johnstons</small>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
