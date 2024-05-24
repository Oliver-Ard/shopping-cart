/* global describe, it, expect */

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

	it("renders logo correctly", () => {
		renderHeader(mockCartItems);

		const logoEl = screen.getByAltText("CartNest Logo");
		expect(logoEl).toBeInTheDocument();
	});

	it("renders navigation links", () => {
		renderHeader(mockCartItems);

		const homeLink = screen.getByRole("link", { name: /Home/i });
		const shopLink = screen.getByRole("link", { name: /Shop/i });
		const cartLink = screen.getByLabelText("Cart");

		expect(homeLink).toBeInTheDocument();
		expect(shopLink).toBeInTheDocument();
		expect(cartLink).toBeInTheDocument();
	});

	it("cart button shows the correct number of items in the cart", () => {
		renderHeader(mockCartItems);

		const cartButton = screen.getByLabelText("Cart");
		expect(cartButton).toHaveAttribute(
			"data-cart",
			mockCartItems.length.toString()
		);
	});

	it("navigates to Home when Logo is clicked", async () => {
		renderHeader(mockCartItems);
		const user = userEvent.setup();

		const logoEl = screen.getByAltText("CartNest Logo");
		await user.click(logoEl);
		expect(window.location.pathname).toBe("/");
	});

	it("navigates to Home when Home link is clicked", async () => {
		renderHeader(mockCartItems);
		const user = userEvent.setup();

		const homeButton = screen.getByRole("link", { name: /Home/i });
		await user.click(homeButton);
		expect(window.location.pathname).toBe("/");
	});

	it("navigates to Shop when Shop link is clicked", async () => {
		renderHeader(mockCartItems);
		const user = userEvent.setup();

		const shopButton = screen.getByRole("link", { name: /Shop/i });
		await user.click(shopButton);
		expect(window.location.pathname).toBe("/shop");
	});

	it("navigates to Cart when Cart icon is clicked", async () => {
		renderHeader(mockCartItems);
		const user = userEvent.setup();

		const cartButton = screen.getByLabelText("Cart");
		await user.click(cartButton);
		expect(window.location.pathname).toBe("/cart");
	});
});
