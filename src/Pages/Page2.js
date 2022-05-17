import Dashboard from "../Components/Dashboard";
import SideBar from "../Components/SideBar";

const Page2 = ({ width }) => {
  return (
    <>
      <SideBar width={width} />
      <Dashboard width={width} />
    </>
  );
};

export default Page2;
