import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

import {
	StyledCard,
	CardImg,
	CardTitle,
	CardDescription,
	FlexWrapper,
	CardPrice,
	CardBtn,
} from "./Card.styled";

function Card({ data }) {
	// eslint-disable-next-line no-unused-vars
	const [cartItems, setCartItems] = useOutletContext();

	function addToCart() {
		setCartItems((prevCart) => {
			const itemInCart = prevCart.find((cartItem) => cartItem.id === data.id);

			if (itemInCart) {
				return prevCart.map((cartItem) =>
					cartItem.id === data.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				);
			}

			const product = {
				id: data.id,
				name: data.title,
				price: data.price,
				image: data.image,
				quantity: 1,
			};

			return [...prevCart, product];
		});
	}

	return (
		<StyledCard>
			<CardImg src={data.image} alt={data.title} />
			<CardTitle>{data.title}</CardTitle>
			<CardDescription>{data.description}</CardDescription>
			<FlexWrapper>
				<CardPrice>{data.price}$</CardPrice>
				<CardBtn type="button" onClick={addToCart}>
					Add to Cart
				</CardBtn>
			</FlexWrapper>
		</StyledCard>
	);
}
export default Card;

Card.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	data: PropTypes.object,
};
