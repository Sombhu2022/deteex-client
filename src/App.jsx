import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import AddWorkers from "./Pages/AddWorkers";
import AllWorkers from "./Pages/AllWorkers";
import AllCompanies from "./Pages/AllCompanies";
import MailLists from "./Pages/MailLists";
import Login from "./Pages/Login";

import ProfileSection from "./Pages/ProfileSection";

import AddCompany from "./Pages/AddCompany";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-workers" element={<AddWorkers />} />
        <Route path="/workers" element={<AllWorkers />} />
        <Route path="/workers/:id" element={<ProfileSection />} />
        <Route path="/add-company" element={<AddCompany />} />
        <Route path="/companies" element={<AllCompanies />} />
        <Route path="/mail-lists" element={<MailLists />} />
      </Route>
    </Routes>
  );
};

export default App;
