/* global describe, it, expect, vi, beforeEach */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItems from "./CartItems";

// Mock data for cart items
const mockCartItems = [
	{ id: 1, name: "Item 1", image: "item1.jpg", price: 10, quantity: 2 },
	{ id: 2, name: "Item 2", image: "item2.jpg", price: 20, quantity: 1 },
];

const mockSetCartItems = vi.fn();

describe("CartItems component", () => {
	function renderCartItems(cartItems = mockCartItems) {
		return render(
			<CartItems cartItems={cartItems} setCartItems={mockSetCartItems} />
		);
	}

	beforeEach(() => {
		vi.clearAllMocks();
		renderCartItems();
	});

	it("renders cart items correctly", () => {
		const itemImages = screen.getAllByRole("img");
		const itemNames = screen.getAllByText(/Item/i);
		const itemPrices = screen.getAllByText(/\d+\$/);

		mockCartItems.forEach((item, index) => {
			expect(itemImages[index]).toHaveAttribute("src", item.image);
			expect(itemNames[index]).toHaveTextContent(item.name);
			expect(itemPrices[index]).toHaveTextContent(
				`${item.price * item.quantity}$`
			);
		});
	});

	it("displays the correct total price,", () => {
		const totalPrice = mockCartItems
			.reduce((acc, item) => acc + item.price * item.quantity, 0)
			.toFixed(2);

		const totalPriceEl = screen.getByText(`${totalPrice}$`);
		expect(totalPriceEl).toBeInTheDocument();
	});

	it("increments item quantity", async () => {
		const user = userEvent.setup();
		const incrementButtons = screen.getAllByLabelText("Increment");

		await user.click(incrementButtons[0]);

		expect(mockSetCartItems).toHaveBeenCalled();
	});

	it("decrements item quantity", async () => {
		const user = userEvent.setup();
		const decrementButtons = screen.getAllByLabelText("Decrement");

		await user.click(decrementButtons[0]);

		expect(mockSetCartItems).toHaveBeenCalled();
	});

	it("removes item when quantity is decremented to 0", async () => {
		const user = userEvent.setup();
		const decrementButtons = screen.getAllByLabelText("Decrement");

		// Click decrement twice to attempt to set quantity to 0
		await user.click(decrementButtons[0]);
		await user.click(decrementButtons[0]);

		expect(mockSetCartItems).toHaveBeenCalledTimes(2);
	});

	it("removes item when delete button is clicked", async () => {
		const user = userEvent.setup();
		const deleteButtons = screen.getAllByLabelText("Delete Item");

		await user.click(deleteButtons[0]);

		expect(mockSetCartItems).toHaveBeenCalledWith([
			{ id: 2, name: "Item 2", image: "item2.jpg", price: 20, quantity: 1 },
		]);
	});
});
