/* global describe, it, expect, beforeEach */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Hero";

describe("Hero component", () => {
	// Utility function to render the component with necessary wrappers
	function renderHero() {
		return render(
			<BrowserRouter>
				<Hero />
			</BrowserRouter>
		);
	}

	beforeEach(() => {
		renderHero();
	});

	it("renders corect the title", () => {
		const titleEl = screen.getByRole("heading").textContent;
		expect(titleEl).toMatch(/welcome to cartnest/i);
	});

	it("renders the description", () => {
		const descriptionEl = screen.getByRole("paragraph");
		expect(descriptionEl).toBeInTheDocument();
	});

	it("renders the shop link", () => {
		const shopLinkEl = screen.getByRole("link", { name: /start shopping/i });
		expect(shopLinkEl).toBeInTheDocument();
	});

	it("renders the hero img", () => {
		const heroImgEl = screen.getByAltText(/cart with presents/i);
		expect(heroImgEl).toBeInTheDocument();
	});

	it("navigates to Shop when 'Start Shopping' link is clicked ", async () => {
		const user = userEvent.setup();

		const shopLinkEl = screen.getByRole("link", { name: /start shopping/i });
		await user.click(shopLinkEl);
		expect(window.location.pathname).toBe("/shop");
	});
});
