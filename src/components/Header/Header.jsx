import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.png";

import {
	StyledHeader,
	NavBar,
	TextLink,
	CartLink,
	HeaderLogo,
} from "./Header.styled";

import { Container } from "../../styles/shared/Utility.styled";

export default function Header({ data }) {
	return (
		<StyledHeader>
			<Container>
				<NavBar>
					<Link to="/">
						<HeaderLogo src={logo} alt="CartNest Logo" />
					</Link>

					<ul>
						<li>
							<TextLink to="/">Home</TextLink>
						</li>
						<li>
							<TextLink to="/shop">Shop</TextLink>
						</li>
						<li>
							<CartLink to="/cart" data-cart={data.length} aria-label="Cart">
								<FaShoppingCart />
							</CartLink>
						</li>
					</ul>
				</NavBar>
			</Container>
		</StyledHeader>
	);
}

Header.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
