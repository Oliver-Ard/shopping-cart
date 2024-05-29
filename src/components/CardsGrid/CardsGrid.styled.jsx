import styled from "styled-components";

export const StyledCardsGrid = styled.div`
	margin: 2rem 0;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	justify-items: center;
	gap: 2rem;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
	}
`;
