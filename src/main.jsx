import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<Router>
			<GoogleOAuthProvider clientId='181727105626-juff5vov439lbm54s55hjo0pstnmqas7.apps.googleusercontent.com'>
				<App />
			</GoogleOAuthProvider>
		</Router>
	</Provider>
);

// in local setup use this
// export const base_url = "http://localhost:8080";

// in production code push this
export const base_url = 'https://deteex-server.vercel.app';
