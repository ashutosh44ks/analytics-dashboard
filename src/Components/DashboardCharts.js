import { ReactComponent as UpIcon } from "./SVGs/up-svgrepo-com.svg";
import { ReactComponent as DownIcon } from "./SVGs/down-svgrepo-com.svg";
import { ReactComponent as StockDownIcon } from "./SVGs/stock-down-svgrepo-com.svg";
import { ReactComponent as StockUpIcon } from "./SVGs/stock-up-svgrepo-com.svg";

const DashboardCharts = () => {
  return (
    <div className="dash-charts p-4">
      <div className="dash-chart">
        <div className="dash-chart-country mb-3">Italy</div>
        <h4 className="color-dark">
          475
          <UpIcon className="dash-trend svg-green ms-1" />
        </h4>
        <div>
          <StockUpIcon className="svg-green" />
        </div>
      </div>
      <div className="dash-chart">
        <div className="dash-chart-country mb-3">United States</div>
        <h4 className="color-dark">
          431
          <UpIcon className="dash-trend svg-green ms-1" />
        </h4>
        <div>
          <StockUpIcon className="svg-green" />
        </div>
      </div>
      <div className="dash-chart">
        <div className="dash-chart-country mb-3">Canada</div>
        <h4 className="color-dark">
          174
          <DownIcon className="dash-trend svg-red ms-1" />
        </h4>
        <div>
          <StockDownIcon className="svg-red" />
        </div>
      </div>
      <div className="dash-chart">
        <div className="dash-chart-country mb-3">Spain</div>
        <h4 className="color-dark">
          475
          <UpIcon className="dash-trend svg-green ms-1" />
        </h4>
        <div>
          <StockUpIcon className="svg-green" />
        </div>
      </div>
      <div className="dash-chart">
        <div className="dash-chart-country mb-3">Japan</div>
        <h4 className="color-dark">
          134
          <UpIcon className="dash-trend svg-green ms-1" />
        </h4>
        <div>
          <StockUpIcon className="svg-green" />
        </div>
      </div>
      <div className="dash-chart">
        <div className="dash-chart-country mb-3">South Africa</div>
        <h4 className="color-dark">
          431
          <DownIcon className="dash-trend svg-red ms-1" />
        </h4>
        <div>
          <StockDownIcon className="svg-red" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
