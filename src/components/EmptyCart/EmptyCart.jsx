import { LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router-dom";
import { StyledEmptyCart } from "./EmptyCart.styled";

function EmptyCart() {
	return (
		<StyledEmptyCart>
			<p>It seems like your cart is empty!</p>
			<p>You can start adding items by going to our shop page</p>
			<Link to="/shop">
				<LuShoppingBag />
				Shop Now
			</Link>
		</StyledEmptyCart>
	);
}
export default EmptyCart;
