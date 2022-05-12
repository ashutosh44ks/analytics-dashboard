import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/analytics-dashboard" element={<Navigate replace to="/analytics-dashboard/login" />} />
        <Route path="/analytics-dashboard/login" index element={<Page1 />} />
        <Route path="/analytics-dashboard/dashboard" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
