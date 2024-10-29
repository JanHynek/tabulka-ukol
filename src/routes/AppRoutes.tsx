import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyTable from "../pages/company/CompanyTable";
import CompanyDetail from "../pages/company-detail/CompanyDetail";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyTable />} />
        <Route path="/company/:id" element={<CompanyDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
