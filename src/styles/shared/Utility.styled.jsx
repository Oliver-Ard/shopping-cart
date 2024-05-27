import styled from "styled-components";

export const Container = styled.div`
	max-width: 80rem;
	margin: 0 auto;
	padding: 0 2rem;
`;

export const HighlightedText = styled.span`
	color: ${({ color }) => color || "var(--clr-primary)"};
	font-weight: 600;
`;
