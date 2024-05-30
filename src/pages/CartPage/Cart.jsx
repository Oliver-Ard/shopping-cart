import { useOutletContext } from "react-router-dom";

import CartItems from "../../components/CartItems/CartItems";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

function Cart() {
	const [cartItems, setCartItems] = useOutletContext();

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{cartItems.length > 0 ? (
				<CartItems cartItems={cartItems} setCartItems={setCartItems} />
			) : (
				<EmptyCart />
			)}
		</>
	);
}
export default Cart;
