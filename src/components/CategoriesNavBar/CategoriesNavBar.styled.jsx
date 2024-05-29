import styled from "styled-components";

export const StyledCategoriesNavBar = styled.nav`
	margin: 2rem 0;

	ul {
		text-align: center;

		display: grid;
		grid-template-columns: repeat(auto-fit, 12rem);
		justify-items: center;
		place-content: center;
	}

	li {
		display: flex;

		a {
			background: var(--clr-secondary);
			color: var(--clr-dark);
			font-weight: 500;
			padding: 0.5em 1em;
			margin: 0.5rem 0;
			border-radius: var(--border-radius);

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

			&.active {
				background: var(--clr-primary);
				color: var(--clr-light);
			}
		}
	}
`;
