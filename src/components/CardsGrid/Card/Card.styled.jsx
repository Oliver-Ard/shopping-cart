import styled from "styled-components";

export const StyledCard = styled.div`
	background: var(--clr-light);
	padding: 2rem;
	border-radius: var(--border-radius);
	box-shadow: var(--box-shadow);

	transition: transform 200ms ease-in-out;

	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	&:hover {
		transform: scale(1.02);
	}
`;

export const CardImg = styled.img`
	align-self: center;

	width: min(100%, 10rem);
`;

export const CardTitle = styled.h2`
	font-size: var(--font-size-500);

	@media (max-width: ${({ theme }) => theme.mobile}) {
		font-size: var(--font-size-500);
	}
`;

export const CardDescription = styled.p`
	margin-bottom: 2rem;

	word-break: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const FlexWrapper = styled.div`
	margin-top: auto;
	align-self: stretch;

	display: flex;
	justify-content: space-between;
`;

export const CardPrice = styled.p`
	font-size: var(--font-size-500);
	color: var(--clr-primary);
	font-weight: 700;
`;

export const CardBtn = styled.button`
	cursor: pointer;
	background: var(--clr-secondary);
	border-radius: var(--border-radius);
	font-weight: 500;
	padding: 0.5em 1em;
`;
