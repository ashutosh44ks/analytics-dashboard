import "./Stylesheets/SideBar.css";
import { Button } from "reactstrap";
import { ReactComponent as DashboardIcon } from "./SVGs/metrics.svg";
import { ReactComponent as AnalyticsIcon } from "./SVGs/analytics.svg";
import { ReactComponent as TradingIcon } from "./SVGs/currency-exchange-2.svg";
import { ReactComponent as NotificationsIcon } from "./SVGs/sound-wave.svg";
import { ReactComponent as LogoutIcon } from "./SVGs/logout.svg";

const SideBar = ({ width }) => {
  return (
    <>
      {width >= 550 ? (
        <div className="sidebar py-3 px-2">
          <div>
            <Button className="sidemenu-btns color-grey p-2 my-1 active">
              <DashboardIcon />
              Dashboard
            </Button>
            <Button className="sidemenu-btns color-grey p-2 my-1">
              <AnalyticsIcon />
              Analytics
            </Button>
            <Button className="sidemenu-btns color-grey p-2 my-1">
              <TradingIcon />
              Trading
            </Button>
            <Button className="sidemenu-btns color-grey p-2 my-1">
              <NotificationsIcon />
              Notifications
            </Button>
          </div>

          <Button className="sidemenu-btns color-grey p-2 my-1">
            <LogoutIcon />
            Logout
          </Button>
        </div>
      ) : (
        <div className="sidebar py-2 px-2">
          <Button className="sidemenu-btns color-grey p-2 my-1 active">
            <DashboardIcon />
            Dashboard
          </Button>
          <Button className="sidemenu-btns color-grey p-2 my-1">
            <AnalyticsIcon />
            Analytics
          </Button>
          <Button className="sidemenu-btns color-grey p-2 my-1">
            <TradingIcon />
            Trading
          </Button>
          <Button className="sidemenu-btns color-grey p-2 my-1">
            <NotificationsIcon />
            Notifications
          </Button>

          <Button className="sidemenu-btns color-grey p-2 my-1">
            <LogoutIcon />
            Logout
          </Button>
        </div>
      )}
    </>
  );
};

export default SideBar;
