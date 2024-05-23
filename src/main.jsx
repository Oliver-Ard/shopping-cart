import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ResetStyles from "./styles/Reset.styled";
import GlobalStyles from "./styles/Global.styled";

import routes from "./routes";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ResetStyles />
		<GlobalStyles />
		<RouterProvider router={router} />
	</React.StrictMode>
);
