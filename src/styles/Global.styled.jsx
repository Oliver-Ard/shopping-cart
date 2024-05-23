import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
  --font-size-200: 0.694rem;
	--font-size-300: 0.833rem;
	--font-size-400: 1rem;
	--font-size-500: 1.2rem;
	--font-size-600: 1.44rem;
	--font-size-700: 1.728rem;
	--font-size-800: 2.074rem;
	--font-size-900: 2.488rem;
	--font-size-1000: 2.986rem;
}


button {
	display: inline-block;
	cursor: pointer;
	color: inherit;
	border: none;
	padding: 0.3em;
}

button:active {
	opacity: 0.8;
}

i {
	font-size: inherit;
	margin: 0 0.3rem;
}
`;

export default GlobalStyles;
