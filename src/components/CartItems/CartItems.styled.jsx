import styled from "styled-components";

export const StyledCartItems = styled.section`
	margin: 2rem 0;

	display: flex;
	justify-content: space-between;
	gap: 1rem;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column-reverse;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	flex: 2;
`;

export const ItemWrapper = styled.div`
	text-align: center;
	min-height: 10rem;
	padding: 1rem;
	border: 1px solid var(--clr-dark);
	border-radius: var(--border-radius);

	display: flex;
	align-items: center;
	gap: 1rem;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
	}
`;

export const ItemImage = styled.img`
	width: 4rem;
`;

export const ItemName = styled.p`
	margin-right: 1rem;
`;

export const QuantityBtn = styled.button`
	cursor: pointer;
	background: var(--clr-secondary);
	font-weight: 500;
	padding: 0.1em 0.5em;
	border-radius: var(--border-radius-4);
`;

export const ItemQuantity = styled.p`
	font-weight: 600;
`;

export const DeleteBtn = styled.button`
	cursor: pointer;
	background: var(--clr-error);
	color: var(--clr-light);
	font-weight: 500;
	padding: 0.5em;
	margin-left: auto;
	border-radius: var(--border-radius-4);

	display: flex;
`;

export const ItemPrice = styled.p`
	color: var(--clr-primary);
	font-weight: 600;
`;

export const TotalWrapper = styled.div`
	text-align: center;
`;

export const TotalPrice = styled.p`
	font-size: var(--font-size-500);
	margin-bottom: 1rem;
	font-weight: 600;
`;

export const CheckoutBtn = styled.button`
	cursor: pointer;
	background: var(--clr-blue);
	color: var(--clr-light);
	font-weight: 500;
	padding: 0.5em;
	border-radius: var(--border-radius-4);
`;
