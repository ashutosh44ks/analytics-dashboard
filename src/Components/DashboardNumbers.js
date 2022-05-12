import { ReactComponent as BitcoinIcon } from "./SVGs/bitcoin-2.svg";
import { ReactComponent as DollarIcon } from "./SVGs/currency-dollar.svg";
import { ReactComponent as EuroIcon } from "./SVGs/currency-euro.svg";
import { ReactComponent as YenIcon } from "./SVGs/currency-yen.svg";

const DashboardNumbers = () => {
  return (
    <div className="dash-numbers py-4">
      <div className="dash-number-b dash-number">
        <small className="color-grey">BALANCE</small>
        <h4 className="color-dark pt-3">$5900.00</h4>
      </div>
      <div className="dash-number-b dash-number">
        <small className="color-grey">PROFITS</small>
        <h4 className="color-dark pt-3">$950.00</h4>
      </div>
      <div className="dash-number-b dash-number">
        <small className="color-grey">LOSSES</small>
        <h4 className="color-dark pt-3">$450.00</h4>
      </div>
      <div className="dash-number">
        <small className="color-grey">CURRENCIES</small>
        <h4 className="color-dark pt-3">
          <BitcoinIcon className="currency-icon me-2" />
          <DollarIcon className="currency-icon me-2" />
          <EuroIcon className="currency-icon me-2" />
          <YenIcon className="currency-icon me-2" />
        </h4>
      </div>
    </div>
  );
};

export default DashboardNumbers;
