import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";

import Card from "./Card/Card";

import { LoadingIcon } from "../../styles/shared/LoadingIcon.styled";
import { ServerError } from "../../styles/shared/Errors.styled";
import { StyledCardsGrid } from "./CardsGrid.styled";

function CardsGrid({ category }) {
	const { products, error, isLoading } = useFetch(
		"https://fakestoreapi.com/products"
	);

	function filterProducts(type) {
		return products.filter((product) => product.category === type);
	}

	function renderProducts() {
		switch (category) {
			case "men-clothes": {
				return filterProducts("men's clothing").map((product) => (
					<Card key={product.id} data={product} />
				));
			}
			case "women-clothes": {
				return filterProducts("women's clothing").map((product) => (
					<Card key={product.id} data={product} />
				));
			}
			case "jewelery": {
				return filterProducts("jewelery").map((product) => (
					<Card key={product.id} data={product} />
				));
			}
			case "electronics": {
				return filterProducts("electronics").map((product) => (
					<Card key={product.id} data={product} />
				));
			}
			default: {
				return products.map((product) => (
					<Card key={product.id} data={product} />
				));
			}
		}
	}

	return (
		<StyledCardsGrid>
			{isLoading && <LoadingIcon data-testid="loading-icon" />}
			{error && <ServerError>{error}</ServerError>}
			{!error && renderProducts()}
		</StyledCardsGrid>
	);
}
export default CardsGrid;

CardsGrid.propTypes = {
	category: PropTypes.string,
};
