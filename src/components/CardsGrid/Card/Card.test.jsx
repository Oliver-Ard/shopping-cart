/* global describe, it, expect, beforeEach, afterEach, vi */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useOutletContext } from "react-router-dom";
import Card from "./Card";

vi.mock("react-router-dom", () => ({
	...vi.importActual("react-router-dom"),
	useOutletContext: vi.fn(),
}));

const mockSetCartItems = vi.fn();
const mockContextValue = [[], mockSetCartItems];
const mockProduct = {
	title: "Test Product",
	price: 100,
	image: "test-image.jpg",
	description: "Test Description",
};

describe("Card component", () => {
	beforeEach(() => {
		useOutletContext.mockReturnValue(mockContextValue);
		render(<Card data={mockProduct} />);
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	it("renders the product image", () => {
		const imgEl = screen.getByAltText(/test product/i);
		expect(imgEl).toBeInTheDocument();
		expect(imgEl).toHaveAttribute("src", mockProduct.image);
	});

	it("renders the product title", () => {
		const titleEl = screen.getByRole("heading", { name: /test product/i });
		expect(titleEl).toBeInTheDocument();
	});

	it("renders the product description", () => {
		const descriptionEl = screen.getByText(mockProduct.description);
		expect(descriptionEl).toBeInTheDocument();
	});

	it("renders the product price", () => {
		const priceEl = screen.getByText(`${mockProduct.price}$`);
		expect(priceEl).toBeInTheDocument();
	});

	it("adds the product to the cart when 'Add to Cart' button is clicked", async () => {
		const user = userEvent.setup();
		const addButton = screen.getByRole("button", { name: /add to cart/i });

		await user.click(addButton);

		expect(mockSetCartItems).toHaveBeenCalledWith([
			{
				name: mockProduct.title,
				price: mockProduct.price,
				image: mockProduct.image,
			},
		]);
	});

	it("should not add the product to the cart when 'Add to Cart' button is not clicked", () => {
		expect(mockSetCartItems).not.toHaveBeenCalled();
	});
});
