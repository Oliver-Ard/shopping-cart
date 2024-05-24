import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import ResetStyles from "./styles/Reset.styled";
import GlobalStyles from "./styles/Global.styled";
import theme from "./styles/Theme.styled";

import routes from "./routes";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ResetStyles />
			<GlobalStyles />
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
