import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import ResetStyles from "./styles/global/Reset.styled";
import GlobalStyles from "./styles/global/Global.styled";
import theme from "./styles/global/Theme.styled";

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
