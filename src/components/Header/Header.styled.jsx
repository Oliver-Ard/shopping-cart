import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
	background: var(--clr-primary);
	padding: 1rem 0;
	box-shadow: var(--box-shadow);

	position: sticky;
	top: 0;
	z-index: 2;
`;

export const NavBar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	ul {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	li {
		display: flex;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
	}
`;

export const HeaderLogo = styled.img`
	width: 3.5rem;
`;

export const TextLink = styled(NavLink)`
	color: var(--clr-light);
	font-weight: 500;

	transition: transform 200ms ease-in-out;

	&:hover {
		transform: translateY(-2px);
	}

	&.active {
		border-bottom: 1px solid currentColor;
	}
`;

export const CartLink = styled(NavLink)`
	color: var(--clr-light);
	font-size: var(--font-size-700);

	transition: transform 200ms ease-in-out;

	position: relative;

	&:hover {
		transform: scale(1.1);
	}

	&::before {
		content: attr(data-cart);
		background: var(--clr-secondary);
		color: var(--clr-dark);
		font-size: var(--font-size-300);
		font-weight: 700;
		padding: 0.15rem 0.4rem 0.1rem;
		border-radius: 50%;

		position: absolute;
		top: -3px;
		right: -12px;
	}

	svg {
		margin-top: 0.5rem;
	}

	&.active {
		color: var(--clr-secondary);
	}
`;
