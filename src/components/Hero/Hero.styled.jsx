import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHero = styled.section`
	margin: 5rem 0;

	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin: 2rem 0;
		flex-direction: column-reverse;
		gap: 1rem;
	}
`;

export const Title = styled.h1`
	color: var(--clr-primary);
	margin-bottom: 1rem;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		font-size: var(--font-size-800);
	}
`;

export const Description = styled.p`
	margin-bottom: 1rem;
`;

export const ShopLink = styled(Link)`
	display: inline-block;
	background: var(--clr-primary);
	color: var(--clr-light);
	font-weight: 500;
	padding: 0.8em 2em;
	margin: 1rem 0;
	border-radius: var(--border-radius);

	box-shadow: var(--box-shadow-2);

	transition:
		transform 150ms ease-in-out,
		box-shadow 150ms ease-in-out;

	&:hover {
		transform: scale(0.95);
		box-shadow: none;
	}
`;

export const HeroImg = styled.img`
	width: min(100%, 40rem);

	@media (max-width: ${({ theme }) => theme.tablet}) {
		width: min(100%, 25rem);
	}
`;
