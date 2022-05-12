import Dashboard from "../Components/Dashboard";
import SideBar from "../Components/SideBar";
import { useState, useEffect } from "react";

const Page2 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", resizeSetter);
    return () => {
      window.removeEventListener("resize", resizeSetter);
    };
  }, [width]);
  const resizeSetter = () => {
    setWidth(window.innerWidth);
  };
  return (
    <>
      <SideBar width={width} />
      <Dashboard width={width} />
    </>
  );
};

export default Page2;
