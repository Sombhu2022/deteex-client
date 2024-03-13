import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<GoogleOAuthProvider clientId='181727105626-juff5vov439lbm54s55hjo0pstnmqas7.apps.googleusercontent.com'>
			<App />
		</GoogleOAuthProvider>
	</Router>
);
