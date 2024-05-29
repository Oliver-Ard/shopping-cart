/* global describe, it, expect, beforeEach, vi */

import { render, screen } from "@testing-library/react";
import { useOutletContext } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import CardsGrid from "./CardsGrid";

// Mock the useFetch hook
vi.mock("../../hooks/useFetch");

// Mock the useOutletContext hook
vi.mock("react-router-dom", () => ({
	...vi.importActual("react-router-dom"),
	useOutletContext: vi.fn(),
}));

const mockProducts = [
	{
		id: 1,
		category: "men's clothing",
		title: "Men's T-Shirt",
		price: 25,
		image: "men-shirt.jpg",
		description: "A nice t-shirt",
	},
	{
		id: 2,
		category: "women's clothing",
		title: "Women's Dress",
		price: 45,
		image: "women-dress.jpg",
		description: "A beautiful dress",
	},
	{
		id: 3,
		category: "jewelery",
		title: "Gold Necklace",
		price: 150,
		image: "gold-necklace.jpg",
		description: "A shiny necklace",
	},
	{
		id: 4,
		category: "electronics",
		title: "Smartphone",
		price: 699,
		image: "smartphone.jpg",
		description: "A latest smartphone",
	},
];

describe("CardsGrid component", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		useOutletContext.mockReturnValue([[], vi.fn()]);
	});

	it("renders loading icon when data is being fetched", () => {
		useFetch.mockReturnValue({ products: [], error: null, isLoading: true });

		render(<CardsGrid category="all" />);

		expect(screen.getByTestId("loading-icon")).toBeInTheDocument();
	});

	it("renders an error message when there is an error fetching data", () => {
		useFetch.mockReturnValue({
			products: [],
			error: "Failed to fetch",
			isLoading: false,
		});

		render(<CardsGrid category="all" />);

		expect(screen.getByText("Failed to fetch")).toBeInTheDocument();
	});

	it("renders all products when category is 'all'", () => {
		useFetch.mockReturnValue({
			products: mockProducts,
			error: null,
			isLoading: false,
		});

		render(<CardsGrid category="all" />);

		expect(
			screen.getByRole("heading", { name: /men's t-shirt/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: /women's dress/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: /gold necklace/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: /smartphone/i })
		).toBeInTheDocument();
	});

	it("renders men's clothing products when category is 'men-clothes'", () => {
		useFetch.mockReturnValue({
			products: mockProducts,
			error: null,
			isLoading: false,
		});

		render(<CardsGrid category="men-clothes" />);

		expect(
			screen.getByRole("heading", { name: /men's t-shirt/i })
		).toBeInTheDocument();

		expect(
			screen.queryByRole("heading", { name: /women's dress/i })
		).not.toBeInTheDocument();

		expect(
			screen.queryByRole("heading", { name: /gold necklace/i })
		).not.toBeInTheDocument();

		expect(
			screen.queryByRole("heading", { name: /smartphone/i })
		).not.toBeInTheDocument();
	});
});
