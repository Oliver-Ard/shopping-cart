/* global describe, it, expect, beforeEach */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

describe("ErrorPage component", () => {
	function renderErrorPage() {
		return render(
			<BrowserRouter>
				<ErrorPage path="/" locationName="Home" />
			</BrowserRouter>
		);
	}

	beforeEach(() => {
		renderErrorPage();
	});

	it("renders all elements", () => {
		const { container } = render(
			<BrowserRouter>
				<ErrorPage path="/" locationName="Home" />
			</BrowserRouter>
		);
		expect(container).toMatchSnapshot();
	});

	it("navigates to home when the link is clicked", async () => {
		const user = userEvent.setup();

		const linkEl = screen.getByRole("link", { name: /home/i });
		await user.click(linkEl);
		expect(window.location.pathname).toBe("/");
	});
});
