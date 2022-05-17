import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import { useState, useEffect } from "react";

function App() {
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
    <Router>
      <Routes>
        <Route
          path="/analytics-dashboard"
          element={<Navigate replace to="/analytics-dashboard/login" />}
        />
        <Route
          path="/analytics-dashboard/login"
          index
          element={<Page1 width={width} />}
        />
        <Route
          path="/analytics-dashboard/dashboard"
          element={<Page2 width={width} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
