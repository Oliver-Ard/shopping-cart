/* global describe, it, expect, beforeEach */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import EmptyCart from "./EmptyCart";

describe("EmptyCart component", () => {
	function renderEmptyCart() {
		return render(
			<BrowserRouter>
				<EmptyCart />
			</BrowserRouter>
		);
	}

	beforeEach(() => {
		renderEmptyCart();
	});

	it("renders corect the text elements", () => {
		const textElements = screen.getAllByRole("paragraph");

		textElements.forEach((textEl) => {
			expect(textEl).toBeInTheDocument();
		});

		expect(textElements[0].textContent).toMatch(
			"It seems like your cart is empty!"
		);
		expect(textElements[1].textContent).toMatch(
			"You can start adding items by going to our shop page"
		);
	});

	it("renders 'shop now' link", () => {
		const shopNowBtn = screen.getByRole("link", { name: /shop now/i });
		expect(shopNowBtn).toBeInTheDocument();
	});

	it("go to the shop page when 'shop now' link is clicked", async () => {
		const user = userEvent.setup();

		const shopNowBtn = screen.getByRole("link", { name: /shop now/i });

		await user.click(shopNowBtn);

		expect(window.location.pathname).toBe("/shop");
	});
});
