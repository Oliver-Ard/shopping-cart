import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledError = styled.div`
	text-align: center;
	padding: 5rem 2rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		color: var(--clr-error);
		margin-bottom: 0.5rem;
	}

	p {
		font-size: var(--font-size-500);
		font-weight: 500;
		margin-bottom: 1rem;
	}

	a {
		background: var(--clr-error);
		color: var(--clr-light);
		font-weight: 500;
		padding: 0.5em 1em;
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
	}
`;

function ErrorPage({ path, locationName }) {
	return (
		<StyledError>
			<h1>Oops! Error: 404</h1>
			<p>We can&apos;t seem to find the page you&apos;re looking for.</p>
			<Link to={path}>{locationName}</Link>
		</StyledError>
	);
}
export default ErrorPage;

ErrorPage.propTypes = {
	path: PropTypes.string,
	locationName: PropTypes.string,
};
