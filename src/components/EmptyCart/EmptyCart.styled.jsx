import styled from "styled-components";

export const StyledEmptyCart = styled.section`
	text-align: center;

	margin: 2rem 0;
	font-weight: 500;

	display: grid;
	place-content: center;
	place-items: center;
	gap: 0.5rem;

	a {
		background: var(--clr-blue);
		color: var(--clr-light);
		padding: 0.5em 1em;
		border-radius: var(--border-radius);
		margin-top: 1rem;

		display: flex;
		align-items: center;
		gap: 0.2rem;

		box-shadow: var(--box-shadow-2);

		transition:
			transform 150ms ease-in-out,
			box-shadow 150ms ease-in-out;

		&:hover {
			transform: scale(0.95);
			box-shadow: none;
		}

		&:active {
			opacity: 0.9;
		}
	}
`;
