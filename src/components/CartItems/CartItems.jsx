import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";

import { HighlightedText } from "../../styles/shared/Utility.styled";

import {
	StyledCartItems,
	Wrapper,
	ItemWrapper,
	ItemImage,
	ItemName,
	QuantityBtn,
	ItemQuantity,
	DeleteBtn,
	ItemPrice,
	TotalWrapper,
	TotalPrice,
	CheckoutBtn,
} from "./CartItems.styled";

function CartItems({ cartItems, setCartItems }) {
	function sumTotalPrice() {
		return cartItems
			.reduce((acc, item) => acc + item.price * item.quantity, 0)
			.toFixed(2);
	}

	function displayItemPrice(item) {
		return item.price * item.quantity;
	}

	function decrementQuantity(itemId) {
		setCartItems((prevCart) =>
			prevCart.map((cartItem) =>
				cartItem.id === itemId
					? {
							...cartItem,
							quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 1,
						}
					: cartItem
			)
		);
	}

	function incrementQuantity(itemId) {
		setCartItems((prevCart) =>
			prevCart.map((cartItem) =>
				cartItem.id === itemId
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem
			)
		);
	}

	function removeItem(itemId) {
		const newCart = cartItems.filter((cartItem) => cartItem.id !== itemId);
		setCartItems(newCart);
	}

	return (
		<StyledCartItems>
			<Wrapper>
				{cartItems.map((item) => (
					<ItemWrapper key={item.id}>
						<ItemImage src={item.image} alt={item.name} />
						<ItemName>{item.name}</ItemName>

						<QuantityBtn
							type="button"
							onClick={() =>
								item.quantity > 1
									? decrementQuantity(item.id)
									: removeItem(item.id)
							}
							aria-label="Decrement">
							-
						</QuantityBtn>
						<ItemQuantity>{item.quantity}</ItemQuantity>

						<QuantityBtn
							type="button"
							onClick={() => incrementQuantity(item.id)}
							aria-label="Increment">
							+
						</QuantityBtn>

						<ItemPrice>{displayItemPrice(item)}$</ItemPrice>

						<DeleteBtn
							type="button"
							onClick={() => removeItem(item.id)}
							aria-label="Delete Item">
							<FaTrash />
						</DeleteBtn>
					</ItemWrapper>
				))}
			</Wrapper>

			<TotalWrapper>
				<TotalPrice>
					TOTAL: <HighlightedText>{sumTotalPrice()}$</HighlightedText>{" "}
				</TotalPrice>
				<CheckoutBtn type="button">Checkout</CheckoutBtn>
			</TotalWrapper>
		</StyledCartItems>
	);
}
export default CartItems;

CartItems.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
	setCartItems: PropTypes.func,
};
