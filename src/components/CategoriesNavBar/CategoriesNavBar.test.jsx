/* global describe, it, expect, beforeEach */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CategoriesNavBar from "./CategoriesNavBar";

describe("CategoriesNavBar component", () => {
	function renderCategoriesNavBar() {
		return render(
			<BrowserRouter>
				<CategoriesNavBar />
			</BrowserRouter>
		);
	}

	beforeEach(() => {
		renderCategoriesNavBar();
	});

	it("renders all category links", () => {
		const categoriesLinks = screen.getAllByRole("link");

		categoriesLinks.forEach((link) => {
			expect(link).toBeInTheDocument();
		});
	});

	it("nagivates to the correct path when a category link is clicked", async () => {
		const user = userEvent.setup();

		const electronicsLink = screen.getByRole("link", { name: /electronics/i });
		await user.click(electronicsLink);
		expect(window.location.pathname).toBe("/shop/electronics");

		const allProductsLink = screen.getByRole("link", { name: /all products/i });
		await user.click(allProductsLink);
		expect(window.location.pathname).toBe("/shop");

		const menClothesLink = screen.getByRole("link", { name: /women clothes/i });
		await user.click(menClothesLink);
		expect(window.location.pathname).toBe("/shop/women-clothes");
	});
});
