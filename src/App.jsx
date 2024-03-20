import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import AddWorkers from "./Pages/AddWorkers";
import AllWorkers from "./Pages/AllWorkers";
import AllCompanies from "./Pages/AllCompanies";
import MailLists from "./Pages/MailLists";
import Login from "./Pages/Login";

import ProfileSection from "./Pages/ProfileSection";

import AddCompany from "./Pages/AddCompany";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser } from "./redux/slices/authSlice";
import PaymentList from "./Pages/PaymentList";
import TeamMembers from "./Pages/TeamMembers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
	const dispatch = useDispatch();

	const { isAuthenticated } = useSelector(selectUser);

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch, isAuthenticated]); // Added navigate to the dependencies array

	return (
		<Router>
			<ToastContainer />
			<Routes>
				<Route element={<ProtectedRoute />}>
					<Route element={<DashboardLayout />}>
						<Route path='/' element={<Dashboard />} />
						<Route path='/add-workers' element={<AddWorkers />} />
						<Route path='/workers' element={<AllWorkers />} />
						<Route path='/workers/:id' element={<ProfileSection />} />
						<Route path='/add-company' element={<AddCompany />} />
						<Route path='/companies' element={<AllCompanies />} />
						<Route path='/mail-lists' element={<MailLists />} />
						<Route path='/payment-list' element={<PaymentList />} />
						<Route path='/team-members' element={<TeamMembers />} />
					</Route>
				</Route>
				<Route path='/login' element={<Login />} />
			</Routes>
		</Router>
	);
};

export default App;
