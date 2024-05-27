/* global describe, it, expect, beforeEach */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

// Mock data for cart items
const mockCartItems = [
	{ id: 1, name: "Item 1" },
	{ id: 2, name: "Item 2" },
];

describe("Header component", () => {
	// Utility function to render the component with necessary wrappers
	function renderHeader(data) {
		return render(
			<BrowserRouter>
				<Header data={data} />
			</BrowserRouter>
		);
	}

	beforeEach(() => {
		renderHeader(mockCartItems);
	});

	it("renders logo correctly", () => {
		const logoEl = screen.getByAltText("CartNest Logo");
		expect(logoEl).toBeInTheDocument();
	});

	it("renders navigation links", () => {
		const homeLink = screen.getByRole("link", { name: /home/i });
		const shopLink = screen.getByRole("link", { name: /shop/i });
		const cartLink = screen.getByLabelText("Cart");

		expect(homeLink).toBeInTheDocument();
		expect(shopLink).toBeInTheDocument();
		expect(cartLink).toBeInTheDocument();
	});

	it("cart button shows the correct number of items in the cart", () => {
		const cartLink = screen.getByLabelText(/cart/i);
		expect(cartLink).toHaveAttribute(
			"data-cart",
			mockCartItems.length.toString()
		);
	});

	it("navigates to Home when Logo is clicked", async () => {
		const user = userEvent.setup();

		const logoEl = screen.getByAltText("CartNest Logo");
		await user.click(logoEl);
		expect(window.location.pathname).toBe("/");
	});

	it("navigates to Home when Home link is clicked", async () => {
		const user = userEvent.setup();

		const homeLink = screen.getByRole("link", { name: /home/i });
		await user.click(homeLink);
		expect(window.location.pathname).toBe("/");
	});

	it("navigates to Shop when Shop link is clicked", async () => {
		const user = userEvent.setup();

		const shopLink = screen.getByRole("link", { name: /shop/i });
		await user.click(shopLink);
		expect(window.location.pathname).toBe("/shop");
	});

	it("navigates to Cart when Cart icon is clicked", async () => {
		const user = userEvent.setup();

		const cartButton = screen.getByLabelText(/cart/i);
		await user.click(cartButton);
		expect(window.location.pathname).toBe("/cart");
	});
});
