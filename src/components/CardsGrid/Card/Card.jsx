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
	const [cartItems, setCartItems] = useOutletContext();

	function addToCart() {
		const product = {
			name: data.title,
			price: data.price,
			image: data.image,
		};

		setCartItems([...cartItems, product]);
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
