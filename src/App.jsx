import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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

const App = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isAuthenticated, user } = useSelector(selectUser);


	useEffect(() => {
		if (!isAuthenticated) {
			navigate(`/login`);
		}
		dispatch(getUser());
	}, [dispatch, isAuthenticated]);

	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route element={<DashboardLayout />}>
				<Route path='/' element={<Dashboard />} />
				<Route path='/add-workers' element={<AddWorkers />} />
				<Route path='/workers' element={<AllWorkers />} />
				<Route path='/workers/:id' element={<ProfileSection />} />
				<Route path='/add-company' element={<AddCompany />} />
				<Route path='/companies' element={<AllCompanies />} />
				<Route path='/mail-lists' element={<MailLists />} />
			</Route>
		</Routes>
	);
};

export default App;
